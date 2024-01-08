
"use client"

import { useProModal } from "@/hooks/use-proModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constant"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"
import * as z from "zod"
import { Separator } from "@/components/ui/separator"
import Heading from "@/components/heading"
import { BookTemplateIcon } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Loader from "@/components/loader"
import { Empty } from "@/components/empty"
const TemplatePage = () => {

  const router = useRouter()
  const proModal = useProModal()
  const [template, setTemplate] = useState<string[]>([])


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => { 
    try {

      if (values) { 

        return toast({
          variant: "default",
          title: "Genia AI v.2.0",
          description: `not available right now.`
        })
      }

    } catch (error) {
      toast({
        description: "Something went wrong."
      })
    } finally { 
      router.refresh()
    }
  }

  return (
    <div>
      <span className='px-6 lg:px-2 text-muted-foreground text-xs font-extrabold'>{ `> Template `}</span>
      <Separator className="px-4 mb-4 py-[0.01rem]" />
      <Heading
        title="AI Templates"
        description="Turn on your AI Templates"
        icon={BookTemplateIcon} 
        iconColor="text-cyan-500"
        bgColor="bg-cyan-500/10"
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
                        placeholder="Create your unique templates"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <Button className=" col-span-12 lg:col-span-2 w-full" type="submit" size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className=" space-y-4 mt-4">
        {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-transfarent'>
                <Loader/>
            </div>
          )}

          {template.length === 0 && !isLoading && (
             <div className='rounded-lg border border-neutral-200 w-full h-[30rem]'>
             <Empty label="No templates generated..."/>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TemplatePage