import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

interface ProductItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    }
}

const ProductItem3ExampleDeclaration = ({ item }: ProductItemProps) => {
    {/* if dont have a lot of  properties*/}
}
const ProductItem2ExampleDeclaration = (props: ProductItemProps) => {
    {/* const item = props.item; */}
    {/* const { item } = props;*/}
}

{/*key={`${item.id}-${index}`}*/}

const ProductItem = ({ item }: ProductItemProps) => {
    return (
        <View style={styles.root}>
                <Image style={styles.image} source = {{ uri: item.image}}/>
                <View style = {styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* Ratings */}
                    {/*challenge: implement half star */}
                    <View style={styles.ratingsContainer}>
                        {
                            [0,0,0,0,0].map((element, index) => 
                                <FontAwesome
                                key={`${item.id}-${index}`}
                                style={styles.star}
                                name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'}
                                />
                            )
                        }
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${item.price}
                        {item.oldPrice && <Text style={styles.oldPrice}> ${item.oldPrice}</Text>}
                    </Text>
            </View>
        </View>
    )
}

{
/*
Array with five elements:
[0,1,2,3,4]
OR
Array.from(Array(5).keys()
OR WITH SPREAD OPERATOR
[...Array(5).keys()]

TO START WITH 1 KEY:
Array.from({length:5}, (_, i) => i + 1)

Mapping
[0,0,0,0,0].map((element, index) => ?)
*/
}

export default ProductItem;