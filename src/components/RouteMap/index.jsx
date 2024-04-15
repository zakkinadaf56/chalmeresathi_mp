import {View, Text} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.details.geometry.lat,
    longitude: origin.details.geometry.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  const GOOGLE_MAPS_APIKEY = 'AIzaSyCmeW-6ITXcfvR6wn2c6sJjE4GOmDBBfaE'; //direction api
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title="Origin" />
      <Marker coordinate={destination} title="Destination" />
    </MapView>
  );
};

export default RouteMap;
