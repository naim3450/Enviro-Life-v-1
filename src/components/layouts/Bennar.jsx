import React from 'react'
import Image from '../Image'
import bennar from '../../assets/bennar.jpg'

const Bennar = () => {
  return (
    <a href='https://www.facebook.com/EnviroLifee'>
        <Image className={`w-[100%] h-[500px] sm:h-[250px] md:h-[350px]`} src={bennar}/>
    </a>
  )
}

export default Bennar