import {
  Image,
  ImageBackground,
  ImageBase,
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
import { FAB } from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import Searcbar from '../../components/Searchbar';


const HomeScreen = ({ navigation }) => {
  const [bgColor, SetBgColor] = useState(false)
  const [Data, setData] = useState([])


  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getApiData();

  }, [])
  const data = [
    { image: Assets.services.services1 },
    { image: Assets.services.services2 },
    { image: Assets.services.services3 },
    { image: Assets.services.services4 },
    { image: Assets.services.services5 }, {}];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>

        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ marginVertical: 25, flexDirection: 'row' }}>
              <FAB />
              <Searcbar />
            </View>
            <View style={{ height: HEIGHT / 3.6 }}>
              <ProductCardlg
                image1
                BtnTouchable1
                // CardImageBG={Assets.cards.cardImage7}
                CardImageBGMain={Assets.products.product1}
                BoxtText1="Kids Hope"
                BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
                BoxtbtnText={'Go Now'}
              />
            </View>
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
          </View>
          <FlatList
            data={Data}
            // numColumns={2}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ padding: 15, }}>
                    <ProductCard
                      image={Assets.products.product3}
                      text1={item.id}
                      text2={item.userId}
                      backgroundColor={'#1A1A1A'}
                      description={item.body}
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

          <View style={[styles.detailProduct, {}]}>
            <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
              <View
                style={{
                  // paddingTop: 15,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 150,
                  height: 150,
                }}>
                <Image
                  source={Assets.products.product2}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'pink',
                  }}
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
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor.
                </Text>
                <View style={{ marginTop: 15 }} />
                <ButtonComponent
                  btnfonSize={10}
                  borderRadius={12}
                  buttonText="read more"
                  buttonColor={Colors.Primary}
                  textColor={Colors.textColor.TextColor1}
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
            <View style={{ paddingHorizontal: 15 }}>

              <FlatList
                data={data}
                numColumns={3}
                // horizontal={true}
                // showsHorizontalScrollIndicator={true}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 15, marginTop: 10 }}>
                        <ProductCard
                          name={'product'}
                          backgroundColor={'#CAEAE3'}
                          image={Assets.products.product2}
                          width={95}
                          height={95}
                          borderRadius={100}
                          color="#f2f"
                          fontWeight="bold"
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
            <View style={{
              flex: 1,
              //  backgroundColor: 'pink',
              paddingHorizontal: 15
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
                // horizontal={true}
                // showsHorizontalScrollIndicator={true}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 25 }}>
                        <ProductCard
                          image={Assets.products.product3}
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
            <View style={{
              flex: 1,
              // backgroundColor: 'pink',
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
                // horizontal={true}
                // showsHorizontalScrollIndicator={true}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View style={{ padding: 25 }}>
                        <ProductCard
                          image={item.image}
                          backgroundColor={'#1A1A1A'}
                          description="Koko Ranch Cannabis Product Name Here"
                          products={true}
                          // image={Assets.products.product2}
                          width={150}
                          height={150}
                          borderRadius={20}
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  text: {
    // fontFamily: Fonts.default,
    // fontWeight: '600',
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
  detailProduct: {
    // backgroundColor: 'pink',
    // paddingHorizontal: 25,
  },
});
