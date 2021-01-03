import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Post = () => {
    return (
       <View style={styles.container}>
           {/* Image */}
            <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} />

           {/* Bedroom & Bathroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

           {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                Entire Flat. Puerto de la Cruz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

           {/* Old Price & New Price */}
           <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36 </Text>
            <Text style={styles.newPrice}> $30 </Text>
            / night
           </Text>
           {/* Total Price */}
           <Text style={styles.totalPrice}>
               $230 total
           </Text>
       </View> 
    );
};

export default Post;
