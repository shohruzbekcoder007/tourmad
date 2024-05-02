import { Box, FormControl, FormGroup, Stack, TextField, FormControlLabel, Checkbox, Button, Divider } from '@mui/material'
import logo from "./../../media/images/logo2.png";
import React from 'react'
import { FooterLogoImg } from '../Footer/styles';
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LoginWith from '../LoginWith';
import LoginCarousel from '../LoginCarousel';

const SignUp: React.FC = () => {
  return (
    <Stack maxWidth='1440px' margin='0 auto' height='1024px' padding={{xl: '104px', md: "50px", sm: '30px', xs: '20px'}}>
      <Box display='flex' justifyContent={{xl: "space-between", md: "space-between", sm: "center", xs: "center"}}>      
        <LoginCarousel  width='487px'/>
        <Box width={{xl: '640px', md: '48%', sm: '400px', xs: "360px"}}>
          <FooterLogoImg>
            <img src={logo} alt="TourMad" />
          </FooterLogoImg>
          <Box mt='64px'>
            <WelcomeMainText texttransform='capitalize' fontSize='40px' paddingbottom='16px' part="true">
              Sign up
            </WelcomeMainText>
            <GlobalParagraph fontSize='16px' paddingbottom='48px' fontWeight='400' oposity='0.75'>
              Let’s get you all st up so you can access your personal account.
            </GlobalParagraph>
            <Box>
              <FormControl fullWidth>
                <FormGroup sx={{pb: '24px', display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                  <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}, pb: {xl: 0, md: 0, sm: 0, xs: "24px"}}} type='text' label='First Name' variant='outlined'></TextField>
                  <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}}} type='text' label='Last Name' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '24px', display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                  <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}, pb: {xl: 0, md: 0, sm: 0, xs: "24px"}}} type='text' label='Email' variant='outlined'></TextField>
                  <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}}} type='email' label='Phone Number' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='password' label='Password' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField type='password' label='Confirm Password' variant='outlined'></TextField>
                </FormGroup>
                <FormGroup sx={{pb: '40px', display: "flex", flexDirection: 'row', gap: '5px', alignItems: 'center', justifyContent: "flex-start"}}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="I agree to all the"
                  />
                  <GlobalLink fontSize='15px' fontWeight='500'>
                    Terms
                  </GlobalLink>
                   and 
                  <GlobalLink fontSize='15px' fontWeight='500'>
                    Privacy Policies
                  </GlobalLink>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='16px'>
              <Button fullWidth variant='contained'>
                Create Account
              </Button>
            </Box>
            <Box mb='40px' display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap='5px'>
              <GlobalParagraph fontSize='14px' fontWeight='500'>Don’t have an account?</GlobalParagraph>
              <GlobalLink fontSize='14px' fontWeight='600'>Sign In</GlobalLink>
            </Box>
            <Box pb='40px' textAlign='center'>
              <Divider/>
              <Box sx={{transform: 'translateY(-13px)', display: 'inline-block', background: 'white', px: '10px'}}>
                <GlobalParagraph fontSize='14px' fontWeight='400' oposity='0.5'>
                  Or Sign up with
                </GlobalParagraph>
              </Box>
            </Box>
            <LoginWith/>
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default SignUp