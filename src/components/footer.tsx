import { footer } from '@/libs/constants/data'
import Image from 'next/image'
import React from 'react'
import NewsLetter from './news-letter'
import Policy from './policy'

const Footer = () => {
  return (
    <div className='bg-greenColor  py-5 px-5 grid gap-y-10'>
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-5 ">
            <div className="">
          <Image src={"/log.png"} alt='' width={300} height={300}/>
          <span className="text-white text-[20px] font-medium leading-[1] ">From frozen veggie products to canned favorites such as beans to vegan alternatives, we have something for everyone.</span>
            </div>
        <>
             {
                footer.map((item,idx)=>(
                    <div className="" key={idx}>
                        <h1 className=" mb-5 text-[20px] font-medium text-white ">{item.title} </h1>
                        <div className="flex flex-col gap-2" >
                       {
                        item.lists.map(each=>(
                            <span className={`${each ==="Facebook" || each==="Instagram"?"underline":""} text-[18px] font-normal text-white cursor-pointer`} key={each}>{each} </span>
                        ))
                       }
                        </div>
                    </div>
                ))
             }
        </>
        </div>
          <NewsLetter/>
          <Policy/>
    </div>
  )
}

export default Footer