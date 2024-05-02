import { Box, FormControl, FormGroup, Stack, TextField, Button } from '@mui/material'
import logo from "./../../media/images/logo2.png";
import React from 'react'
import { FooterLogoImg } from '../Footer/styles';
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LoginCarousel from '../LoginCarousel';

const SetPassword: React.FC = () => {
  return (
    <Stack maxWidth='1440px' margin='0 auto' height='1024px' padding={{xl: '104px', md: "50px", sm: '30px', xs: '20px'}}>
      <Box display='flex' justifyContent={{xl: "space-between", md: "space-between", sm: "center", xs: "center"}}>
        <Box width={{xl: '512px', md: '48%', sm: '400px', xs: "360px"}}>
          <FooterLogoImg>
            <img src={logo} alt="TourMad" />
          </FooterLogoImg>
          <Box mt='64px'>
            <WelcomeMainText texttransform='capitalize' fontSize='40px' paddingbottom='16px' part="true">
                Set a password
            </WelcomeMainText>
            <GlobalParagraph fontSize='16px' paddingbottom='48px' fontWeight='400' oposity='0.75'>
                Your previous password has been reseted. Please set a new password for your account.
            </GlobalParagraph>
            <Box>
              <FormControl fullWidth>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='password' label='Create Password' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='password' label='Re Enter Password' variant='outlined'></TextField>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='16px'>
              <Button fullWidth variant='contained'>
                Set Password
              </Button>
            </Box>
          </Box>
        </Box>
        <LoginCarousel width='616px'/>
      </Box>
    </Stack>
  )
}

export default SetPassword