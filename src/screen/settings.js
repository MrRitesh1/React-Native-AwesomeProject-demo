
import React, { useEffect, useState } from "react";
import { StyleSheet, Button, TouchableOpacity, Text, View } from "react-native";
import { Increment, Decrement } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
// import { getPosts } from "../redux/actions/postAction";
const Settings = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state)
    console.log("DATA", data)

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [])

    const [tabs, setTabs] = useState(0)
    return (
        <>
            <View
                style={{
                    flex: 0.1,
                    flexDirection: 'row',
                    margin: 20,
                    backgroundColor: tabs === 0 ? 'darkorange' : '#fff'
                        && tabs === 1 ? 'maroon' : '#fff'
                            && tabs === 2 ? 'teal' : '#fff',
                }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        padding: 5, margin: 10, marginLeft: 20, marginRight: 20,
                        backgroundColor: tabs === 0 ? '#fff' : 'midnightblue' && tabs === 1 ? 'maroon' : 'maroon' && tabs === 2 ? 'teal' : 'teal',
                    }}
                    onPress={() => setTabs(0)}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 25,
                            color: tabs === 0 ? 'darkorange' : 'gainsboro',
                        }}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        padding: 5, margin: 10, marginRight: 20, marginLeft: 10,
                        marginRight: 20,
                        backgroundColor: tabs === 1 ? '#fff' : 'darkorange' && tabs === 2 ? 'teal' : 'teal' && tabs === 0 ? 'darkorange' : 'darkorange',
                    }}
                    onPress={() => setTabs(1)}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 25,
                            color: tabs === 1 ? 'maroon' : 'gainsboro',
                        }} >
                        Werk
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        padding: 5, margin: 10, marginRight: 20, marginLeft: 10, marginRight: 20,
                        backgroundColor: tabs === 2 ? '#fff' : 'darkorange' && tabs === 1 ? 'maroon' : 'maroon' && tabs === 0 ? 'darkorange' : 'darkorange',
                    }}
                    onPress={() => setTabs(2)}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 25,
                            color: tabs === 2 ? 'teal' : 'gainsboro',
                        }}>
                        Both
                    </Text>
                </TouchableOpacity>
            </View >
            <View>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>

                    {data[1]}
                </Text>
            </View>
            <View style={{ margin: 10, flex: 1, flexDirection: 'row' }}>
                <View style={{ margin: 10, width: 50 }}>
                    <Button color='brown' onPress={() => dispatch(Decrement(1, data[0] - 1))} title="-">
                        <Text> - </Text>
                    </Button>
                </View>
                <View>
                    <Text style={{ margin: 10, width: 50, fontSize: 15, textAlign: 'center' }} >
                        {data[0]}
                    </Text>
                </View>
                <View style={{ margin: 10, width: 50 }}>
                    <Button color='brown' onPress={() => dispatch(Increment(1, data[0] + 1))} title="+">
                        <Text>+</Text> </Button>

                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({


    // Modal2: {

    //     backgroundColor: 'darkblue',
    //     margin: 10,
    //     width: 200,
    //     height: 40,
    //     borderRadius: 10
    // },
    // Modal2Text: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontSize: 20,
    //     margin: 5
    // },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 22
    // },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    // },
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    // },
    // buttonOpen: {
    //     backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    // textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    // },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    // },





});

export default Settings;
