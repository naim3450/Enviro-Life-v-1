import React from 'react'

const List = ({text,className,href}) => {
  return (
      <li type="none" className={`${className} text-[20px] sm:text-[15px] md:text-[18px] lg:text-[20px] text-liColor font-bold font-dm`}><a href={href}>{text}</a></li>
  )
}

export default List