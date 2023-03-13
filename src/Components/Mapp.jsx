import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';





function Mapp() {




  return (
    <div className="App">
      <MapContainer  center={[39.52, -98.35]} zoom={6}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer>
    </div>
  );
}

export default Mapp;
