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

const Login = ({ navigation }) => {
  // const [data, setData] = useState({
  //   username: '',
  //   password: '',
  // });
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const getApiData = async () => {
    // console.warn(username);
    // console.warn(password);

    const url = "https://jsonplaceholder.typicode.com/posts'";
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({ Email, password })
    });
    result = await result.json();
    if (result) {
      console.log("data is heree ")
    }
  }
  useEffect(() => {
    getApiData();
  }, [])
  return (

    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ paddingTop: 25, alignSelf: 'center' }}>
          <LogoSvgs />
        </View>

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
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 22,
                    color: Colors.textColor.TextColor1,
                    marginTop: 15,
                  }}>
                  Login
                </Text>
                <View style={{ marginTop: 10 }} />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: Colors.textColor.TextColor1,
                    marginTop: 15,
                  }}>
                  Enter Email or Phone
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Inputs placeholder="Email or Phone"
                    textColor="#AAA" text={Email}
                    setText={setEmail}
                    formkey="Email" />
                </View>
                <View style={{ marginTop: 10 }} />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    // color: Colors.TextColor1.Primary,
                    color: Colors.textColor.TextColor1,
                    marginTop: 15,
                  }}>
                  Enter Password
                </Text>
                <View style={{ marginTop: 10 }} />
                <Inputs placeholder="Enter Password"
                  textColor="#AAA" text={password}
                  setText={setPassword}
                  formkey="password" />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>

                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => setRememberMe(!rememberMe)}>
                    <Icon
                      name={rememberMe ? 'check-square' : 'square'}
                      size={20}
                      color={
                        rememberMe
                          ? Colors.Tertiary
                          : Colors.textColor.TextColor1
                      }
                    />
                    <Text style={[styles.text, { marginLeft: 5 }]}>
                      Remember me
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchable}>
                    <Text
                      style={[
                        styles.text,
                        {
                          textDecorationLine: 'underline',
                          Colors: Colors.textColor.TextColor1,
                        },
                      ]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: 15,
                  }}>
                  <TouchableOpacity
                    style={[]}
                    onPress={() =>
                      navigation.navigate('')
                    }>
                    <Text
                      style={[
                        styles.text,
                        {
                          // textDecorationLine: 'underline',
                          color: Colors.Primary,
                        },
                      ]}>
                      Create Your Account?
                      <Text style={{ color: '#ffff' }}>Signup</Text>
                    </Text>
                  </TouchableOpacity>
                  <View style={{ marginTop: 15 }} />
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={50}
                    buttonText="Login"
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.TextColor1}
                    // onPress={() => navigation.replace('')}
                    onPress={getApiData}
                    height={WIDTH <= 375 ? 40 : 55}
                    width={WIDTH <= 375 ? 125 : 175}
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

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    paddingTop: 15,
    // backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,
    height: HEIGHT / 1.3,
    // alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '200',
    letterSpacing: 0.7,
    Colors: Colors.textColor.TextColor1,
  },

  text: {
    fontSize: 14,
    // color: Colors.textColor.TextColor1,
  },
});
