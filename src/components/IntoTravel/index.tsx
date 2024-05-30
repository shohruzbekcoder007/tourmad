import { Box, Button, Grid, IconButton, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import photo1 from "./../../media/images/into-hotel-1.jpg"
import photo2 from "./../../media/images/into-hotel-2.jpg"
import photo3 from "./../../media/images/into-hotel-3.jpg"
import photo4 from "./../../media/images/into-hotel-4.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SwipeDrawer from '../SwipeDrawer'

const IntoTravel: React.FC = () => {
  return (
    <Stack pb="80px">
        <Grid container>
            <Grid item xl={8} md={8} sm={6} xs={8}>
                <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
                <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
            </Grid>
            <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                <Button variant="outlined" >See All</Button>
            </Grid>
        </Grid>
        <Box display="flex" width="100%" justifyContent="flex-start" gap="20px" sx={{overflowX: "scroll", '&::-webkit-scrollbar' : {
        display: 'none'
    }}}>
            <Box
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            minWidth: "296px",
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="secondary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='600' color='neutrals'>Samarqand</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' color='neutrals'>An amazing journey</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='600' color='neutrals'>$ 700</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box
            sx={{backgroundImage: `url(${photo2})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            minWidth: "296px",
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Bukhara</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>A Bukhara Adventure</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 600</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box
            sx={{backgroundImage: `url(${photo3})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            minWidth: "296px",
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Xiva</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>Xiva eye adventure</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 350</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box 
            sx={{backgroundImage: `url(${photo4})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            minWidth: "296px",
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Qarshi</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>Amazing streets</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 700</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
        </Box>
    </Stack>
  )
}

export default IntoTravel