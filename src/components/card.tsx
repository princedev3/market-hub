import Image from 'next/image'
import React from 'react'

type CardProp = {
    img:string,
    title?:string,
    list?:string[],
    color?:string,
    disCount?:string,
    deal?:boolean,
    desc?:string,
    price?:number,
    isLike?:boolean,
    key:number
}

const Card = ({img,title,list,color,key}: CardProp) => {

 
  return (
    <div key={key} className={` min-w-[323px] h-[232px] flex gap-3 rounded-lg p-5 mb-7 cursor-pointer`} style={{backgroundColor:color}}>
            <div className="w-1/2 relative h-full">
                <Image src={img} alt='' fill className='object-cover rounded-lg'/>
            </div>
            <div className="flex flex-col w-1/2 gap-3">
                <span className="font-bold capitalize text-[14px]  ">{title}</span>
                {
                    list?.map((item,idx)=>(
                        <span key={idx} className="text-[12px] text-testColor font-medium ">{item} </span>
                    ))
                }
            </div>
    </div>
  )
}

export default Card