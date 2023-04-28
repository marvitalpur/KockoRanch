import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCardlg from '../../components/ProductCardLG';
import ProductCardSm from '../../components/ProductCardSm';
import Assets from '../../assets';
import Colors from '../../assets/constatnts/Colors';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import {FAB, Searchbar} from 'react-native-paper';

const Homesccreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <ImageBackground
            source={Assets.BackgrounImages.bg1}
            resizeMode="cover"
            style={styles.image}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                paddingHorizontal: 15,
              }}>
              <FAB />
              <View style={{}}>
                {/* <Searchbar inputStyle={{backgroundColor: 'pink'}} /> */}
              </View>
            </View>
            <View
              style={{
                height: HEIGHT / 4.0,
                flexDirection: 'row',
                marginTop: 25,
                paddingHorizontal: 15,
              }}>
              <ProductCardlg
                image1
                // BtnTouchable1
                // CardImageBG={Assets.products.product1}
                CardImageBGMain={Assets.products.product1}
              />
            </View>
            <View style={{paddingHorizontal: 15}}>
              <ProductCardSm />
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Homesccreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    paddingTop: 15,
    backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,
    height: HEIGHT / 1.8,
    // alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '200',
    letterSpacing: 0.7,
    Colors: Colors.textColor.TextColor1,
  },

  text: {
    fontSize: 14,
    color: Colors.textColor.TextColor1,
  },
});
