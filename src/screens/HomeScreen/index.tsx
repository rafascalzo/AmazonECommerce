import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

{/**<ProductItem item={products[0]}></ProductItem> */}
{/* /In FlatList react will expected unique key property. if data doesn't have it will need to implement keyExtractor 
due to inform react-native an unique key => keyExtractor={({id}) => id}. If data have this unique key react will know automatically*/}

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* Render Product Component */}
            <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
});

export default HomeScreen;