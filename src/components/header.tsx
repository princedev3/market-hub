import React from 'react'

const Header = ({title}:{title:string}) => {
  return (
    <div className='font-semibold text-[#000000] capitalize text-xl '>
        {title}
    </div>
  )
}

export default Header