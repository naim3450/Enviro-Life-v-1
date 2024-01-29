import React from 'react'
import Container from '../Container'
import Flex from '../Flex';
import Image from '../Image';
import ddddd from '../../assets/ddddd.png';
import ManT from '../Man/ManT';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';



const Notfound = () => {
    return (
        <Link to={`/`}>
            <Container className={`py-[70px] bg-sky-200 mt-[100px] rounded-[20px] group`}>
                <div className="bg-white w-[600px] h-[400px] rounded-[20px] mx-auto relative ">
                    <div className=" bg-blue-600 h-[50px] rounded-t-[20px] ">
                        <Flex className={`pt-[5px] items-center ml-[10px] group-hover:text-black text-white`}>
                            <ManT text={`Home Page`} className="" />
                            <MdArrowRightAlt className='text-[40px]' />
                        </Flex>
                    </div>
                    <div className="">
                        <h1 className='font-sans font-bold text-[100px] w-[180px] mx-auto'>404</h1>
                        <h1 className='font-sans font-medium text-[30px] w-[230px] mx-auto'>Page Not Found</h1>
                    </div>
                    <div className="h-[120px] w-[220px] absolute bottom-[10px] rotate-25">
                        <Image className={`h-[100%] w-[100%]`} src={ddddd} />
                    </div>
                </div>
            </Container>
        </Link>
    )
}

export default Notfound