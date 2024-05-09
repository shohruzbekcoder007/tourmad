import { Box, Button, Grid, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import photo1 from "./../../media/images/into-hotel-1.png"
import photo2 from "./../../media/images/into-hotel-2.png"
import photo3 from "./../../media/images/into-hotel-3.png"
import photo4 from "./../../media/images/into-hotel-4.png"

const IntoTravel: React.FC = () => {
  return (
    <Stack pb="80px">
        <Grid container pb="32px">
            <Grid item xl={8} md={8} sm={6} xs={6}>
                <WelcomeMainText paddingbottom={"16px"} texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
                <GlobalParagraph fontSize={"16px"} fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
            </Grid>
            <Grid item xl={4} md={4} sm={6} xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                <Button variant="outlined" >See All</Button>
            </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Box p="24px" display="flex" alignItems="flex-end" borderRadius="12px" height="420px" width={{xl: "296px"}} 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer'
            }}}>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Melbourne</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>An amazing journey</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 700</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box p="24px" display="flex" alignItems="flex-end" borderRadius="12px" height="420px" width={{xl: "296px"}} 
            sx={{backgroundImage: `url(${photo2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", 
            backgroundSize: "cover"}}>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Paris</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>A Paris Adventure</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 600</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box p="24px" display="flex" alignItems="flex-end" borderRadius="12px" height="420px" width={{xl: "296px"}} 
            sx={{backgroundImage: `url(${photo3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", 
            backgroundSize: "cover"}}>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>London</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' color='neutrals'>London eye adventure</GlobalParagraph>
                        </Box>
                        <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>$ 350</GlobalParagraph>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>Book a Hotel</Button>
                </Box>
            </Box>
            <Box p="24px" display="flex" alignItems="flex-end" borderRadius="12px" height="420px" width={{xl: "296px"}} 
            sx={{backgroundImage: `url(${photo4})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", 
            backgroundSize: "cover"}}>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' color='neutrals'>Columbia</GlobalParagraph>
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