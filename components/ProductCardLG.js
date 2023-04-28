import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../assets/constatnts/Colors';
import { WIDTH } from '../assets/constatnts/Dimentions';
import { TouchableRipple } from 'react-native-paper';
const ProductCardlg = ({
  CardImageBG,
  CardImageBGMain,
  BtnTouchable1,
  BtnTouchable2,
  BoxtbtnText,
  BoxtText1,
  BoxtText2,
  image1,
  image2,
  image3,
  onPress,
  color1T,
}) => {
  const navigation = useNavigation;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Primary,
        borderRadius: 20,
      }}>
      <View
        style={{
          flex: 1,
          zIndex: 1,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={CardImageBGMain}
          resizeMode="cover"
          style={{
            flex: 1,
            // flexDirection: 'row',
            // alignItems: 'flex-end',
            paddingLeft: WIDTH < 375 ? 15 : 15,
            paddingTop: WIDTH < 375 ? 15 : 25,
            paddingBottom: WIDTH < 375 ? 10 : 15,
          }}>

        </ImageBackground>
      </View>
    </View>
  );
};

export default ProductCardlg;

const styles = StyleSheet.create({
  btn: {
    width: WIDTH < 375 ? 80 : 100,
    height: WIDTH < 375 ? 30 : 40,
    borderRadius: 20,
    marginTop: 'auto',
    borderColor: Colors.tertiary,
    // backgroundColor: 'red'
  },
});
