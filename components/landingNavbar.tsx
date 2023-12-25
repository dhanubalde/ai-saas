"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useAuth } from "@clerk/nextjs"



const LandingNavbar = () => {
  const {isSignedIn} = useAuth()

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      
      <Link href="/" className="flex items-center ">
        <div className=" relative h-50 w-50 mr-4">
          <Image fill src="/logo.png" alt="Logo"/>
        </div>
        <h1 className={cn("text-2xl font-bold text-white") }>
          Genro_AI
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar