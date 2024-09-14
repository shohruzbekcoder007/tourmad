import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { BoxStyle } from './styles'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser, getUserInfo, getUserStatus } from '../../redux/slices/userSlice';

const UserAccounts: React.FC = () => {
  const dispatch = useAppDispatch()
  const statusUserInfo = useAppSelector(getUserStatus)
  const userInfo = useAppSelector(getUserInfo)

  useEffect(() => {
    if(statusUserInfo==="idle")
    dispatch(getUser())
}, [statusUserInfo, dispatch])

  return (
    <Stack>
      <GlobalParagraph fontSize='32px' fontWeight='700' paddingbottom='16px'>
        Account
      </GlobalParagraph>
      <BoxStyle>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Name"
          sx={{width: "350px"}}
          value={`${userInfo?.first_name}  ${userInfo?.last_name}`}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label=""
          type='email'
          sx={{width: "350px"}}
          value={userInfo?.email}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button sx={{mr: "8px"}} variant='outlined' startIcon={<AddCircleIcon />}>New Email</Button>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-basic"
          label="Password"
          value="Ochma kuyasan"
          type='password'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Phone Number"
          value="997980727"
          type='number'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Adress"
          value="Yunusobod Ict Academy"
          type='text'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Date of brith"
          value={userInfo?.birth_date}  
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
      </BoxStyle>
    </Stack>
  )
}

export default UserAccounts