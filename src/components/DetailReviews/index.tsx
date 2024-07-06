import { Box,  Divider,  Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { ReviewsType } from '../../utils/response_types';


const DetailReviews: React.FC <ReviewsType>  = ({id, user, rate, review, created_at}) => {
  return (
    <Stack>
        <Box py='24px'>
            <Divider />
        </Box>
        <Box display='flex' justifyContent='flex-start' gap='16px'>
            <Box>
                <img src={`${user?.avatar}`} width='45px' height='45px' style={{objectFit: 'cover', borderRadius: "50%"}} alt={`${user?.first_name}`} />
            </Box>
            <Box>
                <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600' mediafontsize='14px'> {rate} | {user?.first_name} {user?.last_name}</GlobalParagraph>
                <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='13px'>{review}</GlobalParagraph>
            </Box>
        </Box>
        <Box py='24px'>
            <Divider />
        </Box>
    </Stack>
  )
}

export default DetailReviews