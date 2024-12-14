import { Box, FormControl, FormGroup, Stack, TextField, Button, Divider } from '@mui/material'
import logo from "./../../media/images/logo2.png";
import React from 'react'
import { FooterLogoImg } from '../Footer/styles';
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LoginWith from '../LoginWith';
import LoginCarousel from '../LoginCarousel';
import {useNavigate} from "react-router-dom";
import { enqueueSnackbar } from 'notistack';
import { useAppDispatch } from '../../redux/hooks';
import { registerUser } from '../../redux/slices/userSlice';

const SignUp: React.FC = () => {

  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info_data = {
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      confirmPassword: data.get('confirmPassword'),
    };
  
    if (info_data.password === info_data.confirmPassword) {
      try {
        const result = await dispatch(registerUser({
          first_name: info_data.firstName,
          last_name: info_data.lastName,
          email: info_data.email,
          password: info_data.password,
          phone_number: info_data.phone,
          password_confirmation: info_data.confirmPassword,
          role: "user",
        })).unwrap();
  
        if (result.data.tokens.access) { 
          enqueueSnackbar("Successfully registered!", { variant: "success" });
          navigate('/protected');
        } else {
          enqueueSnackbar("Registration failed. Please try again.", { variant: "error" });
        }
      } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : "An error occurred during registration.";
        enqueueSnackbar(errorMessage, { variant: "error" });
      }
    } else {
      enqueueSnackbar("Kalit so'zda mostlik yo'q. Iltimos ma'lumotlarni tekshirib qayta urinib ko'ring", { variant: "info" });
    }
  };
  
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
            <form onSubmit={handleSubmit}>
              <Box>
                <FormControl fullWidth>
                  <FormGroup sx={{pb: '24px', display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}, pb: {xl: 0, md: 0, sm: 0, xs: "24px"}}} type='text' label='First Name' variant='outlined' name="firstName"></TextField>
                    <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}}} type='text' label='Last Name' variant='outlined' name="lastName"></TextField>
                  </FormGroup>
                  <FormGroup sx={{pb: '24px', display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                    <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}, pb: {xl: 0, md: 0, sm: 0, xs: "24px"}}} type='text' label='Email' variant='outlined' name="email"></TextField>
                    <TextField sx={{width: {xl: "310px", md: '48%', sm: "48%", xs: "100%"}}} type='phone' label='Phone Number' variant='outlined' name="phone"></TextField>
                  </FormGroup>
                  <FormGroup sx={{pb: '24px'}}>
                    <TextField type='password' label='Password' variant='outlined' name="password"></TextField>
                  </FormGroup>
                  <FormGroup sx={{pb: '24px'}}>
                    <TextField type='password' label='Confirm Password' variant='outlined' name="confirmPassword"></TextField>
                  </FormGroup>
                </FormControl>
              </Box>
              <Box pb='16px'>
                <Button fullWidth variant='contained' type="submit">
                  Create Account
                </Button>
              </Box>
            </form>
            <Box mb='40px' display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap='5px'>
              <GlobalParagraph fontSize='14px' fontWeight='500'>Don’t have an account?</GlobalParagraph>
              <GlobalLink fontSize='14px' fontWeight='600' onClick={() => navigate('/sign-in')}>
                Sign In
              </GlobalLink>
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
