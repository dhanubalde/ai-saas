"use client"

import * as z from "zod"
import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import { Separator } from "@/components/ui/separator"
import Heading from "@/components/heading"
import { FileAudio, FileVideo } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loader from "@/components/loader"
import { Empty } from "@/components/empty"





const VedioPage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [video, setVideo] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })


  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    console.log(values);
  }


  return (
    <div> 
        <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Video `}</span>
      <Separator className="px-4 mb-4 py-[0.07rem]" />
      <Heading
        title="Video Generations"
        description="Turn your prompt into a video"
        icon={FileVideo}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className=" px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg
              border
              w-full
              px-3
              p-4
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
                    <Input className=" px-2 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Clown Dog swimming in a pool"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="px-2"/>
                </FormItem>
              )}
            
            />
            <Button className=" col-span-12 lg:col-span-2 w-full" type="submit" size="icon">
              Generate
            </Button>
          </form>
        </Form>
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {!video && !isLoading && (
          <Empty label="No video files generated." />
        )}
      </div>
    </div>
  )
}

export default VedioPage