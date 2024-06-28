import { Stack } from '@mui/material'
import React from 'react'
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import { useAppSelector } from '../../redux/hooks';
import { getDriverDetail } from '../../redux/slices/driverSliser';
import ImgListDrawer from '../ImgListDrawer';

type PropsType = {
  bgimage?: string
}

const DriverDetailBanner: React.FC<PropsType> = (props) => {

    const driverDetail = useAppSelector(getDriverDetail)

  return (
    <Stack width="100%" position="relative">
        <img src={props?.bgimage||detail_banner_img} width="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
        <ImgListDrawer
        name={`${driverDetail.driver?.user?.first_name} ${driverDetail.driver?.user?.last_name}`} galeryList={driverDetail.driver?.galleries?.map((item)=>{
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

export default DriverDetailBanner