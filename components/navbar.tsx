"use client"

import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/mobileSidebar"

const Navbar = () => {
  return (
    <div className=" flex items-center p-5 mb-10">
      <MobileSidebar/>
      <div className=" flex w-full justify-end ">
        <UserButton afterSignOutUrl="/" />
          
      </div>
    </div>
  )
}

export default Navbar