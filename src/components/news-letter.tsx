import { handleSubmit } from '@/libs/constants/handleemail'
import React from 'react'

export  default function NewsLetter () {
  return (
    <div className='bg-black/10 grid grid-cols-1  gap-y-10 md:grid-cols-2 gap-x-6 items-center px-[30px] py-[50px] rounded-2xl '>
         <div className="text-white ">
            <h1 className="text-[32px] font-semibold ">Sign Up to us Newsletter</h1>
            <p className="text-[17px]">Be the First to Know. Sign up to newsletter today</p>
         </div>
         <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-x-6">
            <input type="text" name='message' className='p-3 rounded-md outline-none' placeholder='Enter your email'  />
            <button type='submit' className='capitalize bg-black text-white font-medium w-[120px] rounded-md '>sign up</button>
         </form>
    </div>
  )
}