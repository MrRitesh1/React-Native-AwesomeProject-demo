import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './src/screen/settings';
import Login from './src/screen/login';
import CustomDrawer from './Componets/CustomDrawer';
import BottomTab from './Componets/BottumTab';
import Product1 from './src/screen/product';
import GoogleMaps1 from './src/screen/Map';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>

  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTag" component={HomeTag} />
        <Stack.Screen name="Product1" component={Product1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export function HomeTag() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "mediumblue",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name='GoogleMap' component={GoogleMaps1} />
    </Drawer.Navigator>

  );
}


export default App;











