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
import Assets from '../../assets';
import ProductCardlg from '../../components/ProductCardLG';
import {FlatList} from 'react-native-gesture-handler';
import ButtonComponent from '../../components/ButtonComponent';
import Header from '../../components/Header';
import {ArrowDown} from '../../assets/svgs/iconsSvgs';

const CategoryScreen = ({navigation}) => {
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
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingHorizontal: 25, paddingTop: 25}}>
            <Text style={[styles.text, styles.text2, {fontSize: 18}]}>All</Text>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View style={styles.main}>
                      <Text style={[styles.text, styles.greentext]}>
                        {item.heading}
                      </Text>

                      <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.text, styles.text2]}>
                          {item.text1}
                        </Text>
                        <View style={{padding: 10}}>
                          <ArrowDown />
                        </View>
                      </View>
                      <Text style={[styles.text, styles.text2]}>
                        {item.text2}
                      </Text>
                      <Text style={[styles.text, styles.text2]}>
                        {item.text3}
                      </Text>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const data = [
  {
    heading: 'Plants',
    text1: 'Cactus/Succulents',
    text2: 'Flowering Plants',
    text3: 'Foliage Plants',
  },
  {
    heading: 'Fertilizer',
    text1: 'Supplement',
    text2: 'Flowering Plants',
    // text3: 'Foliage Plants',
  },
  {
    heading: 'Plant Media',
    text1: 'Plant Media',
    text2: 'Semi-Hydro',
    text3: 'Hydrophonic',
  },
  {
    heading: 'Plant Support',
    text1: 'Terllis',
    text2: 'Plant Clasps',
    // text3: 'Foliage Plants',
  },
  {
    heading: 'Floral  Supplies',
    text1: 'Florasl Tubes',
    text2: 'Floral Design Supplies',
    // text3: 'Hydrophonic',
  },
  {
    heading: 'Pest MAnagement ',
    text1: 'Botanical Pesticides',
    text2: 'Chemical Pesticides',
    // text3: 'Hydrophonic',
  },
  {
    heading: 'Botanical Health Products',
    text1: 'Vitamins',
    text2: 'Supplement',
    // text3: 'Hydrophonic',
  },
  {
    heading: 'CBD Products',
    text1: 'CBD Oil',
    text2: 'CBD Oil',
    text3: 'CBD Supplement',
  },
];
export default CategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  main: {flex: 1, paddingTop: 25},
  Borders: {
    borderWidth: 1,

    borderColor: Colors.textColor.Primary,
    marginVertical: 2,
  },
  text: {
    // fontFamily: Fonts.default,
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
  },
  text2: {
    fontSize: 10,
    paddingTop: 5,
    color: '#D4D4D4',
    lineHeight: 16,
  },
  greentext: {
    fontSize: 18,
    paddingTop: 5,
    color: '#14A384',
  },
  borderedText: {
    borderBottomWidth: 1,
    borderColor: Colors.Tertiary,
    padding: 10,
  },
  borderedContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    flexShrink: 1,
  },
});
