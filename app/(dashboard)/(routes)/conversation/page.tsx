"use client"


import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver} from "@hookform/resolvers/zod"
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useProModal } from '@/hooks/use-proModal'
import { ChatCompletionRequestMessage } from 'openai'
import { Separator } from '@/components/ui/separator'
import { formSchema } from './contants'
import { Empty } from '@/components/empty'



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
    
    // try {

    //   const userMessage: ChatCompletionRequestMessage = {
    //     role: "user",
    //     content: values.prompt
    //   }

    //   const newMessages = [...messages, userMessage];
    //   const response = await axios.post(`/api/conversation`,
    //     {
    //     messages: newMessages
    //   });

    //   setMessages((current) => [...current,userMessage,response.data])

    //   form.reset();

    // } catch (error: any) {
    //   if (error?.response?.status === 403) {
    //     proModal.onOpen();
    //   } else { 
    //     toast.error("Something went wrong.")
    //   }
    // } finally { 
    //   router.refresh();
    // }
  }



  return (
    <div>
       <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Conversation `}</span>
       <Separator className="px-4 mb-4 py-[0.07rem]"/>
      <Heading
        title="Conversation"
        icon={MessageSquare}
        description='Our most advanced conversation model'
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />  
      
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
                        className='py-2 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?" 
                        {...field}
                      />
                   
                    </FormControl>
                    <FormMessage className="px-2"/>
                    {/* <FormMessage>
                        Field is required!
                    </FormMessage> */}
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
         
        {messages.length === 0 && !isLoading && (
               <div className=' rounded-lg border border-neutral-200 w-full h-[30rem]'>
                  <Empty label="No conversation started..."/>
               </div>
          )}
        </div>
      </div>
    </div>
    
  ) 
}

export default ConversationPage