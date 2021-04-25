import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, useWindowDimensions } from 'react-native';

const ImageCarousel = ({images} : {images:[string]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    return (
        <View>
            <FlatList
            data = {images}
            renderItem={({item}) => (
                <Image style={styles.image} source={{ uri: item }} width={windowWidth -40}/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth - 20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            />
            <View style={ styles.dots}>
            {images.map((image, index) => (
                <View style={[
                    styles.dot,
                    { backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}
                ]
            }
            />
            ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image : {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default ImageCarousel;