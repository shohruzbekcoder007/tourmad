import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { BoxStyle } from './styles'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UserAccounts: React.FC = () => {
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
          defaultValue="John Doe"/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Email"
          type='email'
          sx={{width: "350px"}}
          defaultValue="john.doe@gmail.com"/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button sx={{mr: "8px"}} variant='outlined' startIcon={<AddCircleIcon />}>New Email</Button>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-basic"
          label="Password"
          defaultValue="Ochma kuyasan"
          type='password'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Phone Number"
          defaultValue="997980727"
          type='number'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Adress"
          defaultValue="Yunusobod Ict Academy"
          type='text'
          sx={{width: "350px"}}/>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: '18px'}}>
            <Button variant='outlined' startIcon={<BorderColorIcon />}>Change</Button>
          </Box>
        </Stack>
        <Stack pb="32px" width="100%" display="flex" flexWrap='wrap' flexDirection="row" justifyContent={{xl: "space-between", md: "space-between", sm: "space-between", xs: "flex-end"}} alignItems="center">
          <TextField id="outlined-read-only-input"
          label="Date of brith"
          defaultValue="22-08-2004"   
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