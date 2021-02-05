import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: address.lat,
    lng: address.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBsff-vDy8BcYh_PzvIsmthr7cA8_UZPXM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
