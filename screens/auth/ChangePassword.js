import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Assets from '../../assets';
import { Colors } from '../../assets/constatnts/Colors';
import { LogoSvgs } from '../../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../../components/ButtonComponent';
import Inputs from '../../components/Inputs';
import { HEIGHT, WIDTH } from '../../assets/constatnts/Dimentions';

const ChangePassword = ({ navigation }) => {
    // const [data, setData] = useState({
    //   username: '',
    //   password: '',
    // });
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Assets.BackgrounImages.bg1}
                resizeMode="cover"
                style={styles.image}>

                <View style={{ paddingHorizontal: 25 }}>
                    <View style={styles.box}>
                        <KeyboardAwareScrollView
                            keyboardShouldPersistTaps="handled"
                            enableOnAndroid={true}
                            enableAutomaticScroll={true}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}>
                            <View
                                style={{
                                    paddingHorizontal: 25,
                                }}>
                                <Text style={styles.logintext}>Change Password</Text>
                                <View style={{ marginTop: 25, paddingTop: 25 }} />
                                <Text style={styles.inputstext}>Current Password </Text>
                                <View style={{ marginTop: 10 }}>
                                    <Inputs
                                        placeholder="Enter Current Password"
                                        textColor="#AAA"
                                        text={password}
                                        setText={setPassword}
                                        formkey="password"
                                    />
                                </View>
                                <View style={{ marginTop: 10 }} />
                                <Text style={styles.inputstext}>New Password</Text>
                                <View style={{ marginTop: 10 }} />
                                <Inputs
                                    placeholder="Enter New Password"
                                    textColor="#AAA"
                                    text={password}
                                    setText={setPassword}
                                    formkey="password"
                                />
                                <View style={{ marginTop: 10 }} />
                                <Text style={styles.inputstext}>Confirm Password</Text>
                                <View style={{ marginTop: 10 }} />
                                <Inputs
                                    placeholder="Confirm Password"
                                    textColor="#AAA"
                                    text={password}
                                    setText={setPassword}
                                    formkey="password"
                                />

                                <View style={styles.bottomtext}>
                                    <View style={{ marginTop: 15 }} />
                                    <ButtonComponent
                                        btnfonSize={16}
                                        borderRadius={50}
                                        buttonText="Update"
                                        buttonColor={Colors.Primary}
                                        textColor={Colors.textColor.Primary}
                                        onPress={() =>
                                            navigation.replace('MyDrawer', {
                                                screen: 'HomeScreen',
                                            })
                                        }
                                        // onPress={getApiData}
                                        height={WIDTH <= 375 ? 49 : 55}
                                        width={WIDTH <= 375 ? 125 : 239}
                                    />
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default ChangePassword;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Secondary,
    },
    image: {
        flex: 1,
    },
    logintext: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 22,
        color: Colors.textColor.Primary,
        marginTop: 15,
    },
    box: {
        paddingTop: 15,
        opacity: 0.7,
        height: HEIGHT / 1.3,
        marginTop: 25,
        borderRadius: 5,
    },
    IconMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    touchable: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '200',
        letterSpacing: 0.7,
        Colors: Colors.textColor.TextColor1,
    },
    bottomtext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    inputstext: {
        fontWeight: '600',
        fontSize: 14,
        // color: Colors.TextColor1.Primary,
        color: Colors.textColor.Primary,
        marginTop: 15,
    },
    text: {
        fontSize: 14,
        // color: Colors.textColor.TextColor1,
    },
});
