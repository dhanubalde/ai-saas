

interface DashboardLayoutProps { 
  children: React.ReactNode
}

const Dashboardlayout: React.FC<DashboardLayoutProps> = ({ 
  children
}) => {
  return (
    <>
     <div>
      {children}
    </div>
    </>
   
  )
  
}

export default Dashboardlayout