import { Box, Button, Grid, IconButton, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const ConsultingCards: React.FC = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };
    return (
        <>
            <Stack pb="80px">
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform="capitalize" fontSize={"32px"} part="true">consulting</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize="14px" fontWeight="400">consulting</GlobalParagraph>
                    </Grid>
                </Grid>
                <Box display='flex' flexWrap='wrap' width="100%" justifyContent='space-between' alignItems='center'>
                    <Box
                        sx={{
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                            backgroundImage: `url(https://api.tourmad.uz/media/hotels/husan_l4jRpEp.jpg)`,
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
                        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px'}} aria-label="favorite" color="secondary">
                            <FavoriteBorderIcon/>
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
                    <Typography>Page: {page}</Typography>
                    <Pagination count={5} page={page} onChange={handleChange} sx={{
                        marginTop: "20px"
                    }}/>
                </Box>
            </Stack>
        </>
    )
}

export default ConsultingCards