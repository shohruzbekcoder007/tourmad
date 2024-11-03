import { Box, Button, Divider, Paper, Rating } from "@mui/material";
import React from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph } from "../../global_styles/styles";
import card_image from "./../../media/images/fav-card-img.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getStatusWishList,
  getWishList,
  getWishListList,
} from "../../redux/slices/wishListSlice";
import { useNavigate } from "react-router-dom";

const FavouriteThree: React.FC = () => {
  const dispatch = useAppDispatch();
  const statusWishList = useAppSelector(getStatusWishList);
  const wishList = useAppSelector(getWishListList);
  const navigate = useNavigate()

  React.useEffect(() => {
    if (statusWishList === "idle") {
      dispatch(getWishList());
    }
  }, [statusWishList, dispatch]);

  return (
    <Box>
      {wishList &&
        wishList[0]?.driver_wishes?.map((item, index) => {
          return (
            <Paper
              key={index}
              elevation={1}
              sx={{
                boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                borderRadius: "16px",
                padding: "32px 24px",
                marginTop: "48px",
                mb: "32px",
              }}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                width="100%"
              >
                <Box
                  sx={{
                    width: { xl: "410px", md: "36%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img
                    src={item?.driver?.auto_photo || card_image}
                    width="100%"
                    alt=""
                    style={{
                      borderRadius: "16px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xl: "700px", md: "62%", sm: "100%", xs: "100%" },
                  }}
                >
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box
                      sx={{
                        width: { xl: "613px", md: "77%", sm: "77%", xs: "77%" },
                      }}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <GlobalParagraph
                        fontSize="20px"
                        mediafontsize="18px"
                        fontWeight="700"
                      >
                        {item?.driver?.user?.first_name} {item?.driver?.user?.middle_name} {item?.driver?.user?.last_name}
                      </GlobalParagraph>

                      <Box display="flex" alignItems="center" marginTop="16px">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7Z"
                            fill="#112211"
                          />
                          <path
                            d="M8 1C5.24312 1 3 3.14531 3 5.78125C3 7.03656 3.57219 8.70594 4.70062 10.7431C5.60687 12.3787 6.65531 13.8578 7.20062 14.5938C7.29277 14.7195 7.41325 14.8218 7.5523 14.8923C7.69134 14.9627 7.84504 14.9995 8.00094 14.9995C8.15683 14.9995 8.31053 14.9627 8.44958 14.8923C8.58862 14.8218 8.70911 14.7195 8.80125 14.5938C9.34563 13.8578 10.395 12.3787 11.3013 10.7431C12.4278 8.70656 13 7.03719 13 5.78125C13 3.14531 10.7569 1 8 1ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39991 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C9.99942 6.53026 9.78852 7.03863 9.41357 7.41357C9.03863 7.78852 8.53026 7.99942 8 8Z"
                            fill="#112211"
                          />
                        </svg>
                        <GlobalParagraph
                          fontSize="12px"
                          mediafontsize="12px"
                          fontWeight="500"
                          oposity="0.75"
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          {item?.driver?.location?.name}
                        </GlobalParagraph>
                      </Box>
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        alignItems="center"
                        marginTop="13px"
                        sx={{
                          width: {
                            xl: "60%",
                            md: "70%",
                            sm: "100%",
                            xs: "100%",
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          flexWrap="wrap"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Rating
                            name="read-only"
                            value={item?.driver?.avg_rate}
                            readOnly
                            style={{ color: "#FF8682" }}
                          />
                          <GlobalParagraph
                            fontSize="12px"
                            mediafontsize="10px"
                            fontWeight="500"
                            style={{
                              marginLeft: "5px",
                            }}
                          >
                            {item?.driver?.avg_rate} Star Driver
                          </GlobalParagraph>
                        </Box>
                        {/* <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{
                              marginRight: "5px",
                            }}
                          >
                            <path
                              d="M13.5 2H3C2.86739 2 2.74021 2.05268 2.64645 2.14645C2.55268 2.24021 2.5 2.36739 2.5 2.5V8.5C2.50091 9.29537 2.81727 10.0579 3.37968 10.6203C3.9421 11.1827 4.70463 11.4991 5.5 11.5H9C9.79537 11.4991 10.5579 11.1827 11.1203 10.6203C11.6827 10.0579 11.9991 9.29537 12 8.5V6H12.5625C13.0762 5.99942 13.5687 5.79511 13.9319 5.43188C14.2951 5.06865 14.4994 4.57618 14.5 4.0625V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2ZM13.5 4.0625C13.5 4.31114 13.4012 4.5496 13.2254 4.72541C13.0496 4.90123 12.8111 5 12.5625 5H12V3H13.5V4.0625ZM12.5 12.5H2C1.86739 12.5 1.74021 12.5527 1.64645 12.6464C1.55268 12.7402 1.5 12.8674 1.5 13C1.5 13.1326 1.55268 13.2598 1.64645 13.3536C1.74021 13.4473 1.86739 13.5 2 13.5H12.5C12.6326 13.5 12.7598 13.4473 12.8536 13.3536C12.9473 13.2598 13 13.1326 13 13C13 12.8674 12.9473 12.7402 12.8536 12.6464C12.7598 12.5527 12.6326 12.5 12.5 12.5Z"
                              fill="#112211"
                            />
                          </svg>
                          <GlobalParagraph
                            fontSize="12px"
                            mediafontsize="10px"
                            fontWeight="700"
                            style={{
                              marginRight: "2px",
                            }}
                          >
                            20+
                          </GlobalParagraph>
                          <GlobalParagraph
                            fontSize="12px"
                            mediafontsize="10px"
                            fontWeight="500"
                          >
                            Aminities
                          </GlobalParagraph>
                        </Box> */}
                      </Box>
                      <Box
                        width="80%"
                        alignItems="center"
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="flex-start"
                        gap="8px"
                        marginTop="12px"
                      >
                        <Button variant="outlined">{item?.driver?.avg_rate}</Button>
                        <GlobalParagraph
                          fontSize="12px"
                          mediafontsize="10px"
                          fontWeight="700"
                        >
                          Very Good
                        </GlobalParagraph>
                        {/* <GlobalParagraph
                          fontSize="12px"
                          mediafontsize="10px"
                          fontWeight="500"
                        >
                          54 reviews
                        </GlobalParagraph> */}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: { xl: "107px", md: "23%", sm: "23%", xs: "23%" },
                      }}
                    >
                      <Box
                        pb="16px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {/* <Box textAlign="right">
                          <GlobalParagraph
                            fontSize="12px"
                            mediafontsize="8px"
                            fontWeight="500"
                          >
                            starting from
                          </GlobalParagraph>
                          <GlobalParagraph
                            fontSize="24px"
                            mediafontsize="12px"
                            fontWeight="700"
                            style={{
                              color: "#FF8682",
                            }}
                          >
                            $104
                            <GlobalParagraph
                              fontSize="14px"
                              mediafontsize="8px"
                              fontWeight="700"
                              style={{
                                color: "#FF8682",
                              }}
                            >
                              /night
                            </GlobalParagraph>
                          </GlobalParagraph>
                          <GlobalParagraph
                            fontSize="12px"
                            mediafontsize="8px"
                            fontWeight="500"
                            oposity="0.4"
                          >
                            excl. tax
                          </GlobalParagraph>
                        </Box> */}
                      </Box>
                    </Box>
                    <Divider
                      style={{
                        marginTop: "24px",
                      }}
                    />
                  </Box>
                  <Divider
                    style={{
                      marginTop: "24px",
                    }}
                  />
                  <Box
                    pt="16px"
                    display="flex"
                    justifyContent="space-between"
                    marginTop="24px"
                  >
                    <Button variant="outlined">
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
                    </Button>
                    <Box width="85%" paddingLeft="10px">
                      <Button variant="contained" fullWidth onClick={() => navigate(`/driver-detail/${item?.driver?.id}`)}>
                        View Deals
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          );
        })}
    </Box>
  );
};

export default FavouriteThree;
