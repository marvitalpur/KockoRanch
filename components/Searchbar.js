import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../assets/constatnts/Colors';
import { TextInput } from 'react-native-paper';
import { SearchIcon } from '../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';


const Searcbar = ({ setIsTyping, text, setText, onPressLeft, placeholder }) => {
    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <TextInput
                        onSubmitEditing={() => setIsTyping(true)}
                        autoFocus={false}
                        placeholder={placeholder}
                        placeholderTextColor={'#ffff'}
                        value={text}
                        onChangeText={setText}
                        returnKeyType={'Search anything you need...'}
                        style={{
                            flex: 1,
                            height: 44,
                            color: 'black',
                            backgroundColor: '#000'
                        }}
                    />
                </View>
                <TouchableOpacity onPress={onPressLeft} style={{ width: 24, height: 24 }}>
                    <Icon name='search' color={'#ffff'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Searcbar;

const styles = StyleSheet.create({
    container: {
        width: '85%', backgroundColor: '#000', borderRadius: 12, height: 50, borderWidth: 1,

        borderColor: '#AAA'
    },

    btn: {
        paddingHorizontal: 15,
        // height: 50,
        // width: 50,
        borderRadius: 20,
        // marginTop: 20,
        flexDirection: 'row',
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
