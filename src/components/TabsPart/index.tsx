import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Favourite from "../Favourite";
import { GlobalParagraph } from "../../global_styles/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getStatusWishList, getWishList, getWishListList } from "../../redux/slices/wishListSlice";
import FavouriteTwo from "../FavouriteTwo";
import FavouriteThree from "../FavouriteThree";
import FavouriteFour from "../FavouriteFour";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dispatch = useAppDispatch()
  const statusWishList = useAppSelector(getStatusWishList)
  const wishList = useAppSelector(getWishListList)
  
  React.useEffect(() => {
    if(statusWishList==="idle") {
      dispatch(getWishList())
    }
  }, [statusWishList, dispatch])
  console.log(wishList, "wishList")

  return (
    <Stack>
      <GlobalParagraph
        fontSize="32px"
        mediafontsize="24px"
        fontWeight="700"
        style={{
          marginTop: "48px",
          marginBottom: "48px",
          marginLeft: "30px",
        }}
      >
        Favourites
      </GlobalParagraph>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 0 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "30px",
            }}
          >
            <Tab sx={{
              width: {xl: "120px", md: "120px", sm: "60px", xs: "40px"}
            }} label="Hotel" {...a11yProps(0)} />
            <Tab sx={{
              width: {xl: "120px", md: "120px", sm: "60px", xs: "40px"}
            }} label="Restaurant" {...a11yProps(1)} />
            <Tab sx={{
              width: {xl: "120px", md: "120px", sm: "60px", xs: "40px"}
            }} label="Driver" {...a11yProps(2)} />
            <Tab sx={{
              width: {xl: "120px", md: "200px", sm: "60px", xs: "40px"}
            }} label="History or Place" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Favourite />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <FavouriteTwo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <FavouriteThree/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <FavouriteFour/>
        </CustomTabPanel>
      </Box>
    </Stack>
  );
}
