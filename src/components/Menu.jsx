import React from 'react'
import Flex from './Flex'
import List from './List'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Flex className={`gap-[50px] sm:gap-[30px] lg:gap-[20px]`}>
      <Link to={`/`}>
        <List text="Home" />
      </Link>
      <Link to={`/Man`}>
        <List text="Man" />
      </Link>
      <Link to={`/Woman`}>
        <List text="Wo-Man" />
      </Link>
      <List text="About" />
    </Flex>
  )
}

export default Menu