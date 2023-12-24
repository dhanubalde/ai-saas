import Link from "next/link"

const Notfound = () => {
  return (
    <>
    
    <div className=" flex flex-col items-center justify-center pt-[18rem] gap-2">
        <h1 className=" text-6xl font-bold text-black">Ooh Ops </h1>
        <p className=" text-2xl font-semibold">404 Request not found</p>
      <Link href="/">
        <h3 className=" hover:underline">return home</h3>
      </Link>
    </div>
    
    </>

  )
}

export default Notfound