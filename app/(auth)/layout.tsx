interface AuthLayoutProps { 
  children: React.ReactNode
}

const layout = ({ children}: AuthLayoutProps) => {
  return (
   <>
      <div className="flex flex-col bg-[#111827] items-center justify-center min-h-screen">
        { children  }
      </div>
   
   </>
  
  )
}

export default layout