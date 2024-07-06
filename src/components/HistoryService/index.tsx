import {
    Stack,
    Box,
    Button,
    Paper,
    Grid,
    IconButton,
    Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CustomAutocomplete } from "../../helper_components";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ResentSearch from "../ResentSearch";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from '../../redux/slices/commonLocationSlicer'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changePage, changeSearchLocation, getHistoryList, getHistoryListCurrentPage, getHistoryListTotalPages, getHistoryLoading, getStatusHistoryList, getTripHistoryList } from "../../redux/slices/historySlice";
import { HistoryType } from "../../utils/response_types";


type Option = {
    label: string,
    value: string
}

const HistoryService: React.FC = () => {
    const [from, setFrom] = useState<Option | null>(null)
    const navigate = useNavigate()

    useEffect(() => { }, [from]) //for error fixed

    const dispatch = useAppDispatch()
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const commonLocationList = useAppSelector(getCommonLocations)

    // redux 
    const historyListTotalPages = useAppSelector(getHistoryListTotalPages)
    const historyListCurrentPage = useAppSelector(getHistoryListCurrentPage)
    const statusHistoryList = useAppSelector(getStatusHistoryList)
    const historyList = useAppSelector(getHistoryList)
    const historyLoading = useAppSelector(getHistoryLoading)


    const changePageHandler = (page: number) => {
        dispatch(changePage(page))
      }


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
        if (statusHistoryList === 'idle') {
            dispatch(getTripHistoryList())
        }
    }, [statusHistoryList, dispatch])

    return (
        <Stack mt="40px">
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">History</WelcomeMainText>
                <Button variant="outlined" onClick={() => navigate(-1)}><KeyboardBackspaceIcon /></Button>
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
                    justifyContent="space-between"
                >
                    <Box mt="16px" minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}>
                        <CustomAutocomplete
                            options={newOption === undefined ? [] : newOption}
                            placeholder="Search"
                            getChange={getChangeOptionFrom}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" width={'56px'}>
                        <Button
                            sx={{ height: '56px' }}
                            fullWidth
                            variant='contained'
                            onClick={() => {
                                dispatch(changeSearchLocation(from?.value))
                              }}>
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <ResentSearch />
            <Grid container>
                <Grid item xl={8} md={8} sm={6} xs={8}>
                    <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
                    <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
                </Grid>
            </Grid>
            <Box display="flex" width="100%" justifyContent="flex-start" flexWrap={'wrap'} gap="31px">
                {
                    historyLoading ? "Loading" : 
                    <>
                        {
                            historyList?.map(( history: HistoryType, index: number ) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            backgroundImage: `url(${history?.card})`,
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
                                            width: { xl: "23%", md: "30%", sm: "48%", xs: "100%" },
                                            '&:hover': {
                                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                                cursor: 'pointer',
                                            }
                                        }}>
                                        <IconButton sx={{ position: 'absolute', top: "10px", right: "10px" }} aria-label="favorite" color="primary">
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                        <Box width="100%">
                                            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                                                <Box>
                                                    <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>{history.location?.name}</GlobalParagraph>
                                                    <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>{history.title}</GlobalParagraph>
                                                </Box>
                                            </Box>
                                            <Button sx={{ height: "48px" }} fullWidth variant='contained' onClick={() => navigate("/history-detail")}>View History</Button>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </>
                }
                
                
                <Box display="flex" justifyContent="center" width={"100%"}>
                    <Pagination count={historyListTotalPages} page={historyListCurrentPage} color="primary" onChange={(_, page) => { changePageHandler(page) }} />
                </Box>

            </Box>

        </Stack>
    );
};

export default HistoryService;
