import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import markerIcon from 'leaflet/dist/images/marker-icon.png'; // Correct icon import

// Define the Location interface
interface Location {
  id: number; // Adjust this type based on your API response
  name: string;
  latitude: number;
  longitude: number;
}

const Map = () => {
  // Specify the state type as an array of Location
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://api.example.com/locations'); // Replace with your API endpoint
        const data: Location[] = await response.json(); // Specify the type for data
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map(location => (
        <Marker key={location.id} position={[location.latitude, location.longitude]}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
