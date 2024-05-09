import { Box, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import resent_photo from "./../../media/images/Rectangle 3 (1).png"
import resent_photo1 from "./../../media/images/Rectangle 3 (2).png"
import resent_photo2 from "./../../media/images/Rectangle 3 (3).png"
import resent_photo3 from "./../../media/images/Rectangle 3 (4).png"

const ResentSearch: React.FC = () => {
  return (
    <Stack pb="80px">
        <WelcomeMainText paddingbottom='32px' 
        texttransform='capitalize' part="true" 
        color='part_title' fontSize='32px'>Your recent searches</WelcomeMainText>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Box width="22%" borderRadius="8px" sx={{ '&:hover': {
                boxShadow: `0px 0px 4px 2px rgba(49, 125, 49, 0.05)`,
                cursor: 'pointer',
            }}} display=" flex" justifyContent="flex-start" gap="16px" alignItems="center">
                <Box borderRadius="8px" width="90px" height="90px">
                    <img src={resent_photo} width="100%" height="100%" style={{objectFit: "cover"}} alt="Hotel" />
                </Box>
                <Box>
                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>Istanbul, Turkey</GlobalParagraph>
                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>325 places</GlobalParagraph>
                </Box>
            </Box>
            <Box sx={{ '&:hover': {
                boxShadow: `0px 0px 4px 2px rgba(49, 125, 49, 0.05)`,
                cursor: 'pointer',
            }}} width="22%" display=" flex" justifyContent="flex-start" gap="16px" alignItems="center">
                <Box borderRadius="8px" width="90px" height="90px">
                    <img src={resent_photo1} width="100%" height="100%" style={{objectFit: "cover"}} alt="Hotel" />
                </Box>
                <Box>
                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>Sydney, Australia</GlobalParagraph>
                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>325 places</GlobalParagraph>
                </Box>
            </Box>
            <Box sx={{ '&:hover': {
                boxShadow: `0px 0px 4px 2px rgba(49, 125, 49, 0.05)`,
                cursor: 'pointer',
            }}} width="22%" display=" flex" justifyContent="flex-start" gap="16px" alignItems="center">
                <Box borderRadius="8px" width="90px" height="90px">
                    <img src={resent_photo3} width="100%" height="100%" style={{objectFit: "cover"}} alt="Hotel" />
                </Box>
                <Box>
                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>Malé, Maldives</GlobalParagraph>
                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>325 places</GlobalParagraph>
                </Box>
            </Box>
            <Box sx={{ '&:hover': {
                boxShadow: `0px 0px 4px 2px rgba(49, 125, 49, 0.05)`,
                cursor: 'pointer',
            }}} width="22%" display=" flex" justifyContent="flex-start" gap="16px" alignItems="center">
                <Box borderRadius="8px" width="90px" height="90px">
                    <img src={resent_photo2} width="100%" height="100%" style={{objectFit: "cover"}} alt="Hotel" />
                </Box>
                <Box>
                    <GlobalParagraph paddingbottom='8px' fontSize='16px' fontWeight='600'>Baku, Azerbaijan</GlobalParagraph>
                    <GlobalParagraph fontSize='12px' fontWeight='400' oposity='0.75'>325 places</GlobalParagraph>
                </Box>
            </Box>
        </Box>
    </Stack>
  )
}

export default ResentSearch