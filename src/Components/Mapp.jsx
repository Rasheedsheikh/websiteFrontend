import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
const Mapp = () => {
  const position = [11.1026, 76.9879];

  const markerIcon = L.icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/basic-ui-pack-flat-s94-1/64/Basic_UI_Icon_Pack_-_Flat_map_pointer-512.png',
    iconSize: [20, 20],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  return (
    <MapContainer center={position} zoom={12} style={{ height: '350px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={position} icon={markerIcon}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default Mapp;