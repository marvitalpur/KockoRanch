
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,

} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../assets';
import Colors from '../../assets/constatnts/Colors';
import { Categories, GreenCart } from '../../assets/svgs/homeSvg';

const CircleCard = props => {
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      img1: Assets.bottel.bottel1,
      text: 'Meet Wolf Women',
      st: 0,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Meet Bear Man',
      st: 1,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Meet Jaguar Being',
      st: 2,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Meet Bird Women',
      st: 3,
    },
    {
      img1: Assets.bottel.bottel5,
      text: 'Meet Bird Women',
      st: 4,
    },
    {

      text: 'Meet Bird Women',
      text2: 'Meet Bird women',
      st: 4,
      name: "areow"
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <FlatList
            data={Data}
            numColumns={3}
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity
                      onPress={() =>
                        index === true ? '' : setdata1(index)
                      }
                      style={{}}>
                      <>
                        {data1 === index ? (
                          <LinearGradient
                            colors={[Colors.Secondary2, Colors.Tertiary2]}
                            style={[styles.circleview, {
                              // width: 100,
                              // height: 100,
                              // borderRadius: 100,
                              // justifyContent: 'center',
                              // alignItems: 'center',
                              // alignSelf: 'center',
                              // backgroundColor:
                              //   data1 === index ? '#CD258D' : '',
                            }]}>
                          </LinearGradient>
                        ) : (
                          <View style={styles.circleview}>
                          </View>
                        )}
                      </>
                    </TouchableOpacity>
                    <View>
                      <View style={styles.imgview}>
                        <View style={{ backgroundColor: 'green' }}>
                          <Image source={item.img1} style={styles.img} resizeMode='contain' />
                        </View>
                        <View style={styles.textview}>
                          <Text numberOfLines={3} style={{ textAlign: 'center' }}>{item.text2}
                          </Text>
                          <Icon name={item.name} style={{ textAlign: 'center' }} />
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={[styles.txt1, { color: data1 === index ? Colors.Primary : '#ffff' }]} >
                        {item.text}
                      </Text>
                      <Icon name={data1 === index ? <GreenCart /> : <Categories />} style={{ textAlign: 'center', color: data1 === index ? Colors.Primary : '#ffff' }} />
                    </View>
                  </View >
                </>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView >
    </>
  );
};
export default CircleCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#ffff',
    borderRadius: 100,
  },
  circleview: {
    borderWidth: 3, width: 100,
    borderColor: Colors.Primary,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.Primary2,
  },

  img: { width: 80, height: 80, position: 'absolute', top: -120, left: -38, alignSelf: 'center' },
  txt: {
    textAlign: 'left',
    fontSize: 25,
    color: '#1C5C2E',
    // fontWeight: '600',
    marginVertical: 20,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  txt1: {
    textAlign: 'center',
    margin: 5,
    fontSize: 12,
    color: Colors.textColor.Primary,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  imgview: { justifyContent: 'center', alignItems: 'center', alignItems: 'center' },
  textview: {
    position: 'absolute', top: -75, left: 20, textAlign: 'center',
  }
});
