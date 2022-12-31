import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, View, Image, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const List = (props) => {
    const { selectedTeb } = props

    // const [counter, setCounter] = useState(1);
    // const onPress1 = () => setCounter(Counter => Counter - 1);
    // const onPress = () => setCounter(Counter1 => Counter1 + 1);

    const [productItem, setProductItem] = useState(DATA)
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([])

    const onPressDecrisCuntar = (item, index) => {
        // console.log('item', item)
        console.log('Item', index, item)
        let newProductItem = [...productItem]
        console.log('----->', newProductItem[index])
        newProductItem[index].counter = newProductItem[index].counter - 1
        setProductItem(newProductItem)
    }

    const onPressEncrisCuntar = (index) => {
        let newProductItem = [...productItem]
        newProductItem[index].counter = newProductItem[index].counter + 1
        setProductItem(newProductItem)
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = DATA.filter((item) => {
                const itemData = item.ID ? item.ID.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setProductItem(newData);
            setSearch(text);
        } else {
            setProductItem(DATA);
            setSearch(text);
        }
    }


    const onPressAddToCart = (item, index) => {
        // console.log('---->', item)
        if (selectedTeb === 0) {
            let newCart = [...cart]
            newCart.push(item)
            setCart(newCart)
        }
        else {
            let newRemov = [...cart]
            newRemov.splice(0, 1)
            setCart(newRemov)
        }

    }

    console.log('Cart data,......', cart)
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Product1', { Product: item, title: 'test proest', pr: '$1000', })}>
            <Item
                item={item}
                index={index}
            />

        </TouchableOpacity>
    );

    const [itemIndex, setItemIndex] = useState(-1)
    const RenderItem = ({ item, index }) => (
        <TouchableOpacity style={{
            height: 200,
            width: 100,

            backgroundColor: index === itemIndex ? 'pink' : '#fff',
            marginRight: 10
            , borderRadius: 10,
            alignItems: 'center'
            ,
            justifyContent: 'center'
        }}
            onPress={() => setItemIndex(index)}
        >
            <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={item.Image1}></Image>
        </TouchableOpacity>
    );

    const Item = ({ item, index }) => (

        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.Image1} source={item.Image1}></Image>
                <View style={{ flexDirection: 'column', }}>
                    <Text style={styles.ID}>{ } {item.ID} { } { }</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Pris}>{item.Pris}</Text>
                    <Text style={styles.counter}>{item.counter}</Text>
                    <View style={{ flexDirection: 'row', margin: 20, borderWidth: 2, width: 100 }}>
                        <TouchableOpacity onPress={() => onPressDecrisCuntar(item, index)}>
                            <Text style={{}}> -A</Text></TouchableOpacity>
                        <Text style={{}}>   {item.counter}  </Text>
                        <TouchableOpacity onPress={() => onPressEncrisCuntar(item, index)}>
                            <Text style={{}}> +B</Text></TouchableOpacity>

                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Text1}> Pris </Text>

                    <Text style={styles.Text2}> Pic  </Text>

                    <TouchableOpacity onPress={() => onPressAddToCart(item)}>
                        <Text style={styles.Text3}> {selectedTeb === 0 ? 'Add Cart' : 'Remu Cart'} </Text></TouchableOpacity>
                </View>
            </View>
        </View>

    );

    return (
        <>
            <TextInput

                style={{ borderWidth: 3, borderRadius: 10, width: 300, height: 40, margin: 10, marginLeft: 40, padding: 5, fontSize: 20, }}
                onChangeText={(DATA) => searchFilter(DATA)}
                value={search}
                placeholder="Sarch"
            />
            <FlatList
                data={selectedTeb === 0 ? productItem : cart}
                renderItem={renderItem}

                ListHeaderComponent={
                    < ScrollView horizontal
                        showsHorizontalScrollIndicator={false} >

                        {selectedTeb === 0 &&
                            DATA.map((item, index) => {
                                return (
                                    <RenderItem item={item} index={index} />

                                );
                            })
                        }

                    </ScrollView >
                }
            >

            </FlatList ></>
    );
}

const DATA = [
    {
        ID: 'Belted Ruffled Mini Skirt',
        Pris: '$49',
        Image1: require("../assets/V.webp"),
        PR: {
            MR: 100,
        },
        counter: 1,

    },
    {
        ID: 'Elasticized Dress',
        Pris: '$99',
        Image1: require("../assets/A.jpg"),
        PR: {
            MR: 200,
        }, counter: 1,
    },

    {
        ID: 'Embroidered Dress With Beading',
        Pris: '$199',
        Image1: require("../assets/C.jpg"),
        PR: {
            MR: 300,
        },
        counter: 1,
    },

    {
        ID: 'Embroidered Midi Dress',
        Pris: '$79',
        Image1: require("../assets/D.jpg"),
        PR: {
            MR: 400,
        }, counter: 1,

    },
    {
        ID: 'Floral Print Dress',
        Pris: '$49',
        Image1: require("../assets/E.jpg"),
        counter: 1,
    },
    {
        ID: 'Floral Printed Skirt',
        Pris: '$99',
        Image1: require("../assets/R.jpg"),
        counter: 1,
    },


];



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderColor: "darkblue",

    },
    a: { fontSize: 20 },
    b: { fontSize: 20 },
    c: { fontSize: 20 },
    item: {
        flex: 1,
        //flexDirection: 'row',
        height: 300,
        backgroundColor: "honeydew",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderColor: "darkblue",
        borderWidth: 4
    },
    Pris: {

        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,

        color: "red"

    },
    Text1: {

        marginLeft: 10,
        marginRight: 10,

        borderRadius: 10,
        borderColor: "darkblue",
        borderWidth: 2,
        paddingLeft: 5,
        fontSize: 20,
        backgroundColor: "darkgreen",
        color: "cornsilk",
    },
    Text2: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderRadius: 10,
        borderColor: "darkblue",
        borderWidth: 2,
        paddingLeft: 5,
        backgroundColor: "darkgreen",
        color: "cornsilk",
    },
    Text3: {

        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderRadius: 10,
        borderColor: "darkblue",
        borderWidth: 2,
        paddingLeft: 5,
        backgroundColor: "darkgreen",
        color: "cornsilk",
    },
    counter: {

        fontSize: 20,
        color: "indigo",
        flex: 1,
        marginLeft: 100,
        paddingBottom: 20
    },
    ID: {

        fontSize: 20,
        color: "indigo",
        flex: 1,
        marginLeft: 5,
        padding: 10,


    },
    Image1: {
        height: 150,
        width: 80,
        borderRadius: 5,
        borderColor: "darkblue",
        borderWidth: 1,
        paddingLeft: 5,
        resizeMode: 'contain'
    }


});

export default List;