import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { WIDTH } from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';
import { CustomRating } from './MyRating';
import { Title } from 'react-native-paper';
import Assets from '../assets';
const ProductCard = ({
  navigation,
  name,
  image,
  description,
  ratings,
  price,
  index,
  fontWeight,
  borderRadius,
  height,
  Ratingsline,
  backgroundColor,
  width,
  color,
  products,
  text2,
  text1,
  fontSize,
  card1,
  card2, arrowicon,
  Title
}) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = ratingValue => {
    setRating(ratingValue);
  };
  // console.log(image);
  return (
    <>
      {card1 && (
        <TouchableOpacity onPress={() => props.navigation.navigate('AddtoCartScreen')}
          style={[
            styles.card,
            {
              borderWidth: products ? null : 2,
              borderColor: Colors.Primary,
              borderRadius: borderRadius,
              width: width,
              height: height,
              backgroundColor: backgroundColor,
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
                  width: WIDTH / 2.9,
                  height: WIDTH / 2.9,
                  marginRight: 'auto',
                  // backgroundColor: 'grey',
                  position: 'absolute',
                  top: -20,
                  left: -5,
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
                  // backgroundColor: 'grey',
                  position: 'absolute',
                  alignItems: 'center',
                  top: -30,
                  right: -8,
                }}
              />
            )}
          </View>

          <Text
            numberOfLines={1}
            style={[
              styles.productName,
              { fontWeight: fontWeight, color: color, fontSize: fontSize },
            ]}>
            {name}
          </Text>
          <Text numberOfLines={3} style={styles.productDesc}>
            {description}
          </Text>

          <View style={styles.priceBox}>
            <Text style={styles.priceText}>{text1}</Text>
            <Text
              style={[
                styles.priceText,
                { textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
              ]}>
              {text2}
            </Text>
          </View>

          {Ratingsline && (
            <>
              <View style={styles.priceBox}>
                <View style={styles.priceBox}>
                  <View style={styles.container}>
                    <CustomRating
                      maxRating={7}
                      onRatingSelected={handleRatingSelect}
                    />
                  </View>
                </View>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.priceText,
                    {
                      color: Colors.Primary,
                    },
                  ]}>
                  In Stock
                </Text>
              </View>
            </>
          )}
        </TouchableOpacity>
      )}
      {card2 && (
        <TouchableOpacity
          style={[
            styles.card,
            {
              borderColor: Colors.Primary,
              borderRadius: borderRadius,
              width: width,
              height: height,
              backgroundColor: backgroundColor,
              justifyContent: 'center',
              alignItems: 'center'
            },
          ]}>
          <View style={{}}>
            <Image
              source={image}
              resizeMode="contain"
              style={{
                alignItems: 'center',
              }}
            />
          </View>
          <Text
            numberOfLines={1}
            style={[
              {
                color: Colors.textColor.Primary,
                fontSize: 12
              }
            ]}>
            {Title}
          </Text>
          <Image source={arrowicon}
            resizeMode='contain' style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      )}
    </>
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
    height: '45%',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  productName: {
    width: '55%',
    alignSelf: 'center',
    marginTop: 15,
    // fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    // backgroundColor: 'red',
    color: '#ffff',
  },
  productDesc: {
    fontSize: 12,
    // fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#AAAAAA',
    // backgroundColor: 'teal',
  },
  priceBox: {
    // width: '70%',
    // height: 28,
    // backgroundColor: 'yellow',
    // marginLeft: 'auto',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
  },
});
