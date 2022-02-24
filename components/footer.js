import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={1} fontSize="sm">
      &copy; {new Date().getFullYear()} Exclusive Ideas. All Rights Reserved.
    </Box>
  )
}

export default Footer
