import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

let center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMapsComponent = ({ latitude, longitude }) => {
  center.lat = latitude;
  center.lng = longitude;

  console.log(center);
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components like markers, info windows, etc */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapsComponent);
