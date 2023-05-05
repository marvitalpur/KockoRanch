import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Assets from '../assets';
import {FAB} from 'react-native-paper';

const CartItems = ({index, decrement, count, increment}) => {
  return (
    <View
      style={[
        styles.card,
        {
          marginRight: index % 2 == 0 ? 5 : 2,
          marginRight: index % 2 == 0 ? 5 : 2,
        },
      ]}>
      <View>
        <View style={styles.productimg}>
          <Image
            source={Assets.products.oilbotel1}
            style={{
              width: WIDTH / 6.5,
              height: WIDTH / 5.8,
              marginRight: 'auto',
              backgroundColor: 'pink',
            }}
          />
          {/* <View style={{width: WIDTH / 2.6, marginTop: 15, paddingLeft: 5}}>
            <Text numberOfLines={1} style={[styles.producttext]}>
              ytyu
            </Text>
          </View> */}
        </View>
      </View>
      <View>
        <View
          style={[
            styles.headerContainer,
            {
              //   backgroundColor: 'green',
              padding: 15,
              flexDirection: 'row',
              paddingBottom: 12,
            },
          ]}>
          <FAB
            style={[
              styles.fab,
              {
                backgroundColor: 'red',
                opacity: 0.5,
                backgroundColor: Colors.Primary,
                height: WIDTH < 375 ? 27 : 27,
                width: WIDTH < 375 ? 22 : 27,

                color: '#FFFF',
              },
            ]}
            size="small"
            icon="plus"
            color="white"
            onPress={increment}
          />
          <FAB
            style={[
              styles.fab,
              {
                backgroundColor: 'red',
                opacity: 0.5,
                backgroundColor: Colors.Primary,
                height: WIDTH < 375 ? 27 : 27,
                width: WIDTH < 375 ? 27 : 27,
                color: '#FFFF',
              },
            ]}
            size="small"
            icon="plus"
            color="white"
            onPress={increment}
          />
          <FAB
            style={[
              styles.fab,
              {
                backgroundColor: 'red',
                opacity: 0.5,
                backgroundColor: Colors.Primary,
                height: WIDTH < 375 ? 27 : 27,
                width: WIDTH < 375 ? 22 : 22,

                color: '#FFFF',
              },
            ]}
            size="small"
            icon="plus"
            color="white"
            onPress={increment}
          />
        </View>
      </View>
      <Text>CartItems</Text>
    </View>
  );
};
export default CartItems;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 81,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  fab: {
    height: 48,
    width: 51,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productimg: {
    height: '55%',
    flexDirection: 'row',
    productimg: {
      marginTop: 19,
    },
  },
});
