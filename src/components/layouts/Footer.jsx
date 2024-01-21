import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-violet-800 py-[10px] sm:mt-[10px]'>
        <Container>
            <Flex className={` justify-between sm:justify-between md:justify-around`}>
                <div className="">
                    <Image className={`w-[100px] h-[100px]`} src={logo}/>
                    <h3 className={`text-[30px] sm:text-[20px] w-[550px] sm:w-[250px] text-white font-dm font-bold`}>We strive to provide the best service to our customers</h3>
                    <h2 className='text-[16px] sm:text-[12px] w-[450px] sm:w-[250px] font-dm font-bold mt-[10px]'>Our Contact Number:- 01776-597256</h2>
                </div>

                <div className="mt-[150px] sm:mt-[100px]">
                    <Flex>
                        <a href="https://www.messenger.com/t/106251945484198/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                            <FaFacebookMessenger className='text-[35px] sm:text-[25px] text-white' />
                        </a>

                        <a className='ml-[20px]' href="https://www.messenger.com/t/106251945484198/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                            <FaFacebookSquare  className='text-[35px] sm:text-[25px] text-white' />
                        </a>
                    </Flex>
                    <h3 className='w-[450px] sm:w-[200px] text-white font-dm font-bold mt-[15px]'>envirolifebd@gmail.com</h3>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Footer