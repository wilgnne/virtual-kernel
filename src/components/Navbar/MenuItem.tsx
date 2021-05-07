import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem
