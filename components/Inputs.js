import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from '../assets/constatnts/Colors';

const Inputs = ({ text, setText, placeholder, iconname, textColor }) => {
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={text}
        onChangeText={text => onChangeHandler(text, 'input1')} // Update here
        right={<TextInput.Icon icon={iconname} iconColor="#00B4D8" />}
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        selectionColor="#000"
        placeholderTextColor={textColor}
        theme={{ roundness: 10 }}
        style={{
          borderWidth: 1,
          borderColor: Colors.Tertiary,
          // fontFamily: Fonts.default,
          fontWeight: '400',
          height: 50,
          //   opacity: text.length < 1 ? 0.5 : 1,
          fontSize: 14,
          borderRadius: 10,
          backgroundColor: Colors.Secondary,
          shadowColor: Colors.Secondary,
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: 15,
        }}
      />

    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({});
