import {View} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStack from './navigation/RootStack';
import Login from './screens/auth/Login';
import Homesccreen from './screens/homes/homesccreen';
import {MenuProvider} from 'react-native-popup-menu';
import MyStatusBar from './components/MyStatusbar';
import PlantsScreen from './screens/homes/plantsScreen';
import TradeScreen from './screens/homes/TradeProducts';

const App = () => {
  return (
    // <PlantsScreen />
    // <Homesccreen />
    <TradeScreen />
    // <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    //   <MenuProvider>
    //     <MyStatusBar
    //       backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#000'}
    //       barStyle={Platform.OS === 'ios' ? 'dark' : 'light-content'}
    //     />
    //     <RootStack />
    //   </MenuProvider>
    // </SafeAreaProvider>
  );
};

export default App;
