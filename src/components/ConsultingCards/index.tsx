import { Box, Button, Grid, IconButton, Pagination, Stack } from "@mui/material";
import React from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import card_image from '../../media/images/into-hotel-2.png'
const ConsultingCards: React.FC = () => {
    return (
        <>
            <Stack pb="80px" mb='80px'>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform="capitalize" fontSize={"32px"} part="true">consulting</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize="14px" fontWeight="400">consulting</GlobalParagraph>
                    </Grid>
                </Grid>
                <Box display='flex' flexWrap='wrap' width="100%" justifyContent='flex-start' alignItems='center' gap="15px">
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${card_image})`,
                            backgroundRepeat: "no-repeat",
                            p: '24px',
                            display: "flex",
                            alignItems: 'flex-end',
                            borderRadius: '12px',
                            height: '420px',
                            mt: '32px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minWidth: '296px',
                            '&:hover': {
                                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <Box width='100%'>
                            <Box pb='16px' width='100%' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='flex-end'>
                                <Box>
                                    <GlobalParagraph fontSize="24px" mediafontsize="18px" fontWeight="600" color='neutrals'>consulting</GlobalParagraph>
                                    <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="400" color='neutrals'>consulting</GlobalParagraph>
                                </Box>
                                <Button sx={{ height: '48px' }} fullWidth variant="contained">consulting</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    margin: "50px auto"
                }}>
                    <Pagination count={10} color="primary" />
                </Box>
            </Stack>
        </>
    )
}

export default ConsultingCards