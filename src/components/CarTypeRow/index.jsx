import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from "react-native-vector-icons/Ionicons"

const CarTypeRow = (props) => {
    const {type}=props;
    const getImage=()=>{
        if (type.type==='Basic'){
            return require('../../assests/images/Basic.jpeg')
        }
        if (type.type==='Premium'){
            return require('../../assests/images/Premium.jpeg')
        }
        if (type.type==='Midrange'){
            return require('../../assests/images/Midrange.jpeg')
        }
    }
  return (
    <View style={styles.container}>
        {/* Image */}
        <Image style={styles.image} source={getImage()}/>
        <View style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type}{'  '}
                <Ionicons name={'person'} size={16}/>
                3
            </Text>

            <Text style={styles.time}>
                8:03pm drop off
            </Text>
        </View>
        
        <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
            <Text style={styles.price}>
                Rs.{type.price}
            </Text>

        </View>
    </View>
  )
}

export default CarTypeRow