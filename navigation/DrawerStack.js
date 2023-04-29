import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from '../screens/homes/homesccreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        drawerStyle: { width: '100%' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Home" component={Home}/> */}
      <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
const CustomDrawerContent = props => {
  const [activeButton, setActiveButton] = useState(0);
  const [checked, setChecked] = useState('first');
  return (
    <ImageBackground
      // source={Assets.backgroundImages.menuBackground}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 15 }}></View>
        <View style={{ paddingHorizontal: 30, marginTop: 25 }}>
          <View style={{ width: 100, marginBottom: 25 }}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                borderRadius: 100,
              }}></TouchableOpacity>
            <Text style={{}}>Alen Matias</Text>
            <Text style={{}}>@Alenmatias</Text>
          </View>
          {/* <SidebarButton /> */}
        </View>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            // backgroundColor: 'red',
            paddingLeft: 25,
          }}
          ItemSeparatorComponent={<View style={{ marginVertical: -10 }} />}
          data={sidebarData}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <SidebarButton
              item={item}
              index={index}
              setActiveButton={setActiveButton}
              activeButton={activeButton}
              navigation={props.navigation}
            />
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
const SidebarButton = ({
  activeButton,
  setActiveButton,
  item,
  index,
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0}
      onPress={() => {
        setActiveButton(index);
        navigation.navigate(item.screen);
      }}
      style={{
        width: 150,
        height: 75,
        borderRadius: 50,
        justifyContent: 'center',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        // elevation: 12,
      }}>
      <View style={{}} />
      <View style={{}} />
      <View style={{}} />
      <Text style={{}}>{item.screen}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.secondary,
  },
  image: { flex: 1 },
});

const sidebarData = [
  {
    id: 1,
    screen: 'HomeScreen',
  },
  {
    id: 2,
    screen: 'Shope',
  },
  {
    id: 3,
    screen: 'MyOrders',
  },
  {
    id: 3,
    screen: 'Cart',
  },

  {
    id: 6,
    screen: 'Profile',
  },
  {
    id: 7,
    screen: 'Settings',
  },
];
