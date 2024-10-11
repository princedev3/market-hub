"use client"
import Link from 'next/link'
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { CiHeart ,CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import React from 'react'
import Image from 'next/image';
import Menu from '@/ui/icons/menu';
import Annouce from '@/ui/icons/annouce';
import Botle from '@/ui/icons/bottle';
import Discount from '@/ui/icons/discount';

export default function Navbar (){
  return (
    <div className='bg-bgColor shadow shadow-bgColor border-b border-[#DAD7D3] '>
      <div className="flex items-center justify-between  text-testColor py-4 px-6 shadow shadow-bgColor  border-b border-[#DAD7D3]/20 ">
        <div className="flex items-center gap-3 capitalize">
          <Link href={"#"}  className='cursor-pointer font-[400] text-[15px]' >about us</Link>
          <div className="text-[15px] text-[#DAD7D3] hidden  lg:flex ">|</div>
          <Link href={"#"} className='cursor-pointer font-[400] text-[15px] ' >contact us</Link>
          <div className="text-[15px] text-[#DAD7D3]  hidden  lg:flex">|</div>
          <Link href={"#"}  className='cursor-pointer font-[400] text-[15px] ' >delivery</Link>
        </div>
        <div className="flex items-center gap-3">
        <Link href={"#"} className='hidden  lg:flex items-center gap-1 text-[15px]  cursor-pointer'>
        <CiLocationOn className='text-[15px]' /> <span className="text-[15px]">Store-Location</span>
        </Link>
        <div className="text-[15px] text-[#DAD7D3] hidden lg:flex ">|</div>
        <Link href={"#"} className='hidden  lg:flex items-center gap-1 cursor-pointer'>
        <MdOutlineCall   className='text-[15px] text-gray-500' /> <span className="text-[15px]">(234) 635-7657</span>
        </Link>
          <div className="text-[15px] text-[#DAD7D3] hidden  lg:flex">|</div>
          <Link href={"#"} className='hidden  lg:flex items-center gap-1 cursor-pointer'>
          <CiHeart  className='text-[15px]' /> <span className="text-[15px]">Wishlist</span>
        </Link>
          <div className="text-[15px] text-[#DAD7D3] hidden  lg:flex  ">|</div>
          <Link href={"#"} className='flex items-center gap-1 cursor-pointer'>
          <IoPersonOutline  className='text-[15px]' /> <span className="text-[15px]">Login / Register</span>
        </Link>
        </div>
      </div>
      <div className=" py-4 px-6 flex   items-center gap-[20px] w-full ">
        <div className="">
          <Image src='/Logo.png' alt='' width={150} height={150} className='cursor-pointer object-contain min-w-32'/>
        </div>
        <div className="bg-greenColor w-[171px] p-[6px] rounded-full xl:flex items-center text-white gap-3 hidden">
          <Menu size={20} color='white'/>
          <span className="cursor-pointer text-[20px] capitalize font-medium  ">Category</span>
        </div>
        <div className="min-w-[250px] border rounded-full overflow-hidden ml-3 md:flex items-center bg-white p-[5px] gap-1 hidden ">
        <CiSearch className='stroke-[2] text-xl text-gray-400'/>
          <input type='text' placeholder='search for product' className='w-full  outline-none placeholder:capitalize text-gray-600 text-lg placeholder:text-sm placeholder:font-normal'/>
        </div>

        <div className="flex justify-between items-center w-full ">
        <div className="hidden xl:flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Annouce size={20} color='#5F5F5F'/>
            <span className="text-[14px] cursor-pointer font-[400] text-testColor ">Promotion</span>
          </div>
            <div className="flex items-center gap-1">
            <Botle size={20} color='#5F5F5F'/>
            <span className="text-[14px] cursor-pointer font-[400] text-testColor">Ideas For Breakfast</span>
            </div>
            <div className="flex items-center gap-1">
            <Discount size={20} color='#5F5F5F'/>
            <span className="text-[14px] cursor-pointer font-[400] text-testColor">Weekly Discounts</span>
            </div>
          </div>
          <div className="bg-[#DEE9D2] rounded-full flex items-center justify-center min-w-10 min-h-10 cursor-pointer">
          <CiShoppingCart className='text-[#82a45e]  text-2xl  ' />
          </div>
        </div>
      </div>
    </div>
  )
}