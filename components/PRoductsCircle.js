import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';
import {PotIcon} from '../assets/svgs/homeSvg';
const ProductCircle = ({
  name,
  image,
  description,
  price,
  index,
  fontWeight,
  borderRadius,
  height,
  backgroundColor,
  width,
  color,
  products,
  onPress,
  text2,
  text1,
  icon,
  fontSize,
  Image1,
  outericon,
  outertext,
  color2,
}) => {
  // console.log(image);
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
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
              shadowColor: Colors.Tertiary,
              shadowOffset: {
                width: 7,
                height: 27,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            }}
          />
        </View>
        <View>
          <Text
            numberOfLines={2}
            style={[
              styles.productName,
              {
                fontWeight: fontWeight,
                paddingTop: 10,
                color: color,
                fontSize: fontSize,
              },
            ]}>
            {name}
          </Text>
          <Icon name={icon} size={22} style={{alignSelf: 'center'}} />
        </View>
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
        <Text
          numberOfLines={2}
          style={[
            styles.productName,
            {fontWeight: fontWeight, color: color2, fontSize: 12},
          ]}>
          {outertext}
        </Text>
        <Icon
          name={outericon}
          size={16}
          style={{alignSelf: 'center', color: color2, paddingLeft: 2}}
        />
      </View>
    </>
  );
};
export default ProductCircle;
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
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  productName: {
    // paddingTop: 15,
    textAlign: 'center',
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
