
import { timeLineItem } from '@/libs/constants/data'
import React from 'react'
import Singletimeline from './singletimeline'

const Timeline = () => {
  return (
    <div>
  <div className="flex gap-6 mb-8 overflow-x-hidden">
    {
        timeLineItem.map((item,idx)=>(
            <Singletimeline key={idx} item={item}/>
        ))
    }
  </div>
    </div>
  )
}

export default Timeline