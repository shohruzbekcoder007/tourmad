import { Stack } from '@mui/material'
import React from 'react'
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import ImgListDrawer from '../ImgListDrawer';
import { GalleryType } from '../../utils/response_types';

type PropsType = {
  bgimage?: string
  gallery?: GalleryType[] | null;
}

const DetailBanner: React.FC<PropsType> = (props) => {

  return (
    <Stack width="100%" position="relative">
      <img src={props?.bgimage || detail_banner_img} width="100%" style={{ objectFit: "cover", borderRadius: "12px" }} alt="" />
      {
        props?.gallery?.length !== 0 && (
          <ImgListDrawer name="Gallery" galeryList={props?.gallery?.map((item) => {
            return {
              image: item.image,
              title: item.image,
              rows: 2,
              cols: 2
            }
          }) || []} />
        )
      }
    </Stack>
  )
}

export default DetailBanner