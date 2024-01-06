"use client"

import { cn } from "@/lib/utils";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { FreeCounter } from "./free-counter";


const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-white"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-white",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-white",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-white",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-white",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-white",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: "text-white"
  },
];

interface SidebarProps { 
 
}

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  isPro: boolean;
  apiLimitCount: number | undefined;
}) => {

  const pathname = usePathname()

  return (
    <div className="
      space-y-4
      py-4 
      flex
      flex-col
      h-full
      bg-[#03040a]
      text-white">
      <div className="
          px-3
          py-2
          flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 flex-1 ">
          <div className="relative h-8 w-8 mr-2">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn("text-2xl text-white font-bold ", poppins.className)}>
            Genia AI
          </h1>
        </Link>
       
        <div
          className="space-y-2 pt-10">
           {/* <Separator className=" bg-slate-300"/> */}
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black/5 rounded-lg transition",
                pathname === route.href ? "text-white bg-black/5" : "text-zinc-400",
              )}
            >
              <div
                className="flex items-center flex-1 ">
                <route.icon className={cn("h-6 w- mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        {/* <Separator className=" bg-slate-300"/> */}
      </div>
      <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
  )
}

export default Sidebar