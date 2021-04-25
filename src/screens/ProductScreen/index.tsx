import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
{/* <Picker.Item label="Java"value="java" />
<Picker.Item label="JavaScript"value="js" /> */}

// Picker states
/*
<Picker
    selectedValue={selectedOption}
    onValueChange={(itemValue, itemIndex) =>
    setSelectedOption(itemValue)
    }
>
 */

import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    console.log(selectedOption);
    return (
        <View  style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image carousel */}
            <ImageCarousel images={product.images} />

            {/* Option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map(option => (
                    <Picker.Item label={option}value={option} />
                ))}
            </Picker>

            {/* Price */}
            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text>)}
            </Text>

            {/* Description */}
            <Text style={styles.description}> {product.description} </Text>

            {/* Quantity selector */}
            <View>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>


            {/* Button */}
            <Button 
                text={'Add to Cart'}
                onPress={() => {
                console.warn('Add to cart');
                }}
                containerStyles={{backgroundColor: '#e3c905'}}
            />
            <Button
                text={'Buy now'}
                onPress={() => {
                    console.warn('Buy now');
                }}
            />
        </View>
    );
};

export default ProductScreen;