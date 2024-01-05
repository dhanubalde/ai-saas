interface RootlayoutProps { 
  children: React.ReactNode
}

const layout = ({ children}: RootlayoutProps) => {
  return (
    <main className="h-full bg-white bg-gradient-to-r from-purple-200 to-pink-300 overflow-auto">
      <div className=" mx-auto max-w-screen-xl h-full w-full ">
        { children  }
      </div>
    </main>
  )
}

export default layout