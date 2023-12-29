"use client"

import axios from "axios";
import { useState } from "react"
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import ProModal from "./pro-modal";



interface SubscriptionButtonProps { 
  isPro: boolean
}

const SubscriptionButton = ({
  isPro = false
}: SubscriptionButtonProps) => {
  const [loading, SetLoading] = useState(false);

  const onClick =async () => { 
    try {
      SetLoading(true)
      
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;

    } catch (error) {
      toast.error("Something went wrong.")
    } finally { 
      SetLoading(false)
    }
  }

  return (
    <Button variant=
      {isPro ? "destructive" : "default"}
      disabled={loading}
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    
    </Button>
  )
}

export default SubscriptionButton