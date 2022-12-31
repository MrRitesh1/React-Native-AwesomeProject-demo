import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props,) => {
    const logout = async () => {
        props.navigation.closeDrawer()
        await AsyncStorage.removeItem('Email')
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 1000);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
            <DrawerContentScrollView {...props}
            // contentContainerStyle={{ backgroundColor: "mistyrose" }}
            ><ImageBackground
                source={require('../assets/images(1).jpg')}
                style={{ padding: 20 }}
            >
                    <Image
                        source={require('../assets/p.png')}
                        style={{
                            height: 100, width: 100, borderRadius: 50, margin: 15,

                        }}
                    />
                    <Text style={{ color: '#fff', fontSize: 20, flex: 1, marginLeft: 20 }}>Doremon</Text>
                </ImageBackground>
                <View style={{
                    flex: 1, padding: 10,

                }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, }}>
                <TouchableOpacity
                    onPress={logout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}

export default CustomDrawer;