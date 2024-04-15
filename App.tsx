/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, StatusBar} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/root';

navigator.geolocation = require('@react-native-community/geolocation');

function App(): React.JSX.Element {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'CarSharing App Camera Permission',
          message:
            'CarSharing App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SearchResults/> */}
      <RootNavigator />
    </>
  );
}

export default App;
