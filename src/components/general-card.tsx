"use client"
import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";

type CardProp = {
    img:string,
    title?:string,
    color?:string,
    discount?:string,
    deal?:boolean,
    desc?:string,
    price?:number,
    isLike?:boolean,
    key:number
}

const GeneralCard = ({img,key,deal,desc,discount,title,price}:CardProp) => {
  return (
    <div key={key} className='min-w-[283px] h-[390px] relative  mb-10 last:mr-10 rounded-lg overflow-hidden cursor-pointer'>
      <div className="relative min-h-[100%] w-full ">
        <Image src={img} fill alt='' className='object-cover'/>
        <div className="absolute top-3 right-3 bg-white rounded-full p-1">
        <CiHeart className='w-6 h-6'/>
        </div>
        <div className="absolute left-3 top-3 flex flex-col gap-2">
            <span className="bg-greenColor text-white px-3 rounded-full py-1">{discount} </span>
            {deal &&
              <span className="bg-red-600 text-white px-3 rounded-full py-1 capitalize">hot </span>
            }
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-col bg-[#FFFFFF] rounded-lg gap-1 p-3 text-[14px] font-[500px]  ">
      <span className="text-[#000000] font-semibold ">{title} </span>
      <span className="text-[#5F5F5F] font-normal">{desc} </span>
      <div className="text-greenColor font-medium">${price} <span className="text-[#5F5F5F] font-normal">/each</span></div>
      </div>
    </div>
  )
}

export default GeneralCard