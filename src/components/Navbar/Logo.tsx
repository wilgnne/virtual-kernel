import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text color="blue.800" fontSize='lg' fontWeight='bold'>
        Virtual Kernel 👨🏻‍💻
      </Text>
    </Box>
  )
}

export default Logo
