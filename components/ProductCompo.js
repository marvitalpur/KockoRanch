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
          flexDirection:'row',
          height: height,
        },
      ]}>
        <Image
          source={image}
          resizeMode="contain"
        />
     <View style={{paddingTop:10,paddingHorizontal:10}}>
            <Text style={[ styles.productName, {
      fontSize:18}]
    }>
      IN SEARCH OF :
      </Text>
      <Text style={[  styles.text1, styles.productDesc]
    }>
    Lorem ipsum dolor sit ametconsete 
     {'\n'}
    sadipscing
     elitr.met, consete sadipscing elitr.
      </Text>
  <Text style={[styles.productName]
    }>
      TO EXCHANGEWITH:
      </Text>
      <Text style={[styles.productDesc]
    }>
    Lorem ipsum dolor sit ametconsete {'\n'}sadipscing elitr.met, consete sadipscing elitr.
      </Text>
     </View>
    </TouchableOpacity>
  );
};
export default ProductCompo;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor:  Colors.basebg,
    shadowColor: '#000',
    // paddingHorizontal:5,
    borderRadius:25,
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
    // alignSelf: 'center',
    marginTop: 5,
          color:Colors.textColor.Primary,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
  productDesc: {
    fontSize: 12,
     marginTop: 5,
   color:Colors.textColor.Primary,
    textAlign: 'justify',
    fontWeight: '300',
    color: '#AAAAAA',
  },
 
});
