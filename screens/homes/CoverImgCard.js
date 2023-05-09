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

const CoverImgCard = ({
  coverimage,
  backgroundColor,
  opacity,
  textName,
  textDisc,
  borderRadius,
  textAlign,
  paddingTop,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} textbx source={coverimage}>
        <View
          style={{
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            opacity: opacity,
          }}>
          <Text
            style={[
              styles.text,
              {textAlign: textAlign, paddingTop: paddingTop, fontSize: 20},
            ]}>
            {textName}
          </Text>
          <Text
            style={[styles.text, {paddingVertical: 15, textAlign: textAlign}]}>
            {textDisc}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoverImgCard;
const styles = StyleSheet.create({
  container: {
    height: 250,

    marginTop: 15,
    paddingTop: 15,
  },
  bgImage: {
    flex: 1,
    // backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingTop: 25,

    borderRadius: 50,
    backgroundColor: '#14A384',
  },

  text: {
    // fontFamily: Fonts.default,
    paddingHorizontal: 25,
    fontSize: 12,
    color: Colors.textColor.Primary,
    letterSpacing: 0.9,
    lineHeight: 20,
  },
});
