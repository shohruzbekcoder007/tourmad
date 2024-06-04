import { Box, Button, Divider, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import photo from "./../../media/images/detail-banner-photo.jpg";

const HotelRooms: React.FC = () => {
  return (
    <Stack mt="32px">
        <Box pb="32px">
            <Divider />
        </Box>
        <GlobalParagraph fontSize='20px' fontWeight='700' paddingbottom='16px' mediafontsize='16px'>Available Rooms</GlobalParagraph>
        <Box width='100%' py="16px" display="flex" justifyContent="space-between" alignItems='center' gap="16px" flexWrap="wrap">
            <Box display="flex" justifyContent='flex-start' gap='16px' alignItems='center'>
                <Box>
                    <img src={photo} width='48px' height='48px' style={{objectFit: "cover", borderRadius: "4px"}} alt="" />
                </Box>
                <GlobalParagraph fontSize='16px' fontWeight='500' mediafontsize='14px'>Superior room - 1 double bed or 2 twin beds</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems='center' justifyContent="flex-end" gap="64px">
                <GlobalParagraph fontSize='14px' fontWeight='600'>$240/night</GlobalParagraph>
                <Button variant='contained'>Book Now</Button>
            </Box>
        </Box>
        <Divider />
        <Box width='100%' py="16px" display="flex" justifyContent="space-between" alignItems='center' gap="16px" flexWrap="wrap">
            <Box display="flex" justifyContent='flex-start' gap='16px' alignItems='center'>
                <Box>
                    <img src={photo} width='48px' height='48px' style={{objectFit: "cover", borderRadius: "4px"}} alt="" />
                </Box>
                <GlobalParagraph fontSize='16px' fontWeight='500' mediafontsize='14px'>Superior room - 1 double bed or 2 twin beds</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems='center' justifyContent="flex-end" gap="64px">
                <GlobalParagraph fontSize='14px' fontWeight='600'>$240/night</GlobalParagraph>
                <Button variant='contained'>Book Now</Button>
            </Box>
        </Box>
        <Divider />
        <Box width='100%' py="16px" display="flex" justifyContent="space-between" alignItems='center' gap="16px" flexWrap="wrap">
            <Box display="flex" justifyContent='flex-start' gap='16px' alignItems='center'>
                <Box>
                    <img src={photo} width='48px' height='48px' style={{objectFit: "cover", borderRadius: "4px"}} alt="" />
                </Box>
                <GlobalParagraph fontSize='16px' fontWeight='500' mediafontsize='14px'>Superior room - 1 double bed or 2 twin beds</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems='center' justifyContent="flex-end" gap="64px">
                <GlobalParagraph fontSize='14px' fontWeight='600'>$240/night</GlobalParagraph>
                <Button variant='contained'>Book Now</Button>
            </Box>
        </Box>
        <Divider />
    </Stack>
  )
}

export default HotelRooms