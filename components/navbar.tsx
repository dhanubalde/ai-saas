
"use cleint"

import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/mobileSidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import Link from "next/link"
import { Button } from "./ui/button"

import { IoSettings } from "react-icons/io5";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()

  return (
    <div className=" flex items-center p-5 mb-6">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
      <div className=" flex w-full justify-end items-center ">
        <Link href="/settings" className="flex items-center mr-4">
        <Button variant="ghost" className="rounded-full text-xl" size="icon">
           <IoSettings/>
        </Button>
        </Link>
        <UserButton afterSignOutUrl="/" />
          
      </div>
    </div>
  )
}

export default Navbar