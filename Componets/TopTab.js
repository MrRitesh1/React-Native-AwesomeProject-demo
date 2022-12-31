import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../src/screen/home";
import Settings from "../src/screen/settings";
import Map1 from "../src/screen/Cart";

const Tab = createMaterialTopTabNavigator();


export function TopTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'darkgreen',
                    margin: 5
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "yellow",
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map1" component={Map1} />
        </Tab.Navigator>
    );
}
export default TopTabs;