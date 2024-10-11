import Image from 'next/image'
import React from 'react'

const Singletimeline = ({item,key}:{item:{img:string,name:string},key:number}) => {
  return (
    <div key={key} className='flex flex-col items-center gap-4 cursor-pointer'>
        <Image src={item.img} alt='' width={60} height={60} className='min-w-14 min-h-14'/>
        <span className="text-[12px] text-testColor font-medium">{item.name}</span>
    </div>
  )
}

export default Singletimeline