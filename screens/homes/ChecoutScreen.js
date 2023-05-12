import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Assets from '../../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../assets/constatnts/Colors'
import { Setting } from '../../assets/svgs/Drawersvg'

import Inputs from '../../components/Inputs'


const ChecoutScreen = (props) => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Assets.BackgrounImages.bg1}
                resizeMode="cover"
                style={styles.image}>
                <View style={styles.headtextView}>
                    <Text style={styles.headtext}>Checkout</Text>
                    <View style={styles.content}>
                        <View style={styles.maiview}>
                            <Text style={styles.text}>Summary</Text>
                            <View style={[styles.row, { borderBottomWidth: 1 }]}>
                                <Text style={[styles.text, { fontSize: 12 }]}>Price (3 items)</Text>
                                <Text style={[styles.text, { fontSize: 12 }]}>$66</Text>
                            </View>
                            <View style={[styles.row, { borderBottomWidth: 1 }]}>
                                <Text style={[styles.text, { fontSize: 12 }]}>Delivery Charge</Text>
                                <Text style={[styles.text, { fontSize: 12 }]}>$3.52</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.text, { fontSize: 12 }]}>Total Price</Text>
                                <Text style={[styles.text, { fontSize: 12 }]}>$69.52</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 15 }}>
                    <Text style={[styles.headtext]}>Shipping Details</Text>
                    <View style={[styles.maiview,
                    { ackgroundColor: 'rgba(0.4,3,0,0.25)', opacity: 0.25 }]}>
                        <View
                            style={{

                            }}>
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
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default ChecoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Secondary
    },
    image: {
        flex: 1,
    },
    headtextView: { alignItems: 'center', justifyContent: 'center', paddingTop: 25 },
    headtext: { justifyContent: 'center', fontSize: 20, color: Colors.textColor.Primary },

    content: {
        marginTop: 25,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maiview: {

        paddingTop: 25,
        paddingHorizontal: 15,
        width: '100%',
        height: 247,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.Tertiary,
        justifyContent: 'center',
        // backgroundColor: 'green',
        // flexDirection: 'row',
        padding: 10, marginTop: 15

    },
    row:
    {
        marginTop: 15,
        justifyContent: 'space-between',
        flexDirection: 'row', paddingVertical: 15,
        // borderBottomWidth: 1,
        borderBottomColor: Colors.textColor.Primary
    },

    text: {
        color: Colors.textColor.Primary,
        // textAlign: 'center'
    },
})


