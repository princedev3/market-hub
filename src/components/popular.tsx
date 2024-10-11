import React from 'react'
import Header from './header'
import { linkItems } from '@/libs/constants/data'
import Card from './card'

const Popular = () => {
  return (
    <div className='mb-10 flex flex-col gap-6 '>
        <Header title='Popular Category'/>
        <div className="flex gap-3 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth designScrollBar">
            {
                linkItems.map((item,idx)=>(
                <Card key={idx} img={item.img} list={item.list} color={item.color} title={item.title}  />
                ))
            }
        </div>
    </div>
  )
}

export default Popular