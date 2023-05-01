import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import MyTabs from './TabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import Assets from '../assets';
import {LogoSvgs} from '../assets/svgs/iconsSvgs';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
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
        drawerStyle: {width: '100%'},
      }}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
const CustomDrawerContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 30}}>
          <View style={{paddingTop: 25, alignSelf: 'center'}}>
            <LogoSvgs />
          </View>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
              style={{
                width: 40,
                height: 38,
                borderWidth: 1,
                borderRadius: 10,
                // borderColor: Colors.primary,
              }}>
              <Avatar.Image
                size={38}
                style={{
                  width: '100%',
                  height: '100%',
                  // borderRadius: 10,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={Assets.Logos.profile}
              />
            </TouchableOpacity>
            <Text style={{paddingTop: 10, paddingLeft: 20}}>
              Hi! Alex Martina
            </Text>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <>
                    <View>
                      <Text>ghdfhn</Text>
                    </View>
                  </>
                );
              }}
            />
          </View>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
              style={{
                width: 40,
                height: 38,
                borderWidth: 1,
                borderRadius: 10,
                // borderColor: Colors.primary,
              }}>
              <Avatar.Image
                size={38}
                style={{
                  width: '100%',
                  height: '100%',
                  // borderRadius: 10,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={Assets.Logos.profile}
              />
            </TouchableOpacity>
            <Text style={{paddingTop: 10, paddingLeft: 20}}>
              Hi! Alex Martina
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const data = [{}, {}, {}];

const styles = StyleSheet.create({
  container: {backgroundColor: 'yellow', flex: 1},
});
