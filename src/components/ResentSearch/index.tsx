import { Box, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import { LocationType } from '../../utils/response_types'

type ResentSearchPropsType =  {
    title?: string,
    statusLastSearch?: string,
    locationList?: LocationType[] | null
}

const ResentSearch: React.FC<ResentSearchPropsType> = ({title, statusLastSearch, locationList}) => {

    return (
        <Stack pb="80px"  pt={{xl: 0, md: 0, sm: "60px", xs: "60px"}}>
            <WelcomeMainText
                texttransform='capitalize' 
                part="true"
                color='part_title' 
                fontSize='32px' 
                mediafontsize='24px'
            >
                {title?title:"Your recent searches"}
            </WelcomeMainText>
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center" 
                flexWrap="wrap"
            >
                {
                    statusLastSearch === "succeeded"? locationList?.map((location, index) => {
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
                                    <img src={`${location?.photo}`} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "8px" }} alt="Hotel" />
                                </Box>
                                <Box>
                                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>{location?.name}</GlobalParagraph>
                                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>{location?.hotels || location?.restaurants || location?.drivers || 0} places</GlobalParagraph>
                                </Box>
                            </Box>
                        )
                    }):
                    statusLastSearch === "loading"?<p>Loading...</p>:
                    <></>
                }
            </Box>
        </Stack>
    )
}

export default ResentSearch