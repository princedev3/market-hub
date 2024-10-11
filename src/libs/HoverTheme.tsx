"use client"
import React, { createContext, useContext, useState } from 'react'

type hoverType = {
    isHoveredState:boolean,
    setIsHoveredState:(item:boolean)=>void
}
export const IsHoverContext = createContext<hoverType | null>(null)

export const  HoverTheme = ({children}:{children:React.ReactNode}) => {
    const [isHoveredState, setIsHoveredState] = useState(false);
  return (
    <IsHoverContext.Provider value={{isHoveredState,setIsHoveredState}}>{children}</IsHoverContext.Provider>
  )
}

export const RemoveNullHoverState = ()=>{
    const content = useContext(IsHoverContext)
    if(content === null){
        throw new Error("can not use context")
    }
    return content
}