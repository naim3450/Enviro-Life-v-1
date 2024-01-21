import React from 'react'
import Container from '../Container'
import WomanC from '../Woman/WomanC'
import g1 from '../../assets/girls/g1.jpg'
import g2 from '../../assets/girls/g2.jpg'
import g3 from '../../assets/girls/g3.jpg'
import g4 from '../../assets/girls/g4.jpg'
import g5 from '../../assets/girls/g5.jpg'
import g6 from '../../assets/girls/g6.jpg'
import g7 from '../../assets/girls/g7.jpg'
import g8 from '../../assets/girls/g8.jpg'
import g9 from '../../assets/girls/g9.jpg'
import g10 from '../../assets/girls/g10.jpg'
import g11 from '../../assets/girls/g11.jpg'
import g12 from '../../assets/girls/g12.jpg'
import g13 from '../../assets/girls/g13.jpg'
import g14 from '../../assets/girls/g14.jpg'
import g16 from '../../assets/girls/g16.jpg'
import WomanCC from '../Woman/WomanCC'
import g17 from '../../assets/girls/g17.jpg'
import g18 from '../../assets/girls/g17.jpg'
import g19 from '../../assets/girls/g19.jpg'
import g20 from '../../assets/girls/g20.jpg'
import g21 from '../../assets/girls/g21.jpg'
import g22 from '../../assets/girls/g22.jpg'
import g23 from '../../assets/girls/g23.jpg'
import g24 from '../../assets/girls/g24.jpg'


const WomanP = () => {
  return (
    <Container className={`grid grid-cols-4 gap-[35px] sm:grid sm:grid-cols-2 sm:gap-[20px] md:grid-cols-3`}>
        <WomanC href={``} imgSrc={g1}/>
        <WomanC href={``} imgSrc={g2}/>
        <WomanC href={``} imgSrc={g3}/>
        <WomanC href={``} imgSrc={g4}/>
        <WomanC href={``} imgSrc={g5}/>
        <WomanC href={``} imgSrc={g6}/>
        <WomanC href={``} imgSrc={g7}/>
        <WomanC href={``} imgSrc={g8}/>
        <WomanC href={``} imgSrc={g9}/>
        <WomanC href={``} imgSrc={g10}/>
        <WomanC href={``} imgSrc={g11}/>
        <WomanC href={``} imgSrc={g12}/>
        <WomanC href={``} imgSrc={g13}/>
        <WomanC href={``} imgSrc={g14}/>
        <WomanC href={``} imgSrc={g16}/>

{/* =============================================================== */}
{/* =============================================================== */}

    <WomanCC href={``} imgSrc={g17} price={`Price:599৳`}/>
    <WomanCC href={``} imgSrc={g18} price={`Price:599৳`}/>
    <WomanCC href={``} imgSrc={g19} price={`Price:599৳`}/>
    <WomanCC href={``} imgSrc={g20} price={`Price:599৳`}/>
    <WomanCC href={``} imgSrc={g21} price={`Price:599৳`}/>


    <WomanCC href={``} imgSrc={g22} price={`Price:349৳`}/>
    <WomanCC href={``} imgSrc={g23} price={`Price:349৳`}/>
    <WomanCC href={``} imgSrc={g24} price={`Price:349৳`}/>
    </Container>
  )
}

export default WomanP