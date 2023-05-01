import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import MyTabs from './TabNavigator';
import MyDrawer from './DrawerStack';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
    </Stack.Navigator>
  );
};
export default StackNavigator;
