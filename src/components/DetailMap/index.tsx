import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';


type PropsType = {
  longitude?: number | null,
  latitude?: number | null
}

const DetailMap: React.FC<PropsType> = ({ longitude, latitude }) => {
  return (
    <Stack mt='64px'>
        <Box pb="32px" display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px'>Location/Map</GlobalParagraph>
            <Button variant='contained'>View on google maps</Button>
        </Box>
        <Box>
            <iframe title='Anor Plaza' src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=${14}&output=embed`} width="100%" height="450" style={{border: 0, borderRadius: "16px"}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' />
        </Box>
        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
            <LocationOnIcon />
            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Toshkent</GlobalParagraph>
        </Box>
    </Stack>
  )
}

export default DetailMap