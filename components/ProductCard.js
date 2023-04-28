import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WIDTH} from '../assets/constatnts/Dimentions';

const ProductCard = ({image, index}) => {
  console.log(image);
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          marginRight: index % 2 == 0 ? 5 : 0,
          marginLeft: index % 2 === 0 ? 0 : 5,
        },
      ]}>
      <View style={styles.ProductImage}>
        <Image
          source={image}
          resizeMode="contain"
          style={{width: WIDTH / 4.5, height: WIDTH / 3.5, marginLeft: ' auto'}}
        />
      </View>
      <View>
        <Text>gggggggggrhuyt</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffff',
    height: 175,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    textShadowColor: 'red',
    shadowOpacity: 20,
    elevation: 15,
  },
});
