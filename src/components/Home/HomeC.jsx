import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import HomeT from './HomeT'
import PriceOne from './PriceOne'

const HomeC = ({imgSrc,alt,price,href}) => {
  return (
    <div className='w-[380px] sm:w-[250px] h-[400px] sm:h-[250px] lg:w-[280px] border-black hover:border-[1px] hover:shadow-CardHover transition-[.5s]'>
      <a href={href}>
        <Image className={`h-[360px] sm:h-[230px] w-[100%]`} src={imgSrc} alt={alt}/>
        <Flex className={`items-center justify-between`}>
            <HomeT/>
            <PriceOne text={price}/>
        </Flex>
      </a>
    </div>
  )
}

export default HomeC