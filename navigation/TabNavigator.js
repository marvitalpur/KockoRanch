import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import homesccreen from '../screens/homes/homesccreen';
// let hasNotch = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homes} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
