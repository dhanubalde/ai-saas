"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import LandingContent from "./landing-content";
import { Zap } from "lucide-react";
import Image from "next/image";
import Slider from "./slider";
import Marquee from "react-fast-marquee";


const LangdingHero = () => {

  const { isSignedIn } = useAuth()
  

  return (
    <>
   
    <div className="px-4 text-white font-extrabold py-32 text-center space-y-5">
      <div className=" text-4xl sm:text-5xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
      <h1 className="">
        Fastest <span className=" bg-gradient-to-br from-purple-700 to-pink-500 text-transparent bg-clip-text">Demand</span> Service AI Tool 
        </h1> 
        <div className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot",
                "Photo Generation",
                "Blog Writing",
                "Mail Writing",
                "Code Generation",
                "Paraphrasing & Editing",
                "User-friendly Interface"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-300">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Start Generating For Free
              <Zap className="w-6 h-6 ml-2 fill-white" />
          </Button>
        </Link>
      </div>
      <div className="text-zinc-300 text-xs md:text-sm font-normal pt-20">
          JOIN 100,000+ CREATORS, BRANDS & PUBLISHERS
          <div className="pt-10">
            <Marquee gradient={true} gradientColor="#03040a">
              <Slider/>
            </Marquee>
          </div>
      </div>
      </div>
      <div className="py-[8rem]">
        <LandingContent/>
      </div>
      </>
  ) 
}

export default LangdingHero