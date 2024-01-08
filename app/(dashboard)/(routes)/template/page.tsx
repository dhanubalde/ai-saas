
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
          title: "GenAi v.2.0",
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
      <span className='px-6 lg:px-2 text-cyan-700 text-xs font-extrabold'>{ `> Template `}</span>
      <Separator className="px-4 mb-4 py-[0.01rem]" />
      <Heading
        title="AI Templates"
        description="Turn on your AI Templates"
        icon={BookTemplateIcon}
        iconColor="text-cyan-500"
        bgColor="bg-cyan-500/10"
      />
    </div>
  )
}

export default TemplatePage