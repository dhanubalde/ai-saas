"use client"


import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from './contants'
import { zodResolver} from "@hookform/resolvers/zod"
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useProModal } from '@/hooks/use-proModal'
import { ChatCompletionRequestMessage } from 'openai'
import { Separator } from '@/components/ui/separator'



const ConversationPage = () => {

  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    console.log(values);
    
    try {

      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      }

      const newMessages = [...messages, userMessage];
      const response = await axios.post(`/api/conversation`,
        {
        messages: newMessages
      });

      setMessages((current) => [...current,userMessage,response.data])

      form.reset();

    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else { 
        toast.error("Something went wrong.")
      }
    } finally { 
      router.refresh();
    }
  }



  return (
    <div>
      <Heading
        title="Conversation"
        icon={MessageSquare}
        description='Our most advanced conversation model'
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />  
      <Separator className="mb-4 py-[0.05rem]"/>
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='
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
              '
            >   
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className=' col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className=' border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>

                )}
              />
              <Button
                className=' col-span-12 lg:col-span-2 w-full'
                type='submit'
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            
            </form>
          </Form>
        </div>
        <div className=' space-y-4 mt-4'>
        
          {/* {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                <Loader/>
            </div>
          )}

          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started."/>
          )} */}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message) => (
              <div key={message.content}>
                { message.content }
             </div>
                
            ))} 
          </div>
        </div>
      </div>
    </div>
    
  ) 
}

export default ConversationPage