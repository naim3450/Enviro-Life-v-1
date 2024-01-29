import React from 'react'

const ManT = ({text,className}) => {
  return (
    <div>
        <h3 className={`${className} text-[20px] sm:text-[15px] lg:text-[17px] font-dm font-bold`}>{text}</h3>
    </div>
  )
}

export default ManT