import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({onPress, iconname}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Icon name='' size={24} style={{}} />
        </View>
        <FAB
          style={[
            styles.btn,
            {
              height: WIDTH < 375 ? 40 : 45,
              width: WIDTH < 375 ? 40 : 45,
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            },
          ]}
          size="small"
          icon={iconname}
          color={Colors.Primary}
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fab: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.secondary,
    // shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
