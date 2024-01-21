import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`${className} w-[1600px] sm:w-[550px] md:w-[760px] lg:w-[880px] mx-auto`}>{children}</div>
  )
}

export default Container