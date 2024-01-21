import React from 'react'
import Image from '../Image'
import ManT from '../Man/ManT'
import PriceOne from '../Home/PriceOne'
import Flex from '../Flex'

const WomanCC = ({imgSrc,alt,href,price}) => {
    return (
      <div className='w-[390px] sm:w-[280px] h-[420px] sm:h-[330px] md:w-[250px] lg:w-[280px] border-black hover:border-[1px] hover:shadow-CardHover transition-[.5s]'>
        <a href={href}>
          <Image className={`h-[350px] sm:h-[250px] w-[100%]`} src={imgSrc} alt={alt}/>
            <ManT text={`Women Fashionabe hoodie🐭`}/>
            <Flex className={`justify-between pt-[2px]`}>
              <h3 className='font-dm font-bold'>100% quality guarantee</h3>
              <PriceOne className={`text-[20px]`} text={price}/>
            </Flex>
        </a>
      </div>
    )
  }

export default WomanCC