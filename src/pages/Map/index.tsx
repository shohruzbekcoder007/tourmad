

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
import { Modal, Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalParagraph } from "../../global_styles/styles";

interface Location {
  id: number; 
  name: string;
  latitude: number;
  longitude: number;
  value: string;
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [forDetail, setForDetail] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("https://api.tourmad.uz/api/v1/trip/maps-coordinates"); // Replace with your API endpoint
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

  const openModal = (location: Location) => {
    setSelectedLocation(location);
    setModalOpen(true);
    setForDetail(location);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLocation(null);
  };

  const navigateFunc = () => {
    if (forDetail) {
      if(forDetail.value==='place') {
        navigate(`/history-detail/${forDetail.id}`);
      } else {
        navigate(`/${forDetail.value}-detail/${forDetail.id}`);
      }
    }
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
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
            eventHandlers={{
              click: () => openModal(location), // Open modal on marker click
            }}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {/* <GlobalParagraph fontSize='18px' color='black' mediafontsize='14px' fontWeight='400'>
            Location Details
          </GlobalParagraph> */}
          <GlobalParagraph id="modal-description" fontSize='20px' color='black' mediafontsize='14px' fontWeight='700' style={{textAlign: "center"}}>
            {selectedLocation ? selectedLocation.name : ""}
          </GlobalParagraph>
          <Button onClick={navigateFunc} variant="contained" fullWidth sx={{marginTop: "30px"}}>
            View
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Map;
