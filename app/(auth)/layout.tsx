interface AuthLayoutProps { 
  children: React.ReactNode
}

const layout = ({ children}: AuthLayoutProps) => {
  return (
   <>
      <div className="flex flex-col bg-[#03040a] items-center justify-center min-h-screen gap-y-5" >
        <div>
            <h1 className=" text-3xl text-white">Genia AI</h1>
        </div>
        { children  }
      </div>
   
   </>
  
  )
}

export default layout