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

const ProductList = ({index}) => {
  return (
    <>
      <View style={{}}>
        {index ? (
          <View
            style={{
              flex: 1,
              //   paddingHorizontal: 15,
              //   backgroundColor: 'green',
            }}>
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
                        image={Assets.products.oilbotel1}
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
              text1={''}
              text2={'Plants'}
              text3={'See All'}
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
                        image={Assets.products.oilbotel1}
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
const data = [
  {image: Assets.services.services1, Title: 'Landscaping'},
  {image: Assets.services.services2, Title: 'Lawn Mowing'},
  {image: Assets.services.services4, Title: 'Tree Services'},
  {image: Assets.services.services3, Title: 'Tractor Repair'},
  {image: Assets.services.services5, Title: 'Pest Control'},
  {Title: 'All Services'},
];
export default ProductList;

const styles = StyleSheet.create({});
