import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerStack';
import TabNavigator from './TabNavigator';
import Login from '../screens/auth/Login';
import Splash from '../screens/auth/Splash';
import HomeScreen from '../screens/homes/homesccreen';
import SignUp from '../screens/auth/SignUp';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
