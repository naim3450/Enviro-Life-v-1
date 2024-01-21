import React from 'react'
import Flex from './Flex'
import List from './List'

const Menu = () => {
  return (
    <Flex className={`gap-[50px] sm:gap-[30px] lg:gap-[20px]`}>
      <List href="/" text="Home"/>
      <List href="/Man" text="Man"/>
      <List href="/Wo-man" text="Wo-Man"/>
      <List text="About"/>
    </Flex>
  )
}

export default Menu