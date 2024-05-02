import { Box, FormControl, FormGroup, Stack, TextField, Button, Divider } from '@mui/material'
import logo from "./../../media/images/logo2.png";
import React from 'react'
import { FooterLogoImg } from '../Footer/styles';
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LoginWith from '../LoginWith';
import LoginCarousel from '../LoginCarousel';

const ForgotPassword: React.FC = () => {
  return (
    <Stack maxWidth='1440px' margin='0 auto' height='1024px' padding={{xl: '104px', md: "50px", sm: '30px', xs: '20px'}}>
      <Box display='flex' justifyContent={{xl: "space-between", md: "space-between", sm: "center", xs: "center"}}>
        <Box width={{xl: '512px', md: '48%', sm: '400px', xs: "360px"}}>
          <FooterLogoImg>
            <img src={logo} alt="TourMad" />
          </FooterLogoImg>
          <Box mt='64px'>
            <GlobalLink paddingbottom='20px' fontSize='14px' fontWeight='500'>
                &#60; Back to login
            </GlobalLink>
            <WelcomeMainText texttransform='capitalize' fontSize='40px' paddingbottom='16px' part="true">
                Forgot your password?
            </WelcomeMainText>
            <GlobalParagraph fontSize='16px' paddingbottom='48px' fontWeight='400' oposity='0.75'>
                Don’t worry, happens to all of us. Enter your email below to recover your password
            </GlobalParagraph>
            <Box>
              <FormControl fullWidth>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='email' label='Email' variant='outlined'></TextField>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='48px'>
              <Button fullWidth variant='contained'>
                Submit
              </Button>
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

export default ForgotPassword