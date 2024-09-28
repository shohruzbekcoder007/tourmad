import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import photo_banner from "./../../media/images/user-banner.jpg";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import { BoxStyle } from './stayles';
import { GlobalParagraph } from '../../global_styles/styles';
import { useAppSelector } from '../../redux/hooks';
import { getAccountInfo } from '../../redux/slices/userSlice';

const UsersBanner: React.FC = () => {
  const userInfo = useAppSelector(getAccountInfo)
  return (
    <Stack mt='48px'>
      <Box sx={{
        width: "100%", height: '350px',
        borderRadius: "12px",
        backgroundImage: `url("${photo_banner}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        }}>
          <Button variant='contained' sx={{
            position: "absolute",
            right: "26px",
            bottom: {xl: "26px", md: "26px", sm: "26px", xs: '290px'},
          }} startIcon={<CloudUploadIcon />}>Upload new cover</Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{transform: "translateY(-80px)"}}>
        <BoxStyle>
            <img src={`${userInfo?.avatar}`} alt='User Name' style={{
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            borderRadius: "160px"}}/>
            <Button color='error' variant='contained' sx={{
              maxWidth: '44px', maxHeight: '44px', 
              minWidth: '44px', minHeight: '44px', 
              borderRadius: "44px",
              position: "absolute",
              bottom: 0,
              right: 0}}>
              <EditIcon />
            </Button>
        </BoxStyle>
        <Box mt="24px" textAlign="center">
            <GlobalParagraph fontSize='24px' fontWeight='600' paddingbottom='8px'>{userInfo?.username}</GlobalParagraph>
            <GlobalParagraph fontSize='16' fontWeight='400' oposity='0.75'>{userInfo?.email}</GlobalParagraph>
        </Box>
      </Box>
    </Stack>
  )
}

export default UsersBanner