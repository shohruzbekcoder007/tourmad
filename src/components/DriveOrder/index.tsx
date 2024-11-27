import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import { Alert, Divider, Grid, TextField } from "@mui/material";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { DriveOrderType } from "../../utils/response_types";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

type PropsType = {
  btnText: string;
  id: string | undefined;
  success: boolean | null;
  message: String | null;
  orderSend: (data: { orderCreate: DriveOrderType }) => void;
};

type Anchor = "right";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  { label: "The Shawshank Redemption", value: "1994" },
  { label: "The Godfather", value: "1972" },
  { label: "The Godfather: Part II", value: "1974" },
  { label: "The Dark Knight", value: "2008" },
  { label: "12 Angry Men", value: "1957" },
  { label: "Schindler's List", value: "1993" },
  { label: "Pulp Fiction", value: "1994" },
];

const DriveOrder: React.FC<PropsType> = (props) => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });

  const [from, setFrom] = useState<Option | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const [time, setTime] = useState<Dayjs | null | undefined>(null);

  const getChangeOptionFrom = (newValue: Option | null) => {
    setFrom(newValue);
  };

  const defaultPosition = { lat: 40.71550047598207, lng: 64.99960158539278 };
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {}, [from]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  function orderCrete() {
    props.orderSend({
      orderCreate: {
        driver: props.id,
        start_time: `${time?.format()}`,
        comment: comment,
        latitude: 40.71550047598207,
        longitude: 64.99960158539278,
      },
    });
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: { xl: 500, md: 400, sm: 350, xs: 300 } }}
      p="24px"
      pt="44px"
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <WelcomeMainText
        fontSize="32px"
        paddingbottom="44px"
        part="true"
        mediafontsize="24px"
      >
        {t("Driver Order")}
      </WelcomeMainText>

      <Box pb="44px">
        <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
          {t("Destination")}
        </GlobalParagraph>
        <APIProvider apiKey="AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA">
          <div style={{ height: "300px", width: "100%" }}>
            <Map
              zoom={5}
              center={lat && lng ? { lat, lng } : defaultPosition}
              mapTypeId="da9902056e735de7"
              onClick={(e: any) => {
                if (e && e.latLng) {
                  setLat((e as google.maps.MapMouseEvent).latLng.lat);
                  setLng((e as google.maps.MapMouseEvent).latLng.lng);
                }
              }}
            >
              {lat && lng && <Marker position={{ lat, lng }} />}
            </Map>
          </div>
        </APIProvider>
      </Box>
      <Box pb="44px">
        <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
          Start Data
        </GlobalParagraph>
        <Grid container spacing={2}>
          <Grid item xl={12} md={12} sm={12} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["StaticDateTimePicker"]}>
                <DemoItem>
                  <StaticDateTimePicker
                    value={time}
                    onChange={(newTime) => setTime(newTime)}
                    componentsProps={{
                      actionBar: { actions: [] },
                    }}
                    defaultValue={dayjs("")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      <Box pb="44px">
        <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
          {t("Comment")}
        </GlobalParagraph>
        <TextField
          fullWidth
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="outlined"
          label="Comment"
        />
      </Box>
      {props.message === "" ? (
        <></>
      ) : (
        <Box pb="44px">
          <Alert severity="error">{props.message}</Alert>
        </Box>
      )}
      <Divider />
      <Box py="44px" display="flex" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={toggleDrawer(anchor, false)}
          sx={{
            width: "120px",
            height: "40px",
            borderRadius: "25px",
          }}
        >
          {t("Cancel")}
        </Button>
        <Button
          onClick={orderCrete}
          variant="contained"
          sx={{
            width: "120px",
            height: "40px",
            borderRadius: "25px",
          }}
        >
          {t("Order Driver")}
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer("right", true)}
            sx={{ height: "48px" }}
            variant="contained"
          >
            {props.btnText}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DriveOrder;
