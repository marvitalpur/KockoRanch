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
import ButtonComponent from '../../components/ButtonComponent';
import Searcbar from '../../components/Searchbar';
import Header from '../../components/Header';
import ProductCircle from '../../components/PRoductsCircle';

const CategoryScreen = ({ navigation }) => {
  const [bgColor, SetBgColor] = useState(0);
  const [Data, setData] = useState([]);
  const [isColor, setIsColor] = useState();
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
    { image: Assets.products.oilbotel1 },
    { image: Assets.services.services2 },
    { image: Assets.services.services3 },
    { image: Assets.services.services4 },
    { image: Assets.services.services5 },
    {},
  ];
  const data2 = [
    { image: Assets.bottel.bottel4, outertext: 'Plants', outericon: 'home' },
    {
      image: Assets.bottel.bottel2,
      outertext: 'Plant Nutrients',
      outericon: 'home',
    },
    { image: Assets.bottel.bottel3, outertext: 'Plant Media', outericon: 'home' },
    {
      image: Assets.bottel.bottel4,
      outertext: 'Plant Container',
      outericon: 'home',
    },
    {
      image: Assets.bottel.bottel5,
      outertext: 'Floral Supplies',
      outericon: 'home',
    },
    {
      text: 'View All{ \n} Categories',
      icon: 'Arrow',
    },
  ];
  const handlepress = index => {
    setIsColor(index);
  };
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
              <View style={{ paddingHorizontal: 5 }}>
                <Header
                  iconname={'bars'}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            </View>
          </View>

          <View style={[styles.detailProduct, { paddingHorizontal: 15 }]}>
            <View style={{ marginTop: 15, paddingHorizontal: 15 }}>
              <View style={{}}>
                <Text style={[styles.text, {
                  fontSize: 18,
                  color: '#fff'
                }]}>
                  All
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 18, paddingTop: 5,
                      color: '#14A384',

                    },
                  ]}>
                  About KoKo Ranch
                </Text>
                <View style={{ borderWidth: 1, borderColor: '#ffff', marginVertical: 2 }} />
                <View style={{ borderWidth: 1, borderColor: '#ffff' }} />
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

                  nonumy eirmod tempor.
                </Text>

              </View>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const HeaderComponent = ({ navigation }) => {
  return (
    <View style={{}}>
      <TouchableRipple
        onPress={() =>
          navigation.navigate('CheckoutOrder', {
            headtext: '',
          })
        }
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          elevation: 15,
        }}>
        <BackSvg />
      </TouchableRipple>
    </View>
  );
};
export default CategoryScreen;
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


