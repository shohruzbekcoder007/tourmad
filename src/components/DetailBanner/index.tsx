import { Stack } from '@mui/material'
import React from 'react'
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import ImgListDrawer from '../ImgListDrawer';

type PropsType = {
  bgimage: string
}

const DetailBanner: React.FC<PropsType> = (props) => {
  return (
    <Stack width="100%" position="relative">
        <img src={props.bgimage||detail_banner_img} width="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
        <ImgListDrawer />
    </Stack>
  )
}

export default DetailBanner