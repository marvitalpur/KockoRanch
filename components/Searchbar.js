import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import Colors from '../assets/constatnts/Colors';

const Searchbar = () => {
  const handleSearch = () => {
    // Handle search logic here
    console.log('Search button pressed');
  };

  return (
    <View style={{ flexDirection: 'row',
     alignItems: 'center', borderWidth: 1,
     borderRadius: 8, padding: 5 ,
     height:45,borderWidth:1,borderColor:Colors.Tertiary}}>
      <TextInput
        style={{ flex: 1 , color:Colors.Tertiary}}
        placeholder="Search"
        placeholderTextColor={Colors.Tertiary}
        // Add any other props you need for the TextInput component
      />
      <TouchableOpacity onPress={handleSearch} style={{ padding: 5 }}>
        <Icon name="search" size={20} color={Colors.Tertiary}/>
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
