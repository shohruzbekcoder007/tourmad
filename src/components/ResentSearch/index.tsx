import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import { useAppDispatch } from '../../redux/hooks'
import { useSelector } from 'react-redux'
import { getHotelLocationList, getLoacationList, getStatusLastSearchHotel } from '../../redux/slices/hotelSlice'

const ResentSearch: React.FC = () => {

    const dispatch = useAppDispatch()
    const statusLastSearchHotel = useSelector(getStatusLastSearchHotel)
    const hotelLocationList = useSelector(getHotelLocationList)

    useEffect(() => {
        if (statusLastSearchHotel === 'idle') {
            dispatch(getLoacationList())
        }
    }, [statusLastSearchHotel, dispatch])

    return (
        <Stack pb="80px"  pt={{xl: 0, md: 0, sm: "60px", xs: "60px"}}>
            <WelcomeMainText
                texttransform='capitalize' 
                part="true"
                color='part_title' 
                fontSize='32px' 
                mediafontsize='24px'
            >
                Your recent searches
            </WelcomeMainText>
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center" 
                flexWrap="wrap"
            >
                {
                    hotelLocationList?.map((hotelLocation, index) => {
                        return (
                            <Box
                                key={index}
                                mt="32px"
                                width={{ xl: "22%", md: "30%", sm: "47%", xs: "100%" }}
                                borderRadius="8px"
                                sx={{
                                    '&:hover': {
                                        boxShadow: `0px 0px 4px 2px rgba(49, 125, 49, 0.05)`,
                                        cursor: 'pointer',
                                    }
                                }}
                                display=" flex"
                                justifyContent="flex-start"
                                gap="16px"
                                alignItems="center"
                            >
                                <Box 
                                    borderRadius="8px" 
                                    width="90px" 
                                    height="90px"
                                >
                                    <img src={`${hotelLocation?.photo}`} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "8px" }} alt="Hotel" />
                                </Box>
                                <Box>
                                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>{hotelLocation?.name}</GlobalParagraph>
                                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>{hotelLocation?.hotels} places</GlobalParagraph>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Stack>
    )
}

export default ResentSearch