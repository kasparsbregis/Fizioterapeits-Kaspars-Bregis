"use client"; // For Next.js App Router (if using client-side rendering)

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

// Component Configuration
const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 57.158210092282346,
  lng: 24.851390315319694,
};

const markerOptions = {
  // label: {
  //   text: "Breģis Kaspars - fizioterapeita prakse",
  //   color: "black",
  //   fontSize: "16px",
  // },
};

const GoogleMapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY || "";
  if (!apiKey) {
    console.error("Google Maps API Key is missing");
    return null; // Optionally, you can show a message or fallback UI here.
  }
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {/* Marker for the physiotherapy cabinet */}
        <Marker position={center} options={markerOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
