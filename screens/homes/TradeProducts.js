import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Colors from '../../assets/constatnts/Colors';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton} from 'react-native-paper';
import CartItems from '../../components/CartItems';
import ButtonComponent from '../../components/ButtonComponent';
import {WIDTH} from '../../assets/constatnts/Dimentions';

const TradeScreen = ({navigation}) => {
  const [check, setChecked] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      image: Assets.BackgrounImages.bg1,
      description: 'Home Equipment Push Up Bars',
      count: 2,
      checked: false,
    },
    {
      id: 2,
      image: Assets.BackgrounImages.bg1,
      description: 'Fitness Tracker Watch',
      count: 1,
      checked: true,
    },
  ]);
  const increment = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count + 1} : item,
      ),
    );
  };

  const decrement = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count - 1} : item,
      ),
    );
  };
  const toggleChecked = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, checked: !item.checked} : item,
      ),
    );
  };
  const removeItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  const [count, setCount] = useState(2);
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
          <View style={{flex: 1, paddingBottom: 25}}></View>
          <View style={{marginTop: 25, paddingHorizontal: 5}}>
            {items.map(item => (
              <>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                  }}>
                  <View style={{justifyContent: 'center', height: 86}}></View>
                  <CartItems
                    key={item.id}
                    card1
                    status={check}
                    checkpress={item.checkpress}
                    itemimage={item.image}
                    itemdescription={item.description}
                    count={item.count}
                    increment={() => increment(item.id)}
                    decrement={() => decrement(item.id)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  style={{
                    width: 47,
                    height: 47,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 100,
                    position: 'absolute',
                    top: -15,
                    left: -1,
                  }}>
                  <IconButton name="close" color={'#fff'} size={20} />
                </TouchableOpacity>
              </>
            ))}
          </View>
          <View style={{marginTop: 25}}>
            <View style={styles.line} />
            <View
              style={{borderWidth: 1, borderColor: '#fff', borderRadius: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 25,
                }}>
                <Text style={styles.text}>Summary</Text>
              </View>
              <View style={[styles.line, {width: '80%'}]} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 25,
                }}>
                <Text style={styles.text}>Total Amount:</Text>
                <Text style={styles.text}>$215.00</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 25,
                }}>
                <Text style={styles.text}>Total Amount:</Text>
                <Text style={styles.text}>$215.00</Text>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <ButtonComponent
                btnfonSize={16}
                borderRadius={50}
                buttonText="Proceed to Pay"
                buttonColor={Colors.Primary}
                textColor={Colors.textColor.TextColor1}
                onPress={() =>
                  navigation.replace('MyDrawer', {
                    screen: 'HomeScreen',
                  })
                }
                // onPress={getApiData}
                height={WIDTH <= 375 ? 40 : 55}
                width={WIDTH <= 375 ? 125 : 175}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image1: {
    flex: 1,
  },

  text: {
    // fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  boldtext: {
    textAlign: 'center',
    padding: 5,
  },
  line: {
    width: '25%',
    alignSelf: 'center',
    borderBottomColor: '#000',
    backgroundColor: '#707070 ',
    opacity: 0.15,
    borderBottomWidth: 2,
    marginVertical: 15,
  },
});
