"use client"
import React from 'react'
import { FaVanShuttle } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { FaHeadset } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Fastmarque = () => {
  return (
    <Marquee
    className='bg-white h-12 rounded-xl mb-10 '
    >
    <div className='flex items-center gap-10 bg-white  w-full text-base text-testColor'>
    <div className="flex items-center gap-2 ml-10">
    <FaVanShuttle className='text-base text-testColor'/>
    <span className="text-base capitalize text-testColor ">store locations</span>
    </div>
    <div className="flex items-center gap-1">
    <IoIosArrowRoundDown className='text-blue-500 font-medium'/>
    <span className="">Low Prices than in Stores</span>
    </div>
    <div className="flex items-center gap-1">
    <GoGift />
    <span className="">Fresh product everyday</span>
    </div>
    <div className="flex items-center gap-1">
    <FaHeadset className='text-orange-500' />
    <span className="">24/7 Support for you</span>
    </div>
    <div className="flex items-center gap-1">
    <FaCcAmazonPay className='text-blue-300' />
    <span className="">Save payment with any bank</span>
    </div>
    </div>
    </Marquee>
  )
}

export default Fastmarque