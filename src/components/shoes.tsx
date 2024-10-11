import { shoes } from '@/libs/constants/data'
import React from 'react'
import GeneralCard from './general-card'
import Header from './header'

const Shoes = () => {
  return (
    <div className='grid gap-y-6 mb-10'>
    <Header title='Shoes'/>
    <div className="flex gap-5 items-center overflow-x-scroll designScrollBar">
        {
            shoes.map((item,idx)=>(
                < GeneralCard key={idx} img={item.img} deal={item.deal} price={item.price} desc={item.desc} discount={item.discount} title={item.title} />
            ))
        }
    </div>
</div>
  )
}

export default Shoes