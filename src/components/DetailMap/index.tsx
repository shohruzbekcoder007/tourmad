import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DetailMap: React.FC = () => {
  return (
    <Stack mt='64px'>
        <Box pb="32px" display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px'>Location/Map</GlobalParagraph>
            <Button variant='contained'>View on google maps</Button>
        </Box>
        <Box>
            <iframe title='Anor Plaza' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11979.44075980614!2d69.2852827!3d41.3553925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d11aa1a6c3f%3A0x376ab77baf387727!2z0JDQvdC-0YAg0LzQsNGA0LrQtdGC!5e0!3m2!1sru!2s!4v1717198941300!5m2!1sru!2s" width="100%" height="450" style={{border: 0, borderRadius: "16px"}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' />
        </Box>
        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
            <LocationOnIcon />
            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Toshkent</GlobalParagraph>
        </Box>
    </Stack>
  )
}

export default DetailMap