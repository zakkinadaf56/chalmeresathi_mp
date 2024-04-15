import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import RouteMap from '../../components/RouteMap';
import CarTypes from '../../components/CarTypes';

import {useRoute} from '@react-navigation/native';

const SearchResults = props => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default SearchResults;
