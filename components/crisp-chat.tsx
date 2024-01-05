"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => { 
  useEffect(() => { 

    Crisp.configure("875d2c1d-01eb-4f2c-a218-1c668e6e118b")
  }, [])
  
  return null
}