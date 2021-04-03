import React, { useState } from 'react'

import MenuToggle from './MenuToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <MenuToggle toggle={toggle} isOpen={isOpen} />
  )
}

export default Header
