import {View, Text, Image} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assests/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'Basic') {
      return require('../../assests/images/top-UberX.png');
    }
    if (type === 'Premium') {
      return require('../../assests/images/top-Comfort.png');
    }
    if (type === 'Midrange') {
      return require('../../assests/images/top-UberXL.png');
    }
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      // showsUserLocation={true}
      style={{width: '100%', height: '100%'}}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.022,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{rotate: `${car.heading}deg`}],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
