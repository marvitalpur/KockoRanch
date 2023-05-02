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
import { Avatar } from 'react-native-paper';
import Header from '../../components/Header';

const AccountScreen = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    phone: '',
    Email: ''
  });
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
          <Header
            iconname={'bars'}
            onPress={() => navigation.openDrawer()}
          />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Avatar.Image
            size={90}
            style={{ alignSelf: 'center' }}
            source={Assets.Logos.avatarPlaceholderr}
          />
          <View style={styles.plusicon}>
            <Icon name="#000" color={'#fff'} />
          </View>

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
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: Colors.textColor.TextColor1,

                  }}>
                  First Name
                </Text>
                <View style={{ marginTop: 5 }}>
                  <Inputs
                    placeholder="Jon"
                    textColor="#AAA"
                    text={data.username}
                    setText={setData}
                    formkey="username"
                  />
                </View>
                <View style={{ marginTop: 5 }} />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    // color: Colors.TextColor1.Primary,
                    color: Colors.textColor.TextColor1,
                    marginTop: 5,
                  }}>
                  Last Name
                </Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Doe"
                  textColor="#AAA"
                  text={data.username}
                  setText={setData}
                  formkey="username"
                />
                <View style={{ marginTop: 5 }} />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    // color: Colors.TextColor1.Primary,
                    color: Colors.textColor.TextColor1,
                    marginTop: 5,
                  }}>
                  Email
                </Text>
                <View style={{ marginTop: 5 }} />
                <Inputs
                  placeholder="JONEDOE@gmail.com"
                  textColor="#AAA"
                  text={data.Email}
                  setText={setData}
                  formkey="email"
                />

                <View style={{ marginTop: 5 }} />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    // color: Colors.TextColor1.Primary,
                    color: Colors.textColor.TextColor1,
                    marginTop: 5,
                  }}>
                  Phone Number
                </Text>
                <View style={{ marginTop: 5 }} />
                <Inputs
                  placeholder="+1234567890"
                  textColor="#AAA"
                  text={password}
                  setText={setPassword}
                  formkey="password"
                />

                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: 5,
                  }}>

                  <View style={{ marginTop: 5 }} />
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={50}
                    buttonText="Update"
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.TextColor1}
                    onPress={() =>
                      navigation.replace('MyDrawer', {
                        screen: 'HomeScreen',
                      })
                    }
                    // onPress={getApiData}
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

export default AccountScreen;
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
    // paddingTop: 15,
    // backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,
    height: HEIGHT / 1.3,
    // alignItems: 'center',
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



