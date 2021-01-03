import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = (props) => {
    return (
        <View>
            {/* Search Bar */}
            <Pressable style={styles.searchButton} onPress={() => console.warn('Explore Btn Clicked')}>
                <Fontisto name='search' size={25} color={'#f15454'} style={{marginRight: 10}} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}> 
                {/* Title */}
                    <Text style={styles.title}>Go Near</Text>
                {/* Button */}
                    <Pressable style={styles.button} onPress={() => console.warn('Explore Btn Clicked')}>
                        <Text style={styles.buttonText}>Explore Nearby Stays</Text>
                    </Pressable>
            </ImageBackground>
        </View>
    );
};


export default HomeScreen;