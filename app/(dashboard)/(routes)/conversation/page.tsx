import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'

const Conversationpage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        icon={MessageSquare}
        description='Our most advanced conversation model'
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />  
    </div>
  ) 
}

export default Conversationpage