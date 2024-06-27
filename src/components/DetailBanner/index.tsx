import { Stack } from '@mui/material'
import React from 'react'
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import ImgListDrawer from '../ImgListDrawer';
import { useAppSelector } from '../../redux/hooks';
import { getHotelDetail } from '../../redux/slices/hotelSlice';

type PropsType = {
  bgimage?: string
}

const DetailBanner: React.FC<PropsType> = (props) => {

  const { hotel } = useAppSelector(getHotelDetail);

  return (
    <Stack width="100%" position="relative">
        <img src={props?.bgimage||detail_banner_img} width="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
        <ImgListDrawer name={hotel?.name} galeryList={hotel?.gallery?.map((item)=>{
          return {
            image: item.image,
            title: item.image,
            rows: 2,
            cols: 2
          }
        })||[]}/>
    </Stack>
  )
}

export default DetailBanner