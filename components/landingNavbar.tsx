"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "./ui/button"
import { useAuth } from "@clerk/nextjs"
import Image from "next/image"





const LandingNavbar = () => {
  const { isSignedIn } = useAuth()


  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
     
      <Link href="/" className="flex items-center">
        <div className="flex items-center gap-x-2">
        <Image src="/logo.png" alt="logo" width={42} height={42}/>
        <h1 className={cn("text-2xl font-bold text-black") }>
          Genia
        </h1>
        </div>
       
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar