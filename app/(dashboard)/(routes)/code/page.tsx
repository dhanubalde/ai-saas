"use client"

import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { ChatCompletionRequestMessage } from "openai"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import  ReactMarkdown from "react-markdown"
import Heading from "@/components/heading"
import { Code } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Empty } from "@/components/empty"
import Loader from "@/components/loader"
import axios from "axios"
import { UserAvatar } from "@/components/user-avatar"
import { BotAvatar } from "@/components/bot-avatar"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"



const CodePage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    try {
      console.log(values);
      if (values) { 

        return toast({
          variant: "default",
          title: "Genia AI v.2.0",
          description: `not available right now.`
        })
      }
    } catch (error: any) {
      toast({
        title: `Oops !`,
        variant: "destructive",
        description: "Something went wrong"
      })
    } finally { 
      router.refresh()
    }
    // try {
    //   const userMessage: ChatCompletionRequestMessage = {
    //     role: "user",
    //     content: values.prompt
    //   };
    //   const newMessages = [...messages, userMessage];
    //   const response = await axios.post('/api/code', {
    //     messages: newMessages
    //   });

    //   setMessages((current) => [...current, userMessage, response.data])

    //   form.reset()

    // } catch (error: any) {
    //   if (error?.response?.status === 403) {
    //     proModal.onOpen()
    //   } else {
    //     toast.error("Something went wrong.")
    //   }
    // } finally { 
    //   router.refresh()
    // }
    
  }

  return (
    <div>
       <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `> Code `}</span>
       <Separator className="px-4 mb-4 py-[0.01rem]"/>
      <Heading
        title="Code Generations"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className=" px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" 
                rounded-lg 
                border
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm 
                grid 
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className=" col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="px-2 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"

                        disabled={isLoading}
                        placeholder="Simple toggle button using react hooks."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="px-2"/>
                  </FormItem>
                )}
              />
              <Button className=" 
              col-span-12
              lg:col-span-2
              w-full"
                type="submit"
                disabled={isLoading}
                size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-transfarent">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div 
                key={message.content} 
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7">
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePage