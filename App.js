import { View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './navigation/RootStack';
import Login from './screens/auth/Login';
import Homesccreen from './screens/homes/homesccreen';

const App = () => {
  return (
    // <Homesccreen />
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'green' }}>
          <RootStack />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
