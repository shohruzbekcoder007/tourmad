import { Box, Button, Divider, Pagination, Paper, Rating, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CustomAutocomplete } from '../../helper_components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from '../../redux/slices/commonLocationSlicer'
import { changePage, changeSearchLocation, getRestaurantList, getRestaurantListCurrentPage, getRestaurantListTotalPages, getRestaurantloading, getStatusRestaurantList, getTripRestaurantList } from '../../redux/slices/restaurantSlice';
import { RestaurantType } from '../../utils/response_types';
import { useTranslation } from 'react-i18next';


type Option = {
    label: string,
    value: string
}

const RestaurantFilter: React.FC = () => {
    const {t} = useTranslation()
    const [from, setFrom] = useState<Option | null>(null)
    const [text, setText] = useState<string>("")
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const commonLocationList = useAppSelector(getCommonLocations)

    // redux 
    const restaurantListTotalPages = useAppSelector(getRestaurantListTotalPages)
    const restaurantListCurrentPage = useAppSelector(getRestaurantListCurrentPage)
    const statusRestaurantList = useAppSelector(getStatusRestaurantList)
    const restaurantList = useAppSelector(getRestaurantList)
    const restaurantLoading = useAppSelector(getRestaurantloading)

    const changePageHandler = (page: number) => {
        dispatch(changePage(page))
    }


    useEffect(() => { }, [from]) //for error fixed


    useEffect(() => {
        if (statusCommonLocation === 'idle') {
            dispatch(getCommonLocationList())
        }
    }, [statusCommonLocation, dispatch])


    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    const filterLocation = commonLocationList?.filter((item) => {
        return item.parent !== null
    })

    const newOption: Option[] | undefined = filterLocation?.map((item) => {
        return { label: item.name, value: "" + item.id }
    })


    useEffect(() => {
        if (statusRestaurantList === 'idle') {
            dispatch(getTripRestaurantList())
        }
    }, [statusRestaurantList, dispatch])

    return (
        <Stack mt='40px'>
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">{t("Restaurant Filter")}</WelcomeMainText>
                <Button onClick={() => navigate(-1)} variant="outlined"><KeyboardBackspaceIcon /></Button>
            </Box>
            <Paper
                elevation={0}
                sx={{
                    boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                    borderRadius: "16px",
                    padding: "16px 24px 32px 24px",
                    mb: "32px",
                }}>
                <Box
                    display="flex"
                    alignItems="center"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={newOption === undefined ? [] : newOption}
                            placeholder={t("Location")}
                            getChange={getChangeOptionFrom}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <TextField value={text} onChange={e => {setText(e.target.value); console.log(e.target.value)}} fullWidth id="outlined-basic" label={t("Restaurant Name")} variant="outlined" />
                    </Box>
                    <Box mt="16px" width={{ xl: '56px', md: '56px', sm: '56px', xs: "100%" }}>
                        <Button
                            sx={{ height: '56px' }}
                            fullWidth variant='contained'
                            onClick={() => {
                                dispatch(changeSearchLocation({
                                    location: from?.value,
                                    search: text
                                }))
                              }}
                            >
                                
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
            </Paper>
            {
                restaurantLoading ? "Loading" :
                    <>
                        {
                            restaurantList?.map((restaurant: RestaurantType, index: number) => {
                                return (
                                    <Box width='100%' key={index}>
                                        <Stack>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                                                    borderRadius: "12px",
                                                    padding: "24px 16px",
                                                    mb: "32px",
                                                    "&:hover": {
                                                        boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
                                                    },
                                                }}
                                            >
                                                <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                                                    <Box width={{ xl: '30%', md: "30%", sm: "30%", xs: "100%" }} position="relative">
                                                        <img src={`${restaurant?.card}`} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "12px" }} alt="" />
                                                        <Button variant="contained" sx={{ right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566" }}>{restaurant.gallery?.length} {t("images")}</Button>
                                                    </Box>
                                                    <Box mt={{ xl: 0, md: 0, sm: 0, xs: "24px" }} width={{ xl: '65%', md: "65%", sm: "65%", xs: "100%" }}>
                                                        <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
                                                            <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">{restaurant.name}</WelcomeMainText>
                                                        </Box>
                                                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                                                            <LocationOnIcon />
                                                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{restaurant.location?.name}</GlobalParagraph>
                                                        </Box>
                                                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                                                            <Rating name="disabled" value={restaurant.grade} disabled />
                                                            <GlobalParagraph fontSize="12px" fontWeight="500">{restaurant.grade} {t("Star Restaurant")}</GlobalParagraph>
                                                        </Box>
                                                        <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
                                                            <Button variant="outlined">{restaurant.rate} </Button>
                                                            <GlobalParagraph fontSize="12px" fontWeight="700">{t("Very Good")}</GlobalParagraph>
                                                            <GlobalParagraph fontSize="12px" fontWeight="500">{restaurant.reviews_count} {t("reviews")}</GlobalParagraph>
                                                        </Box>
                                                        <Divider style={{
                                                            marginTop: "24px"
                                                        }} />
                                                        <Box pt="16px" display="flex" justifyContent="space-between">
                                                            <Button variant="outlined">
                                                                <FavoriteBorderIcon />
                                                            </Button>
                                                            <Box width={{ xl: "85%", md: "75%", sm: "75%", xs: "75%" }}>
                                                                <Button onClick={() => navigate(`/restaurant-detail/${restaurant.id}`)} variant="contained" fullWidth>
                                                                    {t("View Deals")}
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Stack>
                                    </Box>
                                )
                            })
                        }
                    </>
            }
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={restaurantListTotalPages} page={restaurantListCurrentPage} color="primary" onChange={(_, page) => { changePageHandler(page) }} />

            </Box>
        </Stack>
    )
}

export default RestaurantFilter