import { Stack } from "@mui/material";
import React from "react";
import detail_banner_img from "./../../media/images/detail-banner-photo.jpg";
import { GalleryType } from "../../utils/response_types";

type PropsType = {
  bgimage?: string;
  gallery?: GalleryType[] | null;
  name?: string;
};

const BannerDetail: React.FC<PropsType> = (props) => {
  return (
    <Stack width="100%" position="relative">
      <img
        src={props?.bgimage || detail_banner_img}
        width="100%"
        style={{ objectFit: "cover", borderRadius: "12px" }}
        alt=""
      />
    </Stack>
  );
};

export default BannerDetail;
