import { Box } from '@mui/material'
import React from 'react'
import login_banner from './../../media/images/login-banner.jpg';

type propsWidth = {
  width: string
}

const LoginCarousel = (props : propsWidth) => {
  return (
    <Box  display={{xl: "block", md: "block", sm: 'none', xs: "none"}} sx={{width: {xl: `${props.width}`, md: '48%', sm: 0, xs: 0}, height: '816px'}}>
      <img src={login_banner} style={{width: '100%', height: "100%", objectFit: "cover", borderRadius: "30px"}} alt="" />
    </Box>
  )
}

export default LoginCarousel