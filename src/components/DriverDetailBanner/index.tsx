import { Stack } from '@mui/material'
import React from 'react'
import ImgListDrawer from '../ImgListDrawer';
import { GalleryType } from '../../utils/response_types';

type PropsType = {
  bgimage?: string;
  gallery?: GalleryType[] | null
}

const DriverDetailBanner: React.FC<PropsType> = ({bgimage, gallery}) => {

  return (
    <Stack width="100%" position="relative">
      <img src={bgimage || ""} width="100%" style={{ objectFit: "cover", borderRadius: "12px" }} alt="" />
      {gallery?.length!==0 ? (<ImgListDrawer
        galeryList={gallery?.map((item) => {
          return {
            image: item.image,
            title: item.image,
            rows: 2,
            cols: 2
          }
        }) || []} />) : ""}
    </Stack>
  )
}

export default DriverDetailBanner