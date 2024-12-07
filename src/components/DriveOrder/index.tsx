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
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deviderClear, getOrderCreate } from "../../redux/slices/driverSliser";
import { enqueueSnackbar } from "notistack";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { DriveOrderType } from "../../utils/response_types";

// Marker icon configuration for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Map marker component to handle click events and set location
const LocationMarker = ({
  setLatLng,
}: {
  setLatLng: (latLng: { lat: number; lng: number }) => void;
}) => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setLatLng({ lat, lng });
    },
  });

  return position ? <Marker position={position} /> : null;
};

type PropsType = {
  btnText: string;
  id: string | undefined;
  success: boolean | null;
  message: String | null;
  orderSend: (data: { orderCreate: DriveOrderType }) => void;
};

type Anchor = "right";

const DriveOrder: React.FC<PropsType> = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    right: false,
  });
  const [comment, setComment] = useState<string | null>(null);
  const [time, setTime] = useState<Dayjs | null | undefined>(null);
  const { driverOrderMessage, driverOrderCreate } = useAppSelector(getOrderCreate);
  const dispatch = useAppDispatch();

  const defaultPosition = { lat: 41.340941588053695, lng: 69.286613796809 }; // New default location
  const [latLng, setLatLng] = useState({
    lat: defaultPosition.lat,
    lng: defaultPosition.lng,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    if (driverOrderMessage && driverOrderMessage !== "Loading") {
      enqueueSnackbar(driverOrderMessage, { variant: "error" });
      dispatch(deviderClear());
    } else if(driverOrderCreate){
      enqueueSnackbar("Order is created", { variant: "success" });
    }
    setState({ ...state, right: false });
  }, [driverOrderMessage, driverOrderCreate]);

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

  const orderCreate = () => {
    props.orderSend({
      orderCreate: {
        driver: props.id,
        start_time: `${time?.format()}`,
        comment: comment,
        latitude: latLng.lat,
        longitude: latLng.lng,
      },
    });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: { xl: 500, md: 400, sm: 350, xs: 300 } }}
      p="24px"
      pt="44px"
      role="presentation"
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
        <div style={{ height: "300px", width: "100%" }}>
          <MapContainer
            center={[latLng.lat, latLng.lng]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
            <Marker position={[latLng.lat, latLng.lng]} />
            <LocationMarker setLatLng={setLatLng} />
          </MapContainer>
        </div>
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
                    defaultValue={dayjs()}
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

      {props.message && (
        <Box pb="44px">
          <Alert severity="error">{props.message}</Alert>
        </Box>
      )}

      <Divider />
      <Box py="44px" display="flex" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={toggleDrawer(anchor, false)}
          sx={{ width: "120px", height: "40px", borderRadius: "25px" }}
        >
          {t("Cancel")}
        </Button>
        <Button
          onClick={orderCreate}
          variant="contained"
          sx={{ width: "120px", height: "40px", borderRadius: "25px" }}
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

