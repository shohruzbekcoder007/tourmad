import React, { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const SimpleMap : React.FC = () => {
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

  console.log(lat, lng)

  return (
    <APIProvider apiKey="AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA">
      <div style={{ height: '300px', width: '100%' }}>
        <Map
          zoom={5}
          center={lat && lng ? { lat, lng } : defaultPosition}
          mapTypeId='da9902056e735de7'
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
  );
}

export default SimpleMap;
