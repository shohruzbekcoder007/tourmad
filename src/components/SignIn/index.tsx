import { Box, FormControl, FormGroup, Stack, TextField, FormControlLabel, Checkbox, Button, Divider } from '@mui/material'
import logo from "./../../media/images/logo2.png"
import React from 'react'
import { FooterLogoImg } from '../Footer/styles'
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import LoginWith from '../LoginWith'
import LoginCarousel from '../LoginCarousel'

const SignIn: React.FC = () => {

  

  return (
    <Stack maxWidth='1440px' margin='0 auto' height='1024px' padding={{xl: '104px', md: "50px", sm: '30px', xs: '20px'}}>
      <Box display='flex' justifyContent={{xl: "space-between", md: "space-between", sm: "center", xs: "center"}}>
        <Box width={{xl: '512px', md: '48%', sm: '400px', xs: "360px"}}>
          <FooterLogoImg>
            <img src={logo} alt="TourMad" />
          </FooterLogoImg>
          <Box mt='64px'>
            <WelcomeMainText texttransform='capitalize' fontSize='40px' paddingbottom='16px' part="true">
              Login
            </WelcomeMainText>
            <GlobalParagraph fontSize='16px' paddingbottom='48px' fontWeight='400' oposity='0.75'>
              Login to access your Golobe account
            </GlobalParagraph>
            <Box>
              <FormControl fullWidth>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='text' label='Email' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='password' label='Password' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '40px', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <GlobalLink fontSize='14px' fontWeight='500'>
                    Forgot Password
                  </GlobalLink>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='16px'>
              <Button fullWidth variant='contained'>
                Login
              </Button>
            </Box>
            <Box mb='40px' display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap='5px'>
              <GlobalParagraph fontSize='14px' fontWeight='500'>Don’t have an account?</GlobalParagraph>
              <GlobalLink fontSize='14px' fontWeight='600'>Sign Up</GlobalLink>
            </Box>
            <Box pb='40px' textAlign='center'>
              <Divider/>
              <Box sx={{transform: 'translateY(-13px)', display: 'inline-block', background: 'white', px: '10px'}}>
                <GlobalParagraph fontSize='14px' fontWeight='400' oposity='0.5'>
                  Or login with
                </GlobalParagraph>
              </Box>
            </Box>
            <LoginWith />
          </Box>
        </Box>
        <LoginCarousel width='616px'/>
      </Box>
    </Stack>
  )
}

export default SignIn