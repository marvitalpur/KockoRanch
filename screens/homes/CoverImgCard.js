import {
  StyleSheet,
  Image,
  FlatList,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import Colors from '../../assets/constatnts/Colors';

const CoverImgCard = ({coverimage}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={Assets.BackgrounImages.cover1}>
        <Text style={[styles.text, {fontSize: 20}]}>
          Trade Product Or Plant
        </Text>
        <Text style={[styles.text, {paddingVertical: 15}]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt
          ut ld diam nonumy eirmod tempor invidunt ut l
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CoverImgCard;
const styles = StyleSheet.create({
  container: {
    height: 250,

    // marginTop: 15,
    // paddingTop: 15,
  },
  bgImage: {
    flex: 1,
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  text: {
    // fontFamily: Fonts.default,
    fontSize: 12,
    color: Colors.textColor.TextColor1,
    letterSpacing: 0.9,
    lineHeight: 20,
  },
});
