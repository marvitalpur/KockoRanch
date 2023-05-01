import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';

import { SearchIcon } from '../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';

const Searcbar = ({ setIsTyping, text, setText, onPressLeft, placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <View
          style={{
            flex: 1,
            // flexDirection: 'row',
            // justifyContent: 'center',
          }}>
          <TextInput
            onSubmitEditing={() => setIsTyping(true)}
            autoFocus={false}
            placeholder={placeholder}
            placeholderTextColor={Colors.textColor.textColor3}
            value={text}
            onChangeText={setText}
            returnKeyType={'Search anything you need...'}
            style={{
              backgroundColor: '#000',
              color: '#000',
              height: 40,
              color: '#fff',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={onPressLeft}
          style={{ width: 24, height: 24, padding: 5, paddingLeft: 5 }}>
          <Icon name="search" color={'#ffff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Searcbar;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    backgroundColor: '#000',
    borderRadius: 12,
    height: 45,
    borderWidth: 1,

    borderColor: '#AAA',
  },

  btn: {
    paddingHorizontal: 10,
    // height: 45,
    // width: 50,
    borderRadius: 20,
    // marginTop: 20,
    flexDirection: 'row',
    // marginLeft: 20,
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
