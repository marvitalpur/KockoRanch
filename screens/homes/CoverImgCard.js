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
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} textbx source={coverimage}>
        <View
          style={{
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            opacity: opacity,
            justifyContent: 'center',
            // alignItems: 'center',
            marginTop: 20,

          }}>
          <Text
            style={[
              styles.text,
              { textAlign: textAlign, paddingTop: 10, fontSize: 20 },
            ]}>
            {textName}
          </Text>
          <Text
            style={[styles.text, { paddingVertical: 15, textAlign: textAlign }]}>
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
    marginTop: 15,


  },
  bgImage: {
    flex: 1,
    height: 250,
    padding: 10,

    // // backgroundColor: 'green',
    // paddingHorizontal: 15,
    paddingTop: 25,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    // backgroundColor: '#14A384',
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
