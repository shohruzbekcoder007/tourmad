import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import markerIcon from "leaflet/dist/images/marker-icon.png"; // Correct icon import
import hotel from "../../media/images/hotel.png";
import restaurant from "../../media/images/restaurant.png";
import history from "../../media/images/history.png";
import place from "../../media/images/place.png";
import daily from "../../media/images/daily.png";
import { Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalParagraph } from "../../global_styles/styles";
import { host } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  value: string;
  card: string;
}

const icons: Record<string, L.Icon> = {
  hotel: new L.Icon({
    iconUrl: hotel,
    iconSize: [50, 50],
  }),
  restaurant: new L.Icon({
    iconUrl: restaurant,
    iconSize: [50, 50],
  }),
  history: new L.Icon({
    iconUrl: history,
    iconSize: [50, 50],
  }),
  place: new L.Icon({
    iconUrl: place,
    iconSize: [50, 50],
  }),
  daily: new L.Icon({
    iconUrl: daily,
    iconSize: [50, 50],
  }),
};

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const {t} = useTranslation()

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `${host}/api/v1/trip/maps-coordinates`
        ); // Replace with your API endpoint
        const data: Location[] = await response.json(); // Specify the type for data
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of the outcome
      }
    };

    fetchLocations();
  }, []);

  const navigateFunc = (forDetail: Location) => {
    if (forDetail) {
      if (forDetail.value === "place") {
        navigate(`/history-detail/${forDetail.id}`);
      } else {
        navigate(`/${forDetail.value}-detail/${forDetail.id}`);
      }
    }
  };


  if (loading) {
    return <CircularProgress />; // Show a loading spinner while fetching
  }

  return (
    <>
      <MapContainer
        center={[41.34090131239861, 69.2866030679263]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={icons[location.value] || defaultIcon} // Use defaultIcon if location.value is not in icons
          >
            <Popup>
              <Box>
                <img src={`${location.card}`} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "12px" }} alt="" />
                <GlobalParagraph
                  id="modal-description"
                  fontSize="20px"
                  color="black"
                  mediafontsize="14px"
                  fontWeight="700"
                  style={{ textAlign: "center" }}
                >
                  {location.name}
                </GlobalParagraph>
                <Button
                  onClick={() =>navigateFunc(location)}
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "10px" }}
                >
                  {t("View")}
                </Button>
              </Box>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;

