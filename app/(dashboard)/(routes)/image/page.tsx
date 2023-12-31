"use client"

import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { amountOptions, formSchema, resolutionOptions } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import Heading from "@/components/heading"
import { ImageIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Empty } from "@/components/empty"
import Loader from "@/components/loader"


const ImagePage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [photos, setPhotos] =useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onsubmit = async (values: z.infer<typeof formSchema>) => { 
      console.log(values);
      
  }

  return (
    <div>
        <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Image `}</span>
       <Separator className="px-4 mb-4 py-[0.07rem]"/>
      <Heading
        title="Image Generations"
        description="Turn your promp into image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
     
      <div className=" px-4 lg:px-8">
        <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onsubmit)}
            className=" rounded-lg border w-full px-3 p-4 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField
              name="prompt"
              render={({field}) => (
                <FormItem className=" col-span-12 lg:col-span-6">
                  <FormControl className=" m-0 p-0">
                    <Input
                      className="
                      px-2
                      border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="A picture of a horse in Swiss alps"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="px-2"/>
                </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading} 
                    onValueChange={field.onChange} 
                    value={field.value} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select 
                    disabled={isLoading} 
                    onValueChange={field.onChange} 
                    value={field.value} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((option) => (
                        <SelectItem 
                          key={option.value} 
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
      </div>
        <div className=' space-y-4 mt-4'>
           
        {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                <Loader/>
            </div>
          )}

          {photos.length === 0 && !isLoading && (
               <div className=' rounded-lg border border-neutral-200 w-full h-[30rem]'>
                  <Empty label="No photos generated..."/>
               </div>
          )}
       
        </div>
        </div>
    </div>
  )
}

export default ImagePage