import React from 'react'
import Image from '../Image'
import Flex from '../Flex'
import ManT from './ManT'
import PriceOne from '../Home/PriceOne'

const ManC = ({imgSrc,alt,price,href}) => {
    return (
      <div className='w-[390px] sm:w-[270px] md:w-[250px] h-[420px] sm:h-[350px] md:h-[370px] lg:w-[280px] border-black hover:border-[1px] hover:shadow-CardHover transition-[.5s]'>
        <a href={href}>
          <Image className={`h-[350px] sm:h-[280px] w-[100%] sm:w-[100%]`} src={imgSrc} alt={alt}/>
            <ManT text={`Premium Hoodie (Export quality)🔥🔥`}/>

          <Flex className={`justify-between items-center`}> 
            <ManT text={`👕𝐅𝐚𝐛𝐫𝐢𝐜 : 100% Cotton.`}/>
            <PriceOne className={`text-[20px]`} text={price}/>
          </Flex>
        </a>
      </div>
    )
  }

export default ManC