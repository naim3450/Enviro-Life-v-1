import React from 'react'

const Button = ({className,text,href}) => {
  return (
    <button className={`${className} py-[20px] sm:py-[10px] lg:py-[20px] px-[40px] sm:px-[20px] lg:px-[30px] rounded-[100px] bg-black text-white text-[20px] sm:text-[10px] md:text-[14px] lg:text-[22px] font-dm font-medium`}>
        <a href={href}>{text}</a></button>
  )
}

export default Button