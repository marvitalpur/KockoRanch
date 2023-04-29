import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';
const ProductCard = ({
  name,
  image,
  description,
  price,
  index,
  fontWeight,
  borderRadius,
  height,
  width,
  color,
  products,
}) => {
  // console.log(image);
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          borderRadius: borderRadius,
          width: width,
          height: height,
          marginRight: index % 2 == 0 ? 5 : 0,
          marginLeft: index % 2 == 0 ? 0 : 5,
        },
      ]}>
      <View style={styles.productImage}>
        {products ? (
          <Image
            source={image}
            resizeMode="contain"
            style={{
              width: WIDTH / 4.5,
              height: WIDTH / 5.5,
              marginRight: 'auto',
              backgroundColor: 'grey',
              position: 'absolute',
              top: -40,
            }}
          />
        ) : (
          <Image
            source={image}
            resizeMode="contain"
            style={{
              width: WIDTH / 4.5,
              height: WIDTH / 5.5,
              marginRight: 'auto',
              backgroundColor: 'grey',
              position: 'absolute',
              top: -20,
            }}
          />
        )}
      </View>

      <Text
        numberOfLines={1}
        style={[styles.productName, {fontWeight: fontWeight, color: color}]}>
        {name}
      </Text>
      <Text numberOfLines={1} style={styles.productDesc}>
        {description}
      </Text>
      <View style={styles.priceBox}>
        {/* <Text style={styles.priceText}>${price}/kg</Text> */}
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: 'green',
    elevation: 15,
  },
  productImage: {
    // height: '45%',
    backgroundColor: 'red',
  },
  productName: {
    width: '70%',
    // fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    backgroundColor: 'red',
    color: '#ffff',
  },
  productDesc: {
    fontSize: 12,
    // fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#AAAAAA',
    backgroundColor: 'teal',
  },
  priceBox: {
    width: '70%',
    height: 28,
    backgroundColor: 'yellow',
    marginLeft: 'auto',
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.textColor,
  },
});
