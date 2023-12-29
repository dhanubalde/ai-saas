"use client"

import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Sidebar from "./sidebar"

interface MobileSidebarProps { 
  isPro: boolean
  apiLimitCount: number
}

const MobileSidebar = ({ 
  isPro = false,
  apiLimitCount = 0
}) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { 
    setIsMounted(true)
  }, [])
  
  if (!isMounted) { 
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 text-black">
        <Sidebar
          isPro={false}
          apiLimitCount={0}
        />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar