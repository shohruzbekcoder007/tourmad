import { Box, Divider, Stack } from '@mui/material'
import React from 'react'

type DetailDescriptionPropsType = {
  children?: React.ReactNode
}

const DetailDescription: React.FC<DetailDescriptionPropsType> = ({children}) => {
  return (
    <Stack mt="32px">
        <Box pb="32px">
            <Divider/>
        </Box>
        {children}
    </Stack>
  )
}

export default DetailDescription