import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';
import {CustomRating} from './MyRating';

const ProductCompo = ({
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
}) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = ratingValue => {
    setRating(ratingValue);
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          borderColor: Colors.Primary,
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={styles.productImage}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: WIDTH / 4.12,
            height: WIDTH / 2.8,
            // marginRight: 'auto',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCompo;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  productImage: {
    // justifyContent: 'center',
  },
  productName: {
    // width: '55%',
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
  productDesc: {
    fontSize: 12,
    textAlign: 'justify',
    fontWeight: '300',
    color: '#AAAAAA',
  },
});
