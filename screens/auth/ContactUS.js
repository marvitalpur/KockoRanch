import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
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
import { Setting } from '../../assets/svgs/Drawersvg';
import { Email, Facebook, Instagram, LinkedIn, Location, Phone, Twitter } from '../../assets/svgs/AllIcons';

const ContactUS = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

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
                <Text style={styles.headtext}>Contact</Text>
                <View style={{ marginTop: 10 }} />
                <Text
                  style={styles.text}>
                  Enter Your Name
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Inputs
                    placeholder="Name"
                    textColor="#AAA"
                    text={data.username}
                    setText={setData}
                    formkey="username"
                  />
                </View>
                <View style={{ marginTop: 10 }} />
                <Text
                  style={styles.text}>
                  Enter Your Email
                </Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Email"
                  textColor="#AAA"
                  Enter your subject
                />
                <View style={{ marginTop: 10 }} />
                <Text
                  style={styles.text}>
                  Enter your subject
                </Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Subject"
                  textColor="#AAA"
                  text={data.username}
                  setText={setData}
                  formkey="username"
                />
                <View style={{ marginTop: 10 }} />
                <Text
                  style={styles.text}>
                  Enter your message
                </Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Type your message.............................................................................................................................................................."
                  textColor="#AAA"
                  text={data.username}
                  setText={setData}
                  formkey="username"
                />
                <View style={{ alignSelf: 'center', marginTop: 25 }}>
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={50}
                    buttonText="Submit"
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.Primary}
                    onPress={() =>
                      navigation.replace('MyDrawer', {
                        screen: 'HomeScreen',
                      })
                    }
                    // onPress={getApiData}
                    height={WIDTH <= 375 ? 49 : 55}
                    width={WIDTH <= 375 ? 125 : 214}
                  />
                </View>
                <View style={styles.detaialbox}>
                  <View style={[styles.boxRow]}>
                    <Phone />
                    <View>
                      <Text style={styles.text2}>Contact Number</Text>
                      <Text style={[styles.text2, { fontSize: 14 }]}>(123) 456-7890</Text>
                    </View>
                  </View>
                  <View style={[styles.boxRow]}>
                    <Email />
                    <View>
                      <Text style={styles.text2}>Email</Text>
                      <Text style={[styles.text2, { fontSize: 14 }]}>info@kokoranch.com</Text>
                    </View>
                  </View>
                  <View style={[styles.boxRow]}>
                    <Location />
                    <View>
                      <Text style={styles.text2}>Email</Text>
                      <Text style={[styles.text2, { fontSize: 14 }]}>info@kokoranch.com</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginVertical: 15 }}>
                  <Text
                    style={[styles.text, { textAlign: 'center', fontSize: 16 }]}>
                    Follow Us
                  </Text>
                </View>
                <View style={styles.bottom}>
                  <Facebook />
                  <Twitter />
                  <LinkedIn />
                  <Instagram />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ContactUS;
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
  headtextView: { alignItems: 'center', justifyContent: 'center', paddingTop: 25 },
  headtext: { textAlign: 'center', fontSize: 20, color: Colors.textColor.Primary },

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
    color: Colors.textColor.Primary,
    fontWeight: '600',
    marginTop: 15,
  },
  text2: {
    fontSize: 16,
    color: Colors.textColor.Primary,
    // fontWeight: '600',
    // padding: 15,
    paddingLeft: 25
  },
  detaialbox: {
    width: '100%',
    marginTop: 15,
    backgroundColor: Colors.Secondary,
    paddingHorizontal: 15, borderRadius: 5
  },
  boxRow: {
    padding: 10,
    // backgroundColor: Colors.Tertiary,
    flexDirection: 'row',
    marginTop: 15
  },
  bottom: {
    marginVertical: 15, flexDirection: 'row',
    alignItems: 'center', justifyContent: "space-evenly"
  }
});
