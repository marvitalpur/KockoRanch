import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import Assets from '../../assets';
import {Colors} from '../../assets/constatnts/Colors';
import {LogoSvgs} from '../../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';
import Inputs from '../../components/Inputs';
import ButtonComponent from '../../components/ButtonComponent';

const SignUp = ({navigation}) => {
  // const [data, setData] = useState({
  //   username: '',
  //   password: '',
  // });
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{alignSelf: 'center', paddingBottom: 15}}>
            <LogoSvgs />
          </View>
          <View style={{paddingHorizontal: 25}}>
            <View style={styles.box}>
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
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
                      // marginTop: 15,
                    }}>
                    Sign Up as Buyer
                  </Text>
                  <View style={{marginTop: 10}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 15,
                    }}>
                    First Name
                  </Text>
                  <View style={{marginTop: 10}}>
                    <Inputs placeholder="First Name" textColor="#fff" />
                  </View>
                  <View style={{marginTop: 5}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 5,
                    }}>
                    Last Name
                  </Text>
                  <View style={{marginTop: 5}} />
                  <Inputs placeholder="Last Name" textColor="#fff" />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 15,
                    }}>
                    Enter Email
                  </Text>
                  <View style={{marginTop: 10}}>
                    <Inputs placeholder="Enter Email" textColor="#fff" />
                  </View>
                  <View style={{marginTop: 5}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 5,
                    }}>
                    Enter Phone Number
                  </Text>
                  <View style={{marginTop: 5}} />
                  <Inputs placeholder="+1222567890-998" textColor="#fff" />
                  <View style={{marginTop: 5}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 5,
                    }}>
                    Create New Password
                  </Text>
                  <View style={{marginTop: 5}} />
                  <Inputs placeholder="Enter Email" textColor="#fff" />
                  <View style={{marginTop: 5}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 5,
                    }}>
                    Create New Password
                  </Text>
                  <View style={{marginTop: 5}} />
                  <Inputs placeholder="Enter password" textColor="#fff" />
                  <View style={{marginTop: 5}} />
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: Colors.textColor.TextColor1,
                      marginTop: 5,
                    }}>
                    Confirm Password
                  </Text>
                  <View style={{marginTop: 5}} />
                  <Inputs placeholder="Enter Password" textColor="#fff" />
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
                      <Text
                        style={[
                          styles.text,
                          {
                            // textDecorationLine: 'underline',
                            color: Colors.Tertiary,
                            paddingLeft: 10,
                          },
                        ]}>
                        I agree with the
                        <Text style={{color: Colors.Primary}}>
                          Privacy Policy{' '}
                        </Text>
                        and
                        <Text style={{color: Colors.Primary}}>
                          {' '}
                          Terms and Conditions{' '}
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.touchable,
                      {alignSelf: 'center', paddingTop: 15},
                    ]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text
                      style={[
                        styles.text,
                        {
                          paddingBottom: 15,
                          // textDecorationLine: 'underline',
                          color: Colors.Tertiary,
                          textAlign: 'center',
                          fontSize: 12,
                        },
                      ]}>
                      Already have an Account?
                      <Text style={{color: Colors.Primary}}> login </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    // height: HEIGHT / 1.3,

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    paddingTop: 15,
    // backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,

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
    color: Colors.textColor.TextColor1,
  },
});
