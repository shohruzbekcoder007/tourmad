import { Box, FormControl, FormGroup, Stack, TextField, FormControlLabel, Checkbox, Button, Divider } from '@mui/material'
import logo from "./../../media/images/logo2.png"
import React, { useEffect, useRef, useState } from 'react'
import { FooterLogoImg } from '../Footer/styles'
import { GlobalLink, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import LoginWith from '../LoginWith'
import LoginCarousel from '../LoginCarousel'
import { getLoginPassword, saveLogin, savePassword, setStorage, setStorageR } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import UserService from '../../services/UserService'
import { enqueueSnackbar } from 'notistack'

const SignIn: React.FC = () => {

  let navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const inputLogin = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const [defLoginPassword, setDefLoginPassword] = useState({
    login: '',
    password: ''
  })

  useEffect(() => {
    const loginPassword = getLoginPassword()
    const login = loginPassword?.login
    const password = loginPassword?.password
    if(login && password){
      setDefLoginPassword({
        login: login,
        password: password
      })
    }
  }, [])

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    
    setLoading(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const email = data.get('email');
    const password = data.get('password');

    UserService.login({
      email,
      password
    }).then(response => {
      if(response.status === 200){
        const { access, refresh } = response.data.data.tokens
        setStorage(access)
        setStorageR(refresh)
        setLoading(false)
        navigate('/protected')
      }
    }).catch(error => {
      // console.log(error)
      if(error?.response?.data?.message){
        enqueueSnackbar(error?.response?.data?.message, { variant: 'error' })
      }
      setLoading(false)
    })

  }

  const rememberPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      saveLogin(inputLogin.current?.querySelector('input')?.value as string)
      savePassword(inputPassword.current?.querySelector('input')?.value as string)
    }
  }

  return (
    <Stack maxWidth='1440px' margin='0 auto' height='1024px' padding={{xl: '104px', md: "50px", sm: '30px', xs: '20px'}}>
      <Box component={"form"} onSubmit={submitHandler} display='flex' justifyContent={{xl: "space-between", md: "space-between", sm: "center", xs: "center"}}>
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
                  <TextField ref={inputLogin} type='text' label='Email' variant='outlined' name="email" defaultValue={defLoginPassword.login} />
                </FormGroup>
                <FormGroup sx={{pb: '24px'}}>
                  <TextField ref={inputPassword} type='password' label='Password' variant='outlined' name="password" defaultValue={defLoginPassword.password}/>
                </FormGroup>
                <FormGroup sx={{pb: '40px', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" onChange={rememberPasswordHandler}/>}
                    label="Remember me"
                  />
                  <GlobalLink fontSize='14px' fontWeight='500'>
                    Forgot Password
                  </GlobalLink>
                </FormGroup>
              </FormControl>
            </Box>
            <Box pb='16px'>
              <Button disabled={loading} fullWidth variant='contained' type='submit'>
                {loading?"Login ...":"Loading"}
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