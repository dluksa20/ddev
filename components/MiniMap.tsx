// components/MiniMap.js
"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

if (!apiKey) {
  throw new Error("Missing Google Maps API key");
}

const containerStyle = {
  width: "100%",
  height: "200px", // mini map size
};

const center = {
  lat: 51.5074, // example: London
  lng: -0.1278,
};

export default function MiniMap() {
  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["marker"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}