"use client"

import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { ChatCompletionRequestMessage } from "openai"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import Heading from "@/components/heading"
import { Code } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"



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
    console.log(values);
    
    
    // try {
   
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
       <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Code `}</span>
       <Separator className="px-4 mb-4 py-[0.07rem]"/>
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
        <div className=' space-y-4 mt-4'>
         <div className=' rounded-lg border border-neutral-500 w-full h-[30rem]'>
         <h3 className=' p-2 text-muted-foreground text-xs'>Response...</h3>
         </div>
       </div>
      </div>
    </div>
  )
}

export default CodePage