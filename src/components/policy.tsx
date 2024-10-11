import Image from 'next/image'
import React from 'react'

const Policy = () => {
  return (
    <div>
        <div className=" py-10 flex flex-col md:flex-row items-center gap-10">
            <Image src={"/s-logo.png"} width={150} height={150} className='object-cover' alt=''/>
            <div className="flex items-center gap-10 text-white font-medium">
                <h2 className="">Terms Of Service</h2>
                <h2 className="">Privacy Policy</h2>
                <h2 className="">Store Refund</h2>
            </div>
        </div>
    </div>
  )
}

export default Policy