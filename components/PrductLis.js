import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TurboModuleRegistry,
} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import ProductCardSm from './ProductCardSm';
import Assets from '../assets';
import Colors from '../assets/constatnts/Colors';
import {Title} from 'react-native-paper';

const ProductList = ({index, image1, Title,text1,text2,text3}) => {
  const data = [
    {image1: image1, Title: Title},
    {image1: image1, Title: Title},
    {image1: image1, Title: Title},
    {image1: image1, Title: Title},
  ];
  return (
    <>
      <View style={{}}>
        {index ? (
          <View style={{flex: 1}}>
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View style={{padding: 15}}>
                      <ProductCard
                        card1
                        Ratingsline
                        image={item.image1}
                        text1={'$14.80'}
                        text2={'$17.80'}
                        backgroundColor={Colors.basebg}
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
        ) : (
          <View>
            <ProductCardSm
              OnpresCard={() => {
                navigation.navigate('AssismentScreen');
              }}
              text1={text1}
              text2={text2}
              text3={text3}
              img={Assets.BackgrounImages.bg1}
              text="Fitness Assesment"
            />
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View style={{padding: 15}}>
                      <ProductCard
                        card1
                        Ratingsline
                        image={image1}
                        text1={'$14.80'}
                        text2={'$17.80'}
                        backgroundColor={Colors.basebg}
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
        )}
      </View>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
