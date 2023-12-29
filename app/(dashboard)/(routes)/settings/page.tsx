import Heading from "@/components/heading"
import SubscriptionButton from "@/components/subscription-button"
import { Separator } from "@/components/ui/separator"
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"


const Settingpage = async () => {
  const isPro = await checkSubscription()

  return (
    <div>
      <span className='px-6 lg:px-2 text-xs text-muted-foreground'>{ `/ Settings `}</span>
      <Separator className="px-4 mb-4 py-[0.07rem]" />
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className=" px-4 lg:px-8 space-y-4"> 
        <div className=" text-muted-foreground text-sm">
          {isPro ? "You are currently in a Pro Plan" : `You are currnetly on a free plan ` }
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default Settingpage