import {StyleSheet, Image, Text, ImageBackground, View} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import Colors from '../../assets/constatnts/Colors';

const CoverImgCard = ({coverimage}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={Assets.BackgrounImages.cover1}>
        <Text style={[styles.Text, {fontSize: 15}]}>
          Trade Product Or Plant
        </Text>
        <Text style={styles.Text}>
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
    backgroundColor: 'green',
    marginTop: 15,
    paddingTop: 15,
  },
  bgImage: {
    flex: 1,
    backgroundColor: 'green',
  },
  text: {
    // fontFamily: Fonts.default,
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
});
