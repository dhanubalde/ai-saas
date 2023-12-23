"use client"
interface LayoutProps { 
  children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({ children}) => {
  return (
    <div className="flex items-center justify-center min-h-full">
      {children}
    </div>
  )
}

export default layout