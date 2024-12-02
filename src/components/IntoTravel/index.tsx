import { Box, Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { RecommendationType } from '../../utils/response_types'
import SwipeDrawer from '../SwipeDrawer'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type IntoTravelPropsType = {
    data: RecommendationType[] | null,
    daily?: boolean,
    type?: "hotel" | "restaurant" | "daily" | "trip"
    link: string,
    query?: string
}
const IntoTravel: React.FC<IntoTravelPropsType> = ({ data, daily, type, link, query }) => {
    const navigate = useNavigate();
    const { t } = useTranslation()
    if (data) {
        return (
            <Stack pb="80px">

                <Box width="100%" display='flex' flexWrap='wrap' justifyContent="space-between">
                    {
                        data?.map((item, index) => {
                            return (
                                <Box
                                    onClick={() => navigate(`/${link}-detail/${item.id}`, {state: {query: query}})}
                                    key={index}
                                    sx={{
                                        backgroundImage: `url(${item?.card})`,
                                        backgroundRepeat: "no-repeat",
                                        p: "24px",
                                        display: "flex",
                                        alignItems: 'flex-end',
                                        borderRadius: "12px",
                                        height: "420px",
                                        mt: "32px",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        position: "relative",
                                        width: { xl: "296px", md: '30%', sm: "47%", xs: '100%' },
                                        '&:hover': {
                                            boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                            cursor: 'pointer',
                                        }
                                    }}>
                                    <IconButton sx={{ position: 'absolute', top: "10px", right: "10px" }} aria-label="favorite" color="secondary">
                                        {/* <FavoriteBorderIcon /> */}
                                    </IconButton>
                                    <Box width="100%">
                                        <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="10px" alignItems="flex-end">
                                            <Box>
                                                <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='600' color='neutrals'>{item?.name}</GlobalParagraph>
                                                <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' color='neutrals'>{item?.desc}</GlobalParagraph>
                                            </Box>
                                            {
                                                daily ?
                                                    (item?.price) ? <GlobalParagraph fontSize='18px' mediafontsize='14px' fontWeight='600' color='neutrals'>day/ {item?.price}$</GlobalParagraph> : <></> :
                                                    (item?.room_style) ? <GlobalParagraph fontSize='18px' mediafontsize='14px' fontWeight='600' color='neutrals'>{item?.room_style[0]?.price}$</GlobalParagraph> : <></>
                                            }
                                        </Box>
                                        {
                                            type === "hotel" &&
                                            <SwipeDrawer
                                                hotel_id={item?.id}
                                                addType={'hotel'}
                                                button={<Button
                                                    sx={{ height: "48px" }}
                                                    fullWidth
                                                    variant='contained'
                                                >
                                                    {t("Book a hotel")}
                                                </Button>}
                                            />
                                        }
                                        {
                                            type === "restaurant" &&
                                            <SwipeDrawer
                                                restaurant_id={item?.id}
                                                addType={'restaurant'}
                                                button={<Button
                                                    sx={{ height: "48px" }}
                                                    fullWidth
                                                    variant='contained'
                                                >
                                                    {t("Book a restaurant")}
                                                </Button>}
                                            />
                                        }
                                        {
                                            type === "trip" &&
                                            <SwipeDrawer
                                                restaurant_id={item?.id}
                                                addType={'trip'}
                                                button={<Button
                                                    sx={{ height: "48px" }}
                                                    fullWidth
                                                    variant='contained'
                                                >
                                                    {t("Book a trip")}
                                                </Button>}
                                            />
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Stack>
        )
    } else {
        return <p>{t("Ma'lumot yo'q")}</p>
    }

}

export default IntoTravel