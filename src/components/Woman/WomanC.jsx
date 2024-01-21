import React from 'react'
import Image from '../Image'
import Flex from '../Flex'
import PriceOne from '../Home/PriceOne'
import ManT from '../Man/ManT'

const WomanC = ({imgSrc,alt,href}) => {
    return (
      <div className='w-[390px] sm:w-[280px] h-[410px] sm:h-[330px] md:w-[250px] lg:w-[280px] border-black hover:border-[1px] hover:shadow-CardHover transition-[.5s]'>
        <a href={href}>
          <Image className={`h-[350px] sm:h-[250px] w-[100%]`} src={imgSrc} alt={alt}/>
            <ManT text={`Women Fashionabe hoodie🐭`}/>
            <ManT text={`Fabric : (20%TC) (80%cotton).🔥🔥`}/>
            <Flex className={`justify-between pt-[5px]`}>
              <h3 className='font-dm font-bold'>100% quality guarantee</h3>
              <PriceOne className={`text-[20px] sm:text-[15px]`} text="Price:699৳"/>
            </Flex>
        </a>
      </div>
    )
  }

export default WomanC