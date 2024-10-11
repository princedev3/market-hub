"use client"
import {timeLineItems} from '@/libs/constants/data'
import React, { useEffect, useState } from 'react'

const Sliderelement = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex === timeLineItems.length - 1 ? 0 : prevIndex + 1));
        }, 5000);
        return () => clearTimeout(timer);
      }, [currentIndex, timeLineItems.length])
      
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === timeLineItems.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? timeLineItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full h-[280px] gap-8 flex mb-10">
        <div className="w-full md:w-[60%]  relative overflow-hidden  h-full rounded-3xl">
         <div
            className="flex w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {timeLineItems.map((src, index) => (
                <>
                    <img key={index} src={src.img} className="min-w-full h-[280px]  object-cover" alt={`Slide ${index + 1}`} />
                </>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bottom-1/2 bg-black/40 w-8 h-8 rounded-full text-white p-2 z-10 flex items-center justify-center text-2xl"
          >
            <span className="mb-[5px] mr-1 ">{"<"}</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bottom-1/2 bg-black/40 w-8 h-8 rounded-full flex items-center justify-center text-2xl  text-white p-2 z-10"
          >
            <span className="mb-[5px] ml-1 "> {">"}</span>
          </button>
          <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex gap-1 bg-greenColor p-2 rounded-full">
                {
                    timeLineItems.map((item,idx)=>(
                        <div key={idx} className={`${currentIndex===idx?"bg-orange-500":"bg-white"} w-3 h-3 z-10 rounded-full`} ></div>
                    ))
                }
            </div>
        </div>
        <div className="text-black md:flex gap-5 hidden  w-[40%] ">
            <div className="w-1/2 hidden xl:flex">
            <img  src={"/pic7.png"} className="w-full h-[280px]  object-cover rounded-3xl " alt={``} />
            </div>
            <div className="w-full xl:w-1/2 ">
            <img  src={"/pic6.png"} className="w-full h-[280px]  object-cover rounded-3xl" alt={``} />
            </div>
        </div>
        </div>
  )
}

export default Sliderelement