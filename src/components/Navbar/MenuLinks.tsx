import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

import MenuItem from './MenuItem'

type MenuLinksProps = {
  isOpen: boolean
}

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to='/scheduler'>Scheduler</MenuItem>
        <MenuItem to='/memory'>Memory</MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
