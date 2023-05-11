import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import HomeScreen from '../screens/homes/homesccreen';
import Colors from '../assets/constatnts/Colors';
import { Image } from 'react-native';
import Assets from '../assets';
import CategoryScreen from '../screens/homes/CategoryScreen';
import CartScreen from '../screens/homes/CartScreen';
import AccountScreen from '../screens/homes/AccountScreen';
import {
  Account,
  Cart,
  Categories,
  GreenCart,
  GreenHome,
  HomeSVg,
  Homesvg,
  WCart,
} from '../assets/svgs/homeSvg';

// let hasNotch = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const MyTabs = props => {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
        unmountOnBlur: true,
        lazy: true,
        tabBarActiveTintColor: '#14A384',
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,
          paddingBottom: 10,
          backgroundColor: '#000',
          borderRadius: 20,
          // borderWidth: 1,
          paddingHorizontal: 5,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (focused ? <GreenHome /> : <Homesvg />),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarIcon: ({ focused }) =>
            focused ? <Categories /> : <Categories />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (focused ? <GreenCart /> : <WCart />),
        }}
      />
      <Tab.Screen
        name=" AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (focused ? <Cart /> : <Cart />),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MyTabs;
