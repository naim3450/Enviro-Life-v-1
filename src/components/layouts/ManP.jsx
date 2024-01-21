import React from 'react'
import ManC from '../Man/ManC'
import b1 from '../../assets/boys/b1.jpg'
import b2 from '../../assets/boys/b2.jpg'
import b3 from '../../assets/boys/b3.jpg'
import b4 from '../../assets/boys/b4.jpg'
import b5 from '../../assets/boys/b5.jpg'
import b6 from '../../assets/boys/b6.jpg'
import b7 from '../../assets/boys/b7.jpg'
import b8 from '../../assets/boys/b8.jpg'
import b9 from '../../assets/boys/b9.jpg'
import b10 from '../../assets/boys/b10.jpg'
import b11 from '../../assets/boys/b11.jpg'
import b12 from '../../assets/boys/b12.jpg'
import Container from '../Container'

const ManP = () => {
  return (
    <Container className='grid grid-cols-4 gap-[10px] sm:grid sm:grid-cols-2 sm:gap-[10px] md:grid-cols-3'>
        <ManC href={`https://www.facebook.com/photo/?fbid=345164708279880&set=pcb.345165798279771`} imgSrc={b1} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345164744946543&set=pcb.345165798279771`} imgSrc={b2} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo?fbid=345164778279873&set=pcb.345165798279771`} imgSrc={b3} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo?fbid=345164818279869&set=pcb.345165798279771`} imgSrc={b4} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo?fbid=345164868279864&set=pcb.345165798279771`} imgSrc={b5} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345164924946525&set=pcb.345165798279771`} imgSrc={b6} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345164958279855&set=pcb.345165798279771`} imgSrc={b7} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345165451613139&set=pcb.345165798279771`} imgSrc={b8} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345165054946512&set=pcb.345165798279771`} imgSrc={b9} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345165111613173&set=pcb.345165798279771`} imgSrc={b10} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345165174946500&set=pcb.345165798279771`} imgSrc={b11} price={`20% off`}/>
        <ManC href={`https://www.facebook.com/photo/?fbid=345165368279814&set=pcb.345165798279771`} imgSrc={b12} price={`20% off`}/>
    </Container>
  )
}

export default ManP