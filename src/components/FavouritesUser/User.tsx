import { Avatar } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { FavouritesText } from './styles'
import { useAppSelector } from '../../redux/hooks'
import { getUserInfo } from '../../redux/slices/userSlice'

const User = () => {

    const userInfo = useAppSelector(getUserInfo)
    
    return (
        <Stack direction="row" spacing={1} alignItems="center" gap="5px" sx={{cursor: "pointer"}}>
            <Box
                position="relative"
            >
                <Avatar alt="Remy Sharp" src={require("./../../media/images/Ellipse.png")} />
                <Box
                    position="absolute"
                    right="0"
                    top="28px"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.3125 7C1.3125 10.141 3.85902 12.6875 7 12.6875C10.141 12.6875 12.6875 10.141 12.6875 7C12.6875 3.85902 10.141 1.3125 7 1.3125C3.85902 1.3125 1.3125 3.85902 1.3125 7ZM9.31574 6.03449C9.35596 5.99216 9.40425 5.9583 9.45777 5.93492C9.51128 5.91154 9.56893 5.89911 9.62732 5.89837C9.68571 5.89762 9.74366 5.90857 9.79775 5.93057C9.85185 5.95257 9.90099 5.98518 9.94228 6.02647C9.98357 6.06776 10.0162 6.1169 10.0382 6.171C10.0602 6.22509 10.0711 6.28304 10.0704 6.34143C10.0696 6.39982 10.0572 6.45747 10.0338 6.51098C10.0104 6.5645 9.97659 6.61279 9.93426 6.65301L7.30926 9.27801C7.22722 9.35999 7.11598 9.40605 7 9.40605C6.88402 9.40605 6.77278 9.35999 6.69074 9.27801L4.06574 6.65301C3.98716 6.57029 3.944 6.46015 3.94546 6.34607C3.94692 6.23199 3.99289 6.12299 4.07356 6.04231C4.15424 5.96164 4.26324 5.91567 4.37732 5.91421C4.4914 5.91274 4.60154 5.95591 4.68426 6.03449L7 8.34996L9.31574 6.03449Z" fill="#FF8682" />
                    </svg>
                </Box>
            </Box>
            <FavouritesText>{userInfo?.first_name} {userInfo?.last_name}</FavouritesText>
        </Stack>
    )
}

export default User