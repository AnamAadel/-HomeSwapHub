import "leaflet/dist/leaflet.css";
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
  const location = [[23.8041, 90.4152], [22.3752, 91.8349], [22.7133, 90.3496], [91.8600, 91.8600] ]

  function LocationMap() {
  const randomNum = Math.floor(Math.random() * location.length -1);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={location[randomNum]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution="© Google Maps"
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <Marker position={location[randomNum]}></Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;
