
"use client"
import { Card } from "@/components/ui/card"
import { tools } from "@/constant"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"


const DashboardPage = () => {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center pt-10">
          Explore the power of AI
        </h2>
        <p className=" mx-16 text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 lg:px-32 space-y-4 gap-5">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-lg transition cursor-pointer gap-x-2"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
    
  );
}

export default DashboardPage