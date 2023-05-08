import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import ProductCardSm from '../../components/ProductCardSm';
import { HEIGHT, WIDTH } from '../../assets/constatnts/Dimentions';
import Assets from '../../assets';
import ProductCardlg from '../../components/ProductCardLG';
import { FlatList } from 'react-native-gesture-handler';
import ButtonComponent from '../../components/ButtonComponent';
import Header from '../../components/Header';
import ProductCircle from '../../components/PRoductsCircle';
import CoverImgCard from './CoverImgCard';
import ProductCompo from '../../components/ProductCompo';
import Searchbar from '../../components/Searchbar';

const HomeScreen = ({ navigation }) => {
  const [bgColor, SetBgColor] = useState(0);
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
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.header}>
            <Header iconname={'bars'} onPress={() => navigation.openDrawer()} />
            <View style={{ width: '80%' }}>
              <Searchbar placeholder={'Search anything you need..'} />
            </View>
          </View>
          <View style={styles.coverimage}>
            <ProductCardlg
              image1
              BtnTouchable1
              CardImageBGMain={Assets.products.product1}
              BoxtText1="Kids Hope"
              BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
              BoxtbtnText={'Go Now'}
            />
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <ProductCardSm
              OnpresCard={() => {
                navigation.navigate('AssismentScreen');
              }}
              text1={'Featured '}
              text2={'Products'}
              text3={'See All'}
              img={Assets.BackgrounImages.bg1}
              text="Fitness Assesment"
            />
            <FlatList
              data={Data}
              // numColumns={2}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ marginTop: 15 }}
              renderItem={({ item, index }) => {
                <View style={{ marginTop: 15 }} />;
                return (
                  <>
                    <View style={{}}>
                      <ProductCard
                        card1
                        Ratingsline
                        image={Assets.products.oilbotel1}
                        text1={'$14.80'}
                        text2={'$17.80'}
                        backgroundColor={'#1A1A1A'}
                        description="Koko Ranch Cannabis Product Name Here"
                        products={true}
                        width={154}
                        height={220}
                        borderRadius={23}
                        fontWeight="bold"
                      />
                    </View>
                  </>
                );
              }}
            />
          </View>
          <View style={[styles.detailProduct, {}]}>
            <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
              <View style={styles.productimg}>
                <Image
                  source={Assets.products.product2}
                  resizeMode="contain"
                  style={styles.img}
                />
              </View>
              <View style={{ marginTop: 15 }}>
                <Text style={[styles.text, { fontSize: 12, color: '#14A384' }]}>
                  INFORMATION
                </Text>
                <Text
                  style={[
                    styles.text,
                    { fontSize: 20, paddingTop: 5, color: '#ffff' },
                  ]}>
                  About KoKo Ranch
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 10,
                      paddingTop: 15,
                      color: '#D4D4D4',
                      lineHeight: 16,
                    },
                  ]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  nonumy eirmod tempor.
                </Text>
                <View style={{ marginTop: 15 }} />
                <ButtonComponent
                  btnfonSize={10}
                  borderRadius={12}
                  buttonText="read more"
                  buttonColor={Colors.Primary}
                  textColor={Colors.textColor.Primary}
                  onPress={() => navigation.navigate('Drawer')}
                  height={WIDTH <= 375 ? 40 : 35}
                  width={WIDTH <= 375 ? 125 : 116}
                />
              </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('AssismentScreen');
                }}
                text1={'All '}
                text2={' Products'}
                text3={'See All'}
                img={Assets.BackgrounImages.bg1}
                text="Fitness Assesment"
              />
            </View>
            <View style={{ marginTop: 25 }}>
              <FlatList
                data={data2}
                numColumns={3}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ marginTop: 5, padding: 10 }}>
                        <ProductCircle
                          onPress={() => (index === 0 ? ' pink' : 'green')}
                          outericon={index ? 'chevron-down' : 'chevron-left'}
                          outertext={item.outertext}
                          name={item.text}
                          // backgroundColor={
                          //   isColor === 0 ? '#CAEAE3' : '#14A384'
                          // }
                          image={item.image}
                          color2={index % 2 == 0 ? '#ecf0f1' : '#fff'}
                          width={95}
                          height={95}
                          icon={item.icon}
                          fontSize={10}
                          borderRadius={100}
                          color="#000"
                          fontWeight="bold"
                        />
                      </View>
                    </>
                  );
                }}
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
                text2={'Plants'}
                text3={'See All'}
                img={Assets.BackgrounImages.bg1}
                text="Fitness Assesment"
              />
            </View>
            <View style={{}}>
              <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 25 }}>
                        <ProductCard
                          card1
                          Ratingsline
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
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 25 }}>
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
              <View
                style={{

                }}>
                <CoverImgCard
                  textAlign={'left'}
                  textName={'Trade Products Or Plants'}
                  textDisc={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut l'
                  }
                  coverimage={Assets.BackgrounImages.cover1}
                />
                <View style={{ position: 'absolute', bottom: -30, height: WIDTH / 2 }}>
                  <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    renderItem={({ item, index }) => {
                      <View style={{ paddingHorizontal: 15 }} />;
                      return (
                        <>
                          <View style={{ paddingHorizontal: 20 }}>
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
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 25 }}>
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
                  paddingTop: 25

                }}>
                <CoverImgCard
                  borderRadius={20}
                  backgroundColor={Colors.Secondary}
                  opacity={0.75}
                  textAlign={'center'}
                  textName={'Arts & Clothing'}
                  textDisc={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
                  }
                  coverimage={Assets.BackgrounImages.cover2}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const data = [
  { image: Assets.services.services1, Title: 'Landscaping' },
  { image: Assets.services.services2, Title: 'Lawn Mowing' },
  { image: Assets.services.services4, Title: 'Tree Services' },
  { image: Assets.services.services3, Title: 'Tractor Repair' },
  { image: Assets.services.services5, Title: 'Pest Control' },
  { Title: 'All Services' },
];
const data2 = [
  { image: Assets.bottel.bottel4, outertext: 'Plants', outericon: 'home' },
  { image: Assets.bottel.bottel2, outertext: 'Plant Nutrients' },
  { image: Assets.bottel.bottel3, outertext: 'Plant Media', outericon: 'home' },
  { image: Assets.bottel.bottel4, outertext: 'Plant Container' },
  {
    image: Assets.bottel.bottel5,
    outertext: 'Floral Supplies',
  },
  {
    text: 'View All{ \n} Categories',
    icon: 'Arrow',
  },
];
const data3 = [
  { image: Assets.DeliveryScrevice.DeliveryS1, Title: '100% Organic' },
  { image: Assets.DeliveryScrevice.DeliveryS2, Title: 'Free Shipping' },
  { image: Assets.DeliveryScrevice.DeliveryS3, Title: 'Certified Product ' },
  { image: Assets.DeliveryScrevice.DeliveryS4, Title: 'Bonus System' },
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
  coverimage: {
    height: 188,
    marginTop: 25,

    paddingHorizontal: 15,
    marginTop: 15,
  },

  text: {
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
  productimg: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
