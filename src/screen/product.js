import React from "react";
import { Text, View, StyleSheet, } from 'react-native';

const Product1 = (props) => {
    const { params = {} } = props.route;
    const {
        Product,
        title,
        pr,

    } = params;
    // console.log('Product', Product)
    return (
        <View style={styles.body}>
            <Text style={styles.id}>{Product.ID}</Text>
            <Text style={styles.pris}>{Product.Pris}</Text>
            <Text>{title}</Text>
            <Text>{pr}</Text>
            {/* <Text>{Product.PR.MR}</Text> */}
            {/* <Image style={styles.image1}>{Product.Image1}</Image> */}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {

    },
    id: {
        textAlign: 'center',
        fontSize: 30,
    },
    pris: {
        flexDirection: 'column'

    },

});
export default Product1;