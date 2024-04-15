import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import PlaceRow from './PlaceRow';
import React, {useState, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.815297, lng: 2.4597668}},
};

const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState({initialState: null});
  const [destinationPlace, setDestinationPlace] = useState({
    initialState: null,
  });

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResult', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={true}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCmeW-6ITXcfvR6wn2c6sJjE4GOmDBBfaE',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCmeW-6ITXcfvR6wn2c6sJjE4GOmDBBfaE',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/* Circle (origin) */}
        <View style={styles.circle} />

        {/* Line between origin and desti */}
        <View style={styles.line} />

        {/* Square(desti) */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
