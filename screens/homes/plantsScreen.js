import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import Assets from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../../components/Header';

import CoverImgCard from './CoverImgCard';

const PlantsScreen = ({navigation}) => {
  const [Data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  const data = [
    {image: Assets.products.oilbotel1},
    {image: Assets.services.services2},
    {image: Assets.services.services3},
    {image: Assets.services.services4},
    {image: Assets.services.services5},
    {},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <View style={{marginVertical: 25, flexDirection: 'row'}}>
              <View style={{paddingHorizontal: 5}}>
                {/* <Header
                  iconname={'bars'}
                  onPress={() => navigation.openDrawer()}
                /> */}
              </View>
            </View>
          </View>
          <View style={[styles.detailProduct, {}]}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 15,
              }}></View>
            <View style={{}}>
              <FlatList
                data={data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View style={{padding: 25}}>
                        <ProductCard
                          image={Assets.products.oilbotel1}
                          text1={'$14.80'}
                          text2={'$17.80'}
                          backgroundColor={'#1A1A1A'}
                          description="Koko Ranch Cannabis Product Name Here"
                          products={true}
                          // image={Assets.products.product2}
                          width={154}
                          height={220}
                          borderRadius={23}
                          color="#f2f"
                          fontWeight="bold"
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default PlantsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  text: {
    // fontFamily: Fonts.default,
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
});
