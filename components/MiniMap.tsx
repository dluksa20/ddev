// components/MiniMap.js
"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MdRoundedCorner } from "react-icons/md";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  overflow: "hidden" 
};

const center = {
  lat: 51.5074, // example: London
  lng: -0.1278,
};
const options = {
  disableDefaultUI: true, // removes all controls
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

export default function MiniMap() {
  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["marker"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}   options={options}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}