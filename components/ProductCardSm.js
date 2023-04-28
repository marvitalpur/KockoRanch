import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import Assets from '../assets';

const ProductCardSm = () => {
  const data = [
    {
      image: Assets.products.product2,
    },
  ];
  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.hradertext, {}]}>Featured Product</Text>
        <TouchableRipple>
          <View>
            <Text style={[styles.hradertext, {fontSize: 14}]}>See All</Text>
          </View>
        </TouchableRipple>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          padding: 15,
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          <TouchableOpacity style={{backgroundColor: 'grey'}}>
            <ProductCard image={item.image} />
          </TouchableOpacity>;
        }}
      />
    </View>
  );
};
export default ProductCardSm;
const styles = StyleSheet.create({
  hradertext: {
    paddingTop: 25,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 18,
  },
  header: {
    // paddingHorizontal: 25,
    // marginTop: WIDTH < 375 ? 25 : 50,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
