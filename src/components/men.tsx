import React from 'react'
import Header from './header'
import { men } from '@/libs/constants/data'
import GeneralCard from './general-card'

const Men = () => {
  return (
    <div className='grid gap-y-6 mb-10'>
    <Header title='men&apos;s clothing'/>
    <div className="flex gap-5 items-center overflow-x-scroll designScrollBar">
        {
            men.map((item,idx)=>(
                < GeneralCard key={idx} img={item.img} deal={item.deal} price={item.price} desc={item.desc} discount={item.discount} title={item.title} />
            ))
        }
    </div>
</div>
  )
}

export default Men