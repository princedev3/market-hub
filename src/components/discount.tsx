import React from 'react'
import Header from './header'
import Discount from '@/ui/icons/discount'
import { weeklyDiscount } from '@/libs/constants/data'
import GeneralCard from './general-card'

const DiscountWeekly = () => {
  return (
    <div className='grid gap-y-6 mb-10'>
        <div className="flex items-center gap-3">
        <Discount color='#85B262' size={25}/>
        <Header title='Weekly Discounts'/>
        </div>
        <div className="flex gap-5 items-center overflow-x-scroll designScrollBar">
            {
                weeklyDiscount.map((item,idx)=>(
                    < GeneralCard key={idx} img={item.img} deal={item.deal} price={item.price} desc={item.desc} discount={item.discount} title={item.title} />
                ))
            }
        </div>
    </div>
  )
}

export default DiscountWeekly