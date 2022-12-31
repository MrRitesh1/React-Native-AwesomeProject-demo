import React, { createContext, useRef } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import PagerView from 'react-native-pager-view';
import BottomSheet from 'reanimated-bottom-sheet';
import Settings from "./settings";

const FastName = createContext()

const Cart = () => {
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 600,
                margin: 10,
                borderRadius: 30
            }}
        >
            <Text style={{ fontSize: 40 }}>Header</Text>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                >
                    <Text style={{ textAlign: 'center', fontSize: 30, color: 'red' }}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                >
                    <Text style={{ textAlign: 'center', fontSize: 30, color: 'red' }}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const sheetRef = useRef(null);
    const inputRef = useRef();
    const nameRef = () => {
        inputRef.current.focus()
    }

    return (

        <>
            <View>
                <FastName.Provider value="Doremin">
                    <Settings />
                </FastName.Provider>
            </View>

            <PagerView style={styles.pagerView} initialPage={0}>
                <View key="1">
                    <Text style={{ flex: 1, fontSize: 40, backgroundColor: 'darkslategrey', color: '#fff', textAlign: 'center' }}>
                        First page</Text>


                </View>
                <View key="2">
                    <Text style={{ flex: 1, fontSize: 40, backgroundColor: 'darkslateblue', color: '#fff', textAlign: 'center' }}>Second page</Text>
                </View>
                <View style={{ margin: 5, }}>
                    <TextInput style={{ backgroundColor: 'cadetblue', margin: 10, fontSize: 25 }} ref={inputRef} type="Text" />
                    <TouchableOpacity onPress={nameRef}><Text style={{ margin: 10, textAlign: 'center', fontSize: 20, backgroundColor: 'cadetblue' }}>Entar</Text></TouchableOpacity>
                </View>
            </PagerView>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'papayawhip',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    title="Open BottomSheet"
                    onPress={() => sheetRef.current.snapTo(0)}
                />
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[600, 550, 10]}
                borderRadius={10}
                renderContent={renderContent}
            />
        </>
    );
}
const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
});
export default Cart;
export { FastName }