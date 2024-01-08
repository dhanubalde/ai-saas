"use client"


import * as z from "zod"
import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import { Music } from "lucide-react"
import { useState } from "react"
import { Empty } from "@/components/empty"
import Loader from "@/components/loader"
import { toast } from "@/components/ui/use-toast"
import axios from "axios"


const MusicPage = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [music, setMusic] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    try {
      // console.log(values);


      // setMusic(undefined);

      // const response = await axios.post('/api/music', values)
      // console.log(response)

      // setMusic(response.data.audio);
      // form.reset();
      if (values) { 
        return proModal.onOpen()
      }
    } catch (error: any) {
      if (error?.response?.status === 403) {
          proModal.onOpen()
      } else { 
        toast({
          title: `Oops !`,
          variant: "destructive",
          description: "Something went wrong"
        })
      }
     
    } finally { 
      router.refresh()
    }
    
  }



  return (
    <div>
       <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `> Music `}</span>
      <Separator className="px-4 mb-4 py-[0.01rem]" />
      <Heading
        title="Music Generations"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
    <div className="px-4 lg:px-8">
     <div>
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
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-2"
                    disabled={isLoading}
                    placeholder="Balad solo"
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
    </div>
      <div className=' space-y-4 mt-4'>
          
     
        {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-transfarent'>
                <Loader/>
            </div>
          )}

          {!music && !isLoading && (
               <div className=' rounded-lg border border-neutral-200 w-full h-[30rem]'>
                  <Empty label="No musics generated..."/>
               </div>
          )}
          {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
      </div>
    </div>
  </div>
    
  )
}

export default MusicPage