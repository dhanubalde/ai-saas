"use client"

import Image from "next/image"





const Slider = () => {
  return (

    <div className="flex space-x-32 items-center">
      <div>
        <Image
        src="/slider/img2.png"
        alt="slider"
        width={150}
        height={150}
        className="grayscale"
        />
      </div>
   
      <div>
        <Image
        src="/slider/img3.png"
        alt="slider"
        width={150}
        height={150}
        className="grayscale"
        />
      </div>
      <div>
        <Image
        src="/slider/img4.png"
        alt="slider"
        width={80}
        height={80}
        className="grayscale"
        />
      </div>
      <div>
        <Image
        src="/slider/img5.png"
        alt="slider"
        width={80}
        height={80}
        className="grayscale"
        />
      </div>
      <div>
        <Image
        src="/slider/img6.png"
        alt="slider"
        width={150}
        height={150}
        className="grayscale bg-white rounded-lg"
        />
      </div>
      <div>
        <Image
        src="/slider/img7.png"
        alt="slider"
        width={70}
        height={70}
        className="grayscale"
        />
      </div>
      <div>
        <Image
        src="/slider/img8.png"
        alt="slider"
        width={70}
        height={70}
        className="grayscale"
        />
      </div>
      <div>
        <Image
        src="/slider/img9.png"
        alt="slider"
        width={80}
        height={80}
        className="hidden"
        />
      </div>
    </div>
  )
}

export default Slider