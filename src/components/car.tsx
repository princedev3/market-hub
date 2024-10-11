import { car } from '@/libs/constants/data'
import React from 'react'
import Header from './header'
import GeneralCard from './general-card'

const Car = () => {
  return (
    <div className='grid gap-y-6 mb-10'>
    <Header title='cars'/>
    <div className="flex gap-5 items-center overflow-x-scroll designScrollBar">
        {
            car.map((item,idx)=>(
                < GeneralCard key={idx} img={item.img} deal={item.deal} price={item.price} desc={item.desc} discount={item.discount} title={item.title} />
            ))
        }
    </div>
</div>
  )
}

export default Car