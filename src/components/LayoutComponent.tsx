"use client"
import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Footer from './footer'
import Details from './details'

const LayoutComponent = ({children}:{children:React.ReactNode}) => {
   
  return (
  
    <div>
         <div className="flex ">
        <div className={`max-w-[15%]   min-h-screen   `} >
       <Sidebar/>
        </div>
        <div className={`min-w-[85%]      min-h-screen  `}>
        <Navbar/>
        {children}
        <div className="p-4">
        <Details/>
        <Footer/>
        </div>
        </div>
       </div>
    </div>
  )
}

export default LayoutComponent