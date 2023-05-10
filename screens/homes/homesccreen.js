import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import ProductCardSm from '../../components/ProductCardSm';
import Assets from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import ProductCompo from '../../components/ProductCompo';
import Searchbar from '../../components/Searchbar';
import CirleCard from '../../components/CircleCard/CirleCard';
import ContentCompo from '../../components/ContentCompo';
import ProductList from '../../components/PrductLis';
import CoverImgCard from '../../components/CoverImgCard';
import ProductCircle from '../../components/CircleCard/PRoductsCircle';
import CircleCard from '../../components/CircleCard/CirleCard';

const HomeScreen = ({navigation}) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image1}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.header}>
            <Header iconname={'bars'} onPress={() => navigation.openDrawer()} />
            <View style={{width: '80%'}}>
              <Searchbar placeholder={'Search anything you need..'} />
            </View>
          </View>
          <View style={[styles.detailProduct, {}]}>
            <ContentCompo />
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('AssismentScreen');
                }}
                text1={'All  Pro'}
                text2={'ducts'}
                text3={'See All'}
                img={Assets.BackgrounImages.bg1}
                text="Fitness Assesment"
              />
              {/* <CirleCard /> */}
              <ProductCircle />
              <ProductList
                image1={Assets.products.oilbotel1}
                text1={'pla'}
                text2={'nt'}
                text3={'See All'}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 15,
              }}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('AssismentScreen');
                }}
                text1={''}
                text2={'Services'}
                text3={''}
                img={Assets.BackgrounImages.bg1}
                text="Fitness Assesment"
              />
            </View>
            <View style={{}}>
              <FlatList
                data={data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View style={{padding: 25}}>
                        <ProductCard
                          card2
                          arrowicon={item.image}
                          image={item.image}
                          backgroundColor={'#1A1A1A'}
                          Title={item.Title}
                          width={150}
                          height={150}
                          borderRadius={20}
                        />
                      </View>
                    </>
                  );
                }}
              />
              <View style={{paddingBottom: 30}}>
                <CoverImgCard
                  index
                  textName={'Trade Products Or Plants'}
                  textDisc={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut l'
                  }
                  coverimage={Assets.BackgrounImages.cover1}
                />
                <View style={{position: 'absolute', top: 180}}>
                  <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    renderItem={({item, index}) => {
                      <View style={{paddingHorizontal: 15}} />;
                      return (
                        <>
                          <View style={{paddingHorizontal: 20}}>
                            <ProductCompo
                              image={Assets.products.productItem}
                              name={item.name}
                              description={item.description}
                              backgroundColor={'#1A1A1A'}
                              width={'0%'}
                              height={148}
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
            </View>
            <View
              style={{
                marginTop: 25,
                flex: 1,
                paddingHorizontal: 15,
              }}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('AssismentScreen');
                }}
                text1={'Delivery '}
                text2={'Services'}
                text3={''}
                img={Assets.BackgrounImages.bg1}
                text="Fitness Assesment"
              />
            </View>
            <View style={{}}>
              <FlatList
                data={data3}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View style={{padding: 25}}>
                        <ProductCard
                          card2
                          image={item.image}
                          backgroundColor={'#1A1A1A'}
                          Title={item.Title}
                          width={150}
                          height={150}
                          borderRadius={20}
                        />
                      </View>
                    </>
                  );
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <CoverImgCard
                  index
                  borderRadius={20}
                  backgroundColor={Colors.Secondary}
                  opacity={0.75}
                  paddingTop={30}
                  textAlign={'center'}
                  textName={'Arts & Clothing'}
                  textDisc={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
                  }
                  coverimage={Assets.BackgrounImages.cover2}
                />
              </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <ProductList
                image1={Assets.products.Tshirt}
                text1={'T-'}
                text2={'Shirt'}
                text3={'See All'}
              />
              <ProductList
                image1={Assets.products.product4}
                text1={'Plant '}
                text2={'Inspired Jewelry'}
                text3={'See All'}
              />
              <ProductList
                image1={Assets.products.Leaf}
                text1={'Plant '}
                text2={'Inspired Art'}
                text3={'See All'}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <CoverImgCard
              paddingTop={30}
              coverimage={Assets.BackgrounImages.cover3}
            />
            <CircleCard />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const data = [
  {image: Assets.services.services1, Title: 'Landscaping'},
  {image: Assets.services.services2, Title: 'Lawn Mowing'},
  {image: Assets.services.services4, Title: 'Tree Services'},
  {image: Assets.services.services3, Title: 'Tractor Repair'},
  {image: Assets.services.services5, Title: 'Pest Control'},
  {Title: 'All Services'},
];
const data3 = [
  {image: Assets.DeliveryScrevice.DeliveryS1, Title: '100% Organic'},
  {image: Assets.DeliveryScrevice.DeliveryS2, Title: 'Free Shipping'},
  {image: Assets.DeliveryScrevice.DeliveryS3, Title: 'Certified Product '},
  {image: Assets.DeliveryScrevice.DeliveryS4, Title: 'Bonus System'},
];
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image1: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 25,
    position: 'relative',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
});
