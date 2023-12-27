import Image from "next/image"
import Link from "next/link"

const Notfound = () => {
  return (
    <>
    
      <div className=" flex flex-col items-center justify-center pt-[12rem] gap-2">
        <Image src="/empty.png" alt="empty" width={200} height={200}/>
        <h1 className=" text-6xl font-bold text-neutral-800">Ooh Ops </h1>
        <p className=" text-4xl font-semibold text-neutral-800">404 Request not found</p>
      <Link href="/dashboard">
        <h3 className="underline font-bold">go back</h3>
      </Link>
    </div>  
    
    </>

  )
}

export default Notfound