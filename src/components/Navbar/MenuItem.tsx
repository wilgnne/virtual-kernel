import React from 'react'
import NextLink from 'next/link'
import { Link, Text } from '@chakra-ui/react'

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <NextLink href={to}>
      <Link>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

export default MenuItem
