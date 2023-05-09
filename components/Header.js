import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import Colors from '../assets/constatnts/Colors';
import {ArrowDown} from '../assets/svgs/iconsSvgs';

const Header = ({logo, navigation, backIcon}) => {
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={() =>
          backIcon ? navigation.closeDrawer() : navigation.openDrawer()
        }
        style={styles.btn}>
        {backIcon ? <BackSvg /> : <ArrowDown />}
      </TouchableRipple>
      {/* <Text>Header</Text> */}
      {/* {logo && <ArrowDown />}
      {backIcon ? (
        <View style={{width: 50, height: 50}} />
      ) : (
        <TouchableRipple style={styles.btn}>
          <ArrowDown />
        </TouchableRipple>
      )} */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    // backgroundColor: 'red',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textColor.Primary,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
