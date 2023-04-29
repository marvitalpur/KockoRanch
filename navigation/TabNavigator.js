import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import HomeScreen from '../screens/homes/homesccreen';
import Colors from '../assets/constatnts/Colors';
import { Image } from 'react-native';
import Assets from '../assets';

// let hasNotch = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const TabNavigator = (props) => {
  return (
    <Tab.Navigator initialRouteName={props.first}
      screenOptions={{
        tabBarActiveTintColor: Colors.Primary
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'hjkhgfyh',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ) : (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'hjkhgfyh',

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ) : (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'hjkhgfyh',

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ) : (
              <Image source={Assets.Logos.HomeI1} style={styles.activeImg} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
