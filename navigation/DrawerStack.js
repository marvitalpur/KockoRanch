import { StyleSheet, Text, Image, View, Settings } from 'react-native';
import React, { useState } from 'react';
import MyTabs from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Assets from '../assets';
import { LogoSvgs, SearchIcon } from '../assets/svgs/iconsSvgs';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import Colors from '../assets/constatnts/Colors';
import { WIDTH } from '../assets/constatnts/Dimentions';
import { Home, LogOut, Phone, Setting, Tractor } from '../assets/svgs/Drawersvg';
import {
  Cart,
  Categories,
  GreenCart,
  Homesvg,
  WCart,
  WCategories,
} from '../assets/svgs/homeSvg';
import AccountScreen from '../screens/homes/AccountScreen';
import HomeScreen from '../screens/homes/homesccreen';
import CategoryScreen from '../screens/homes/CategoryScreen';
import SettingScreen from '../screens/homes/SettingScreen';
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        drawerStyle: { width: WIDTH / 1.5 },
      }}>


      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
const CustomDrawerContent = props => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <View style={{}}>
          <View style={{ paddingBottom: 25 }}>
            <LogoSvgs />
          </View>
          <Text
            style={{
              // paddingLeft: 25,
              textAlign: 'center',
              // fontFamily: Fonts.default,

              fontWeight: '600',
              fontSize: 16,
              color: Colors.textColor.TextColor1,
              marginTop: 10,
            }}>
            Menu
          </Text>
        </View>
        {/* <SidebarButton /> */}
      </View>
      <View style={{ paddingTop: 15, alignSelf: 'center', paddingLeft: 25 }}>
        <View
          style={{
            width: 200,
            // backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#707070',
            height: 56,
            borderRadius: 10,
            // justifyContent: 'center',
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            // elevation: 12,
          }}>
          <Image source={Assets.Logos.profile} />
          <Text
            style={{
              textAlign: 'center',
              // fontFamily: Fonts.default,
              fontWeight: '600',
              fontSize: 12,
              color: Colors.textColor.TextColor1,
              letterSpacing: 0.9,
              // marginTop: 10,
              paddingLeft: 15,
            }}>
            Hi , Alex Martina
          </Text>
        </View>
      </View>
      <View style={{ paddingLeft: 25, marginTop: 15 }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            // backgroundColor: 'red',
            paddingLeft: 15,
          }}
          numColumns={2}
          ItemSeparatorComponent={<View style={{}} />}
          data={sidebarData}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <View style={{ margin: 10 }}>
              <SidebarButton
                item={item}
                index={index}
                Icon1={item.Icon1}
                setActiveButton={setActiveButton}
                activeButton={activeButton}
                navigation={props.navigation}
              />
            </View>
          )}
        />
      </View>
      <View style={{ paddingTop: 15, alignSelf: 'center', paddingLeft: 30 }}>
        <View
          style={{
            width: 200,
            // backgroundColor: 'green',
            borderWidth: 1,
            borderColor: '#707070',
            height: 56,
            borderRadius: 10,

            alignItems: 'center',
            flexDirection: 'row',
            shadowColor: '#000',
            paddingHorizontal: 25,
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            // elevation: 12,
          }}>
          <View style={{ paddingRight: 25 }}>
            <LogOut />
          </View>
          <Text
            style={{
              textAlign: 'center',
              // fontFamily: Fonts.default,
              fontWeight: '600',
              fontSize: 12,
              color: Colors.textColor.TextColor1,
              letterSpacing: 0.9,
              // marginTop: 10,
            }}>
            Lougout
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const data = [{}, {}, {}];
const SidebarButton = ({
  activeButton,
  setActiveButton,
  item,
  index,
  navigation,
  Icon1,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0}
      onPress={() => {
        setActiveButton(index);
        navigation.navigate(item.screen);
      }}
      style={{
        width: 92,
        // backgroundColor: 'green',
        borderWidth: 1,
        borderColor: '#707070',
        height: 91,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        // elevation: 12,
      }}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          backgroundColor:
            activeButton === index ? Colors.secondary : 'transparent',
          width: 85,
          height: 75,
          borderRadius: 75,
        }}
      />
      <View style={{ padding: 10 }}>{Icon1}</View>
      <View
        style={{
          position: 'absolute',
          left: -180,
          backgroundColor:
            activeButton === index ? Colors.secondary : 'transparent',
          width: 300,
          height: 45,
          borderRadius: 15,
          transform: [{ rotate: '6deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: -180,
          backgroundColor: activeButton === index ? Colors : 'transparent',
          width: 300,
          height: 45,
          borderRadius: 15,
          transform: [{ rotate: '-6deg' }],
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          // fontFamily: Fonts.default,
          fontWeight: '600',
          fontSize: 12,
          color: Colors.textColor.TextColor1,
          letterSpacing: 0.9,
          // marginTop: 10,
        }}>
        {item.screen}
      </Text>
    </TouchableOpacity>
  );
};
const sidebarData = [
  {
    id: 1,
    screen: 'Home',
    Icon1: <Homesvg />,
  },
  {
    id: 2,
    screen: 'Categories',
    Icon: <Categories />,
  },
  {
    id: 3,
    screen: 'Settings',
    Icon1: <Setting />,
  },
  {
    id: 4,
    screen: 'Agricultural Services',
    Icon1: <Tractor />,
  },
  {
    id: 5,
    screen: 'Contact us',
    Icon1: <Phone />,
  },
  { id: 6, screen: 'Cart', Icon1: <WCart /> },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: { flex: 1 },
});
