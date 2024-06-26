import { Box, Button, Divider, Pagination, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import photo from './../../media/images/users.jpg';
import { newUserType } from '../../utils/response_types';

type ReviewsType = {
    id: number | null,
    user: newUserType | null,
    rate: number | null,
    review: string | null,
    avg_rate: number | null | undefined,
}

const DetailReviews: React.FC <ReviewsType> = ({user, id, review, rate, avg_rate}) => {
  return (
    <Stack mt="48px">
        <Box pb="64px">
            <Divider />
        </Box>
        <Box pb="24px" display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px'>Reviews</GlobalParagraph>
            <Button variant='contained'>Give your review</Button>
        </Box>
        <Box display='flex' justifyContent='flex-start' gap="16px" alignItems="center">
            <GlobalParagraph fontSize='50px' mediafontsize='32px' fontWeight='700'>{avg_rate}</GlobalParagraph>
            <Box>
                <GlobalParagraph paddingbottom='8px' fontSize='20px' mediafontsize='16px' fontWeight='600'>Very Good</GlobalParagraph>
                <GlobalParagraph fontSize='14px' fontWeight='400'>371 verified reviews</GlobalParagraph>
            </Box>
        </Box>
        <Box py='24px'>
            <Divider />
        </Box>
        <Box display='flex' justifyContent='flex-start' gap='16px'>
            <Box>
                <img src={photo} width='45px' height='45px' style={{objectFit: 'cover', borderRadius: "50%"}} alt="" />
            </Box>
            <Box>
                <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600' mediafontsize='14px'>5.0 Amazing | Sevda</GlobalParagraph>
                <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='13px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</GlobalParagraph>
            </Box>
        </Box>
        <Box py='24px'>
            <Divider />
        </Box>
        <Box display='flex' justifyContent='flex-start' gap='16px'>
            <Box>
                <img src={photo} width='45px' height='45px' style={{objectFit: 'cover', borderRadius: "50%"}} alt="" />
            </Box>
            <Box>
                <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600' mediafontsize='14px'>5.0 Amazing | Sevda</GlobalParagraph>
                <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='13px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</GlobalParagraph>
            </Box>
        </Box>
        <Box py='24px'>
            <Divider />
        </Box>
        <Box display='flex' justifyContent='flex-start' gap='16px'>
            <Box>
                <img src={photo} width='45px' height='45px' style={{objectFit: 'cover', borderRadius: "50%"}} alt="" />
            </Box>
            <Box>
                <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600' mediafontsize='14px'>5.0 Amazing | Sevda</GlobalParagraph>
                <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='13px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</GlobalParagraph>
            </Box>
        </Box>
        <Box py='24px'>
            <Divider />
        </Box>
        <Box display="flex" justifyContent="center">
            <Pagination count={5} color="primary" />
        </Box>
    </Stack>
  )
}

export default DetailReviews