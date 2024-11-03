import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useNavigate } from "react-router-dom";
import {
  AutoModel,
  AutoNumber,
  Language,
  Location,
  UserDrivers,
} from "../../utils/response_types";
import TranslateIcon from "@mui/icons-material/Translate";
import { postLikeId } from "../../redux/slices/wishListSlice";
import { useAppDispatch } from "../../redux/hooks";

type DriveFilterProps = {
  id: number | null;
  user: UserDrivers | null;
  auto_number: AutoNumber | null;
  avg_rate: number | null;
  location: Location | null;
  auto_model: AutoModel | null;
  auto_photo: string | null;
  languages: Language[] | null;
  price: number;
  time?: string;
  orders_count: number;
  is_liked: boolean;
};

const DriveFilterCard: React.FC<DriveFilterProps> = ({
  id,
  time,
  price,
  languages,
  auto_model,
  auto_number,
  auto_photo,
  location,
  avg_rate,
  user,
  orders_count,
  is_liked,
}) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(is_liked);
  const dispatch = useAppDispatch()

  function handleLikeFunc(id: number) {
    setLiked(!liked); 
    dispatch(postLikeId(id))
  }

  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box width={{ xl: "30%", md: "30%", sm: "30%", xs: "100%" }}>
            <img
              src={`${auto_photo}`}
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "12px" }}
              alt=""
            />
          </Box>
          <Box
            mt={{ xl: 0, md: 0, sm: 0, xs: "24px" }}
            width={{ xl: "65%", md: "65%", sm: "65%", xs: "100%" }}
          >
            <Box
              pb="16px"
              width="100%"
              display="flex"
              justifyContent="space-between"
              gap="24px"
            >
              <Box>
                <WelcomeMainText
                  fontSize="20px"
                  part="true"
                  texttransform="capitalize"
                >
                  {user?.first_name} {user?.last_name}
                </WelcomeMainText>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  gap="2px"
                >
                  <TranslateIcon />
                  <GlobalParagraph
                    fontSize="12px"
                    fontWeight="500"
                    oposity="0.75"
                  >
                    {languages?.map((lang) => {
                      return `${lang.lang}, `;
                    })}
                  </GlobalParagraph>
                </Box>
              </Box>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">
                  starting from
                </GlobalParagraph>
                <GlobalParagraph
                  fontSize="24px"
                  fontWeight="700"
                  color="slamon"
                >
                  ${price}/{time}
                </GlobalParagraph>
              </Box>
            </Box>
            <Box
              pb="12px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="2px"
            >
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                {location?.name}
              </GlobalParagraph>
            </Box>
            <Box
              pb="12px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="2px"
            >
              <DirectionsCarIcon />
              <GlobalParagraph fontSize="14px" fontWeight="700">
                {auto_model?.name}
              </GlobalParagraph>
              <Box
                ml="5px"
                display="flex"
                borderRadius="5px"
                justifyContent="flex-start"
                gap="5px"
                p="5px"
                border="solid 2px #000"
              >
                <Box pr="5px" borderRight="solid 2px #000">
                  <GlobalParagraph fontSize="12px" fontWeight="700">
                    {auto_number?.region}
                  </GlobalParagraph>
                </Box>
                <Box display="flex" justifyContent="flex-start">
                  <Box pr="5px">
                    <GlobalParagraph fontSize="12px" fontWeight="700">
                      {auto_number?.number}
                    </GlobalParagraph>
                  </Box>
                  <Box pl="5px" borderLeft="solid 2px #000">
                    <GlobalParagraph fontSize="12px" fontWeight="700">
                      {auto_number?.country}
                    </GlobalParagraph>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="5px"
            >
              <Button variant="outlined">{avg_rate}</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">
                Very Good
              </GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">
                {orders_count} reviews
              </GlobalParagraph>
            </Box>
            <Divider
              style={{
                marginTop: "24px",
              }}
            />
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={() => handleLikeFunc(id as number)}>
                {liked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M11.9995 21.5C11.6985 21.4996 11.4045 21.4086 11.1558 21.2389C7.47189 18.7381 5.87673 17.0234 4.99689 15.9514C3.12189 13.6663 2.22423 11.3202 2.24954 8.77953C2.27908 5.86813 4.61486 3.5 7.45642 3.5C9.52267 3.5 10.9538 4.66391 11.7872 5.63328C11.8136 5.66368 11.8462 5.68805 11.8829 5.70476C11.9195 5.72146 11.9593 5.73011 11.9995 5.73011C12.0398 5.73011 12.0796 5.72146 12.1162 5.70476C12.1529 5.68805 12.1855 5.66368 12.2119 5.63328C13.0453 4.66297 14.4764 3.5 16.5427 3.5C19.3842 3.5 21.72 5.86812 21.7495 8.78C21.7749 11.3211 20.8763 13.6672 19.0022 15.9519C18.1224 17.0239 16.5272 18.7386 12.8433 21.2394C12.5946 21.4089 12.3006 21.4998 11.9995 21.5Z"
                      fill="#1B1464"
                    />
                  </svg>
                ) : (
                  <FavoriteBorderIcon />
                )}
              </Button>
              <Box width={{ xl: "85%", md: "75%", sm: "75%", xs: "75%" }}>
                <Button
                  onClick={() => navigate(`/driver-detail/${id}`)}
                  variant="contained"
                  fullWidth
                >
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default DriveFilterCard;
