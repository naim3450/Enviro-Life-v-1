import React from 'react'
import Menu from '../Menu'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Button from '../Button'

const Navber = () => {
  return (
    <div className='bg-gray-400'>
        <Container>
            <Flex className={`items-center sm:gap-[10px] md:justify-between`}>
                <div className="w-[30%] sm:w-[50px] sm:ml-[60px] lg:h-[100px] lg:w-[100px]  md:ml-[80px]">
                <Image className={`h-[100px] w-[100px] sm:h-[50px] sm:w-[50px] lg:h-[100px] lg:w-[100px] `} src={logo}/>
                </div>

                <div className="w-[45%] sm:w-[300px] lg:">
                <Menu/>
                </div>

                <div className="w-[25%]">
                <Button href={`https://www.messenger.com/t/106251945484198/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0`} text="Contact"/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Navber