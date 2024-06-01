import { Stack } from '@mui/material'
import React from 'react'
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import ImgListDrawer from '../ImgListDrawer';

const DetailBanner: React.FC = () => {
  return (
    <Stack width="100%" position="relative">
        <img src={detail_banner_img} width="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
        <ImgListDrawer />
    </Stack>
  )
}

export default DetailBanner