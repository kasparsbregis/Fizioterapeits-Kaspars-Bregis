"use client"; // For Next.js App Router (if using client-side rendering)

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Component Configuration
const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 57.158226752872295,
  lng: 24.851429620198065,
};

const markerOptions = {
  // label: {
  //   text: "Breģis Kaspars - fizioterapeita prakse",
  //   color: "black",
  //   fontSize: "16px",
  // },
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {/* Marker for the physiotherapy cabinet */}
        <Marker position={center} options={markerOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;