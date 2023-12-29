"use client"


import * as z from "zod"
import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import { Music } from "lucide-react"

const MusicPage = () => {
  const router = useRouter()
  const proModal = useProModal()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    console.log(values);
    
  }



  return (
    <div>
       <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Music `}</span>
      <Separator className="px-4 mb-4 py-[0.07rem]" />
      <Heading
        title="Music Generations"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
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
              </FormItem>
            )}
          />
          <Button className=" col-span-12 lg:col-span-2 w-full" type="submit" size="icon">
            Generate
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default MusicPage