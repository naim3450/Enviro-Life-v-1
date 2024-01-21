import React from 'react'
import HomeC from '../Home/HomeC'
import Container from '../Container'
import rifat from '../../assets/rifat.jpg'
import emon from '../../assets/emon.jpg'
import em from '../../assets/em.jpg'
import emon2 from '../../assets/emon2.jpg'
import unnon from '../../assets/unnon.jpg'
import emon3 from '../../assets/emon3.jpg'
import unnon2 from '../../assets/unnon2.jpg'
import unnon3 from '../../assets/unnon3.jpg'
import unnon4 from '../../assets/unnon4.jpg'
import g1 from '../../assets/g1.jpg'
import emon4 from '../../assets/emon4.jpg'
import g2 from '../../assets/g2.jpg'

const HomeP = () => {
  return (
    <Container className='grid grid-cols-4 gap-[10px] sm:grid sm:grid-cols-2 sm:gap-[20px] md:grid-cols-3'>
        <HomeC href={`https://www.facebook.com/photo/?fbid=326574293472255&set=pcb.326574583472226`} imgSrc={rifat} alt={rifat} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo?fbid=326574376805580&set=pcb.326574583472226`} imgSrc={emon} alt={emon} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=326574413472243&set=pcb.326574583472226`} imgSrc={em} alt={em} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=326574376805580&set=pcb.326574583472226`} imgSrc={emon2} alt={emon2} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=163251769784215&set=pcb.163252119784180`} imgSrc={unnon} alt={unnon} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=163489826427076&set=pcb.163490123093713`} imgSrc={emon3} alt={emon3} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=326574200138931&set=pcb.326574583472226`} imgSrc={unnon2} alt={unnon2} price="499৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=164789832963742&set=pcb.164789969630395`} imgSrc={unnon3} alt={unnon3} price="350৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=160068790102513&set=pcb.160068840102508`} imgSrc={unnon4} alt={unnon4} price="400৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=347300134733004&set=pb.100083590591231.-2207520000`} imgSrc={g1} alt={g1} price="699৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=160073936768665&set=pcb.160073990101993`} imgSrc={emon4} alt={emon4} price="400৳"/>
        <HomeC href={`https://www.facebook.com/photo/?fbid=347299341399750&set=pcb.347300448066306`} imgSrc={g2} alt={g2} price="699৳"/>
    </Container>
  )
}

export default HomeP