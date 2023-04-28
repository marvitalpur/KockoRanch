import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import ProductCardSm from '../../components/ProductCardSm';
import { HEIGHT } from '../../assets/constatnts/Dimentions';
import Assets from '../../assets';
import ProductCardlg from '../../components/ProductCardLG';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const data = [
    {},
    {},
    {},
    {},
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={Assets.BackgrounImages.bg1}
          resizeMode="cover"
          style={styles.image}>
          <View style={{ flex: 1, paddingHorizontal: 20, }}>
            <View
              style={{
                height: HEIGHT / 4.5,
                flexDirection: 'row',
                backgroundColor: 'yellow'
              }}>
              <ProductCardlg
                image1
                BtnTouchable1
                // CardImageBG={Assets.cards.cardImage7}
                // CardImageBGMain={Assets.backgroundImages.cardBackground3}
                BoxtText1="Kids Hope"
                BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
                BoxtbtnText={'Go Now'}
              />
            </View>
            <View
              style={{
                // marginTop: 15,
                height: HEIGHT / 5.5,
                flexDirection: 'row',
                backgroundColor: 'red'
                // marginTop: 5,
              }}>
              <View style={{ flex: 1 }}>
                <ProductCardSm
                  OnpresCard={() => { navigation.navigate('AssismentScreen'); }}
                  img={Assets.BackgrounImages.bg1}
                  text="Fitness Assesment"
                />
              </View>
            </View>
          </View>
          <View style={{
            // marginVertical: 15, paddingTop: 15,
            alignSelf: 'center',
          }}>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <>
                    <View style={{ padding: 15 }}>
                      <ProductCard color="#f2f" fontWeight="bold" />
                    </View>
                  </>
                )
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  text: {
    // fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
});
