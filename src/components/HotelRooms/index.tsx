import { Box, Button, Divider, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import photo from "./../../media/images/detail-banner-photo.jpg";
import { RoomStyle } from '../../utils/response_types';

interface HotelRoomsProps {
    room_style: RoomStyle[] | null | undefined
}

const HotelRooms: React.FC<HotelRoomsProps> = ({ room_style }) => {
    return (
        <Stack mt="32px">
            <Box pb="32px">
                <Divider />
            </Box>
            <GlobalParagraph fontSize='20px' fontWeight='700' paddingbottom='16px' mediafontsize='16px'>Available Rooms</GlobalParagraph>
            {
                room_style?.map((item, index) => {
                    return (
                        <>
                            <Box key={index} width='100%' py="16px" display="flex" justifyContent="space-between" alignItems='center' gap="16px" flexWrap="wrap">
                                <Box display="flex" justifyContent='flex-start' gap='16px' alignItems='center'>
                                    <Box>
                                        <img src={`${item?.card}`} width='48px' height='48px' style={{ objectFit: "cover", borderRadius: "4px" }} alt="" />
                                    </Box>
                                    <GlobalParagraph fontSize='16px' fontWeight='500' mediafontsize='14px'>{item?.title}</GlobalParagraph>
                                </Box>
                                <Box display="flex" alignItems='center' justifyContent="flex-end" gap="64px">
                                    <GlobalParagraph fontSize='14px' fontWeight='600'>${item?.price}/night | {item.style}</GlobalParagraph>
                                    <Button variant='contained'>Book Now</Button>
                                </Box>
                            </Box>
                            <Divider />
                        </>
                    )
                })
            }
        </Stack>
    )
}

export default HotelRooms