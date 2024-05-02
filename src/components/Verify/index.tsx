import { Box, FormControl, FormGroup, Stack, TextField, Button } from '@mui/material'
import logo from "./../../media/images/logo2.png";
import React from 'react'
import { FooterLogoImg } from '../Footer/styles';
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LoginCarousel from '../LoginCarousel';

const Verify: React.FC = () => {
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
                Verify code
            </WelcomeMainText>
            <GlobalParagraph fontSize='16px' paddingbottom='48px' fontWeight='400' oposity='0.75'>
                An authentication code has been sent to your email.
            </GlobalParagraph>
            <Box>
              <FormControl fullWidth>
                <FormGroup sx={{pb: '24px'}}>
                    <TextField type='password' label='Enter Code' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '40px', display: "flex", gap: '5px', flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start"}}>
                  <GlobalParagraph fontSize='14px' fontWeight='500'>
                     Didn’t receive a code?
                  </GlobalParagraph>
                  <GlobalLink fontSize='14px' fontWeight='500'>
                    Resend
                  </GlobalLink>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='16px'>
              <Button fullWidth variant='contained'>
                Verify
              </Button>
            </Box>
          </Box>
        </Box>
        <LoginCarousel width='616px'/>
      </Box>
    </Stack>
  )
}

export default Verify