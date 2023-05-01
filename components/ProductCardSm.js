import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import Assets from '../assets';
import { WIDTH } from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';

const ProductCardSm = ({ onPress, text1, text2, text3 }) => {
  return (
    <View style={{}}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.hradertext, {}]}>
            {text1}
          </Text>
          <Text style={[styles.hradertext, { fontSize: 16, borderBottomWidth: 2, borderColor: Colors.Primary }]}>
            {text2}
          </Text>
        </View>
        <TouchableRipple onPress={onPress}>
          <Text style={[styles.hradertext, { fontSize: 14, borderBottomWidth: 1, borderColor: '#ffff' }]}>{text3}</Text>
        </TouchableRipple>
      </View>
    </View >
  );
};
export default ProductCardSm;
const styles = StyleSheet.create({
  hradertext: {
    // paddingTop: 25,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  header: {
    // backgroundColor: 'pink',
    // paddingHorizontal: 25,
    marginTop: WIDTH < 375 ? 25 : 30,
    // marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
