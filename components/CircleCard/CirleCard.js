import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProductCircle from './PRoductsCircle';
import Assets from '../../assets';

const CirleCard = () => {
  const data2 = [
    {image: Assets.bottel.bottel4, outertext: 'Plants', outericon: 'home'},
    {image: Assets.bottel.bottel2, outertext: 'Plant Nutrients'},
    {
      image: Assets.bottel.bottel3,
      outertext: 'Plant Media',
      outericon: 'home',
    },
    {image: Assets.bottel.bottel4, outertext: 'Plant Container'},
    {
      image: Assets.bottel.bottel5,
      outertext: 'Floral Supplies',
    },
    {
      text: 'View All{ \n} Categories',
      icon: 'Arrow',
    },
  ];
  return (
    <View style={{marginTop: 25}}>
      <FlatList
        data={data2}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <>
              <View style={{marginTop: 5, padding: 10}}>
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
  );
};

export default CirleCard;
const styles = StyleSheet.create({});
