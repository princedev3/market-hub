"use client"
import React, { useState } from 'react'
import { NavbarItems } from "@/libs/constants/data";
import { IoIosArrowForward } from "react-icons/io";
import { RemoveNullHoverState } from '@/libs/HoverTheme';
import Menu from '@/ui/icons/menu';

export default function Sidebar(){
    const [isHovered, setIsHovered] = useState("menu");
    const {setIsHoveredState,isHoveredState}= RemoveNullHoverState()
    
    
  return (
    <div className="flex flex-col w-full  gap-3 pl-6 pt-6 pr-6 border-r h-full">
      <div className="mx-auto lg:mx-0">
      <div  
       onClick={()=>{setIsHoveredState(!isHoveredState),setIsHovered("menu")}}
       onMouseEnter={()=>{setIsHoveredState(true),setIsHovered("menu")}}
       className={`${"menu"===isHovered?"bg-greenColor ":""}  flex  w-fit md:w-full  items-center justify-between p-2 rounded-full transition-all  duration-500`} >
        <div className='flex  gap-4 items-center' >
          <Menu size={20} color={isHovered==="menu"?"white":"#5e5e5c"} />
          {
            isHoveredState && 
         <span className={`${isHovered==="menu"?"text-white":"text-[#5e5e5c] "}  hidden lg:flex capitalize font-semibold`}>{"menu"}</span>
          }
        </div>
        {
            isHoveredState && 
            <IoIosArrowForward  className={`${isHovered==="menu"?"text-white":""} hidden xl:flex text-sm`} />
          }
       </div>
      </div>
    {
     NavbarItems.map(item=>(
       <div key={item.name} 
       onMouseEnter={() => {setIsHovered(item.name),setIsHoveredState(true)}}
       className={`${item.name===isHovered?"bg-greenColor":""} justify-between flex w-fit lg:w-full items-center mx-auto p-2 rounded-full transition-all duration-500`} >
        <div className='flex gap-4 items-center ' >
          <item.icon size={20} color={isHovered===item.name?"white":"#5e5e5c"} />
          {
            isHoveredState && 
         <span className={`${isHovered===item.name?"text-white ":"text-[#5e5e5c]  "} hidden lg:flex capitalize font-semibold`}>{item.name}</span>
          }
        </div>
        {
            isHoveredState && 
            <IoIosArrowForward  className={`${isHovered===item.name?"text-white":""} hidden xl:flex text-sm`} />
          }
       </div>
     ))
    }
  </div>
  )
}