import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import List from "../../Componets/List";

const Home = ({ navigation }) => {

    const logout = async () => {
        await AsyncStorage.removeItem('Email')
        navigation.navigate('Login')
    }
    const [selectedTeb, setSelectedTeb] = useState(0)

    return (
        <>

            <View style={styles.navigator} >

                <TouchableOpacity style={{

                    backgroundColor: selectedTeb === 0 ? 'darkgrey' : 'darkgreen',
                    borderRadius: 30
                }} onPress={() => setSelectedTeb(0)}>
                    <Text style={[styles.Home, { color: selectedTeb === 0 ? 'black' : '#fff', }]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: selectedTeb === 1 ? 'darkgrey' : 'darkgreen', borderRadius: 30 }}
                    onPress={() => setSelectedTeb(1)}>
                    <Text style={[styles.Cart, { color: selectedTeb === 1 ? 'black' : '#fff', }]}>Cart</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}>
                    <Text style={{
                        flex: 1,
                        color: "cornsilk",
                        fontSize: 20,
                        margin: 10,
                        marginLeft: 10,
                    }}>#</Text></TouchableOpacity>

                <TouchableOpacity
                    onPress={logout}
                >
                    <Text style={{
                        flex: 1,
                        color: "cornsilk",
                        fontSize: 20,
                        margin: 10,
                    }}>logout</Text>
                </TouchableOpacity>
            </View>

            <List selectedTeb={selectedTeb} />


        </>
    );
}
const styles = StyleSheet.create({
    navigator: {
        backgroundColor: "darkgreen",
        flexDirection: 'row',
        borderRadius: 30,
        marginTop: 10,
        width: 350,
        height: 50,
        marginLeft: 20
    },
    Text: {
        flex: 1,
        flexDirection: 'row',
        color: "dimgray",
        fontSize: 30,
        textAlign: 'center',
        margin: 5

    },
    Home: {
        flex: 1,
        color: "cornsilk",
        fontSize: 20,
        margin: 10,
        marginLeft: 20,
        marginRight: 20
    },
    Cart: {
        flex: 1,
        color: "cornsilk",
        fontSize: 20,
        margin: 10,
        marginLeft: 20,
        marginRight: 20
    },
});
export default Home;
