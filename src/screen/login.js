import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet, SafeAreaView, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [text, setOnChangeText] = useState("");
    const [text1, setOnChangeText1] = useState("");


    const addData = async () => {
        try {
            await AsyncStorage.setItem('Email', JSON.stringify(text));
            setOnChangeText('');
            await AsyncStorage.setItem('Passwerd', JSON.stringify(text1));
            setOnChangeText1('');
            if (text === 'Email' && text1 === 'Passwerd') {
                navigation.navigate('HomeTag')
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    }
    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('Email');
            const data = JSON.parse(email);
            const passwerd = await AsyncStorage.getItem('Passwerd');
            const data1 = JSON.parse(passwerd);
            if (email !== null && passwerd !== null) {
                navigation.navigate('HomeTag')
            } else {
            }
            console.log(data);
            console.log(data1);

        } catch (error) {
            console.log(error);
        }
    }
    getData();
    return (

        <ScrollView>

            <View>
                <View style={{

                    height: 200,
                }}>
                    <View style={{ backgroundColor: "darkgreen" }} >

                        <View >
                            <Text style={styles.Text}>Login</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Body}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setOnChangeText}
                        value={text}
                        placeholder="Email"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={setOnChangeText1}
                        value={text1}
                        placeholder="Passwerd"


                    />
                </View>
                <View style={styles.Button}>
                    <Button
                        title="Login"
                        // onPress={() => navigation.navigate('Home')}
                        onPress={addData}
                    /></View>
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({

    Button: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,
        marginLeft: 100,
        marginRight: 100,

    },
    Text: {

        color: "cornsilk",
        fontSize: 25,
        margin: 20
    },
    Body: {
        flex: 1,
        margin: 20,

    },
    input: {
        flex: 1,
        borderWidth: 2,
        margin: 5,
        fontSize: 20

    }
})

export default Login;
