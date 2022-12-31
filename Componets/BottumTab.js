import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Settings from "../src/screen/settings";
import Cart from "../src/screen/Cart";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../src/screen/home";

const Tab = createMaterialBottomTabNavigator();


const BottomTab = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="yellow"
                inactiveColor="#fff"
                barStyle={{ backgroundColor: 'darkgreen', margin: 5, }}
            // screenOptions={{
            //     headerShown: false,
            //     // tabBarShowLabel: false
            //     tabBarStyle: {
            //         backgroundColor: 'darkgreen'
            //     },
            //     tabBarActiveTintColor: "#fff",
            //     tabBarInactiveTintColor: "yellow",

            // }}
            >
                <Tab.Screen name="Home." component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home-floor-0" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Settings" component={Settings}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bell" size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Cart" component={Cart} options={{
                    tabBarBadge: 3,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="access-point-network" color={color} size={20} />
                    ),
                    tabBarBadgeStyle: { backgroundColor: 'red' }
                }} />

            </Tab.Navigator>
        </>
    )
}

export default BottomTab;