import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const SafetyMeasure = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have a safe journey</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default SafetyMeasure;
