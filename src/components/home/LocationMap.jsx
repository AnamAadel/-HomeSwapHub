import "leaflet/dist/leaflet.css";
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function LocationMap() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[23.8041, 90.4152]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution="© Google Maps"
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <Marker position={[23.8041, 90.4152]}></Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;
