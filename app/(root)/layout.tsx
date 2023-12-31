interface RootlayoutProps { 
  children: React.ReactNode
}

const layout = ({ children}: RootlayoutProps) => {
  return (
    <main className="h-full bg-[#03040a] overflow-auto">
      <div className=" mx-auto max-w-screen-xl h-full w-full ">
        { children  }
      </div>
    </main>
  )
}

export default layout