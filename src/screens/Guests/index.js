import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const GuestsScreen = (props) => {

    const [adults, setAdults] = useState( 0 );
    const [children, setChildren] = useState( 0 );
    const [infants, setInfants] = useState( 0 );

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                {/* Row 1 - Adults */}
                <View style={styles.row} >
                    {/* Titles */}
                    <View>
                        <Text style={styles.mainTitle}>Adults</Text>
                        <Text style={styles.subTitle}>Age 13 or above</Text>
                    </View>
                    {/* Buttons w/ value */}
                    <View style={styles.buttonRow}>
                        {/* Minus Button */}
                        <Pressable 
                            onPress={() => setAdults(Math.max(0, adults - 1))} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        {/* Value */}
                        <Text style={styles.value}>{adults}</Text>

                        {/* Plus Button */}
                        <Pressable 
                            onPress={() => setAdults(adults + 1)} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* END: Row 1 - Adults */}

                {/* Row 2 - Children */}
                <View style={styles.row} >
                    {/* Titles */}
                    <View>
                        <Text style={styles.mainTitle}>Children</Text>
                        <Text style={styles.subTitle}>Ages 2 to 12</Text>
                    </View>
                    {/* Buttons w/ value */}
                    <View style={styles.buttonRow}>
                        {/* Minus Button */}
                        <Pressable 
                            onPress={() => setChildren(Math.max(0, children - 1))} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        {/* Value */}
                        <Text style={styles.value}>{children}</Text>

                        {/* Plus Button */}
                        <Pressable 
                            onPress={() => setChildren(children + 1)} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* END: Row 2 - Children */}

                {/* Row 3 - Infants */}
                <View style={styles.row} >
                    {/* Titles */}
                    <View>
                        <Text style={styles.mainTitle}>Infants</Text>
                        <Text style={styles.subTitle}>Under 2</Text>
                    </View>
                    {/* Buttons w/ value */}
                    <View style={styles.buttonRow}>
                        {/* Minus Button */}
                        <Pressable 
                            onPress={() => setInfants(Math.max(0, infants - 1))} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        {/* Value */}
                        <Text style={styles.value}>{infants}</Text>

                        {/* Plus Button */}
                        <Pressable 
                            onPress={() => setInfants(infants + 1)} 
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* END: Row 3 - Infants */}
            </View>

            <View>
                {/* Button */}
                <Pressable 
                    onPress={() =>
                        navigation.navigate('Home', {
                            screen: 'Explore',
                            params: {
                                screen: 'SearchResults'
                            },
                        })
                    }
                    style={styles.searchButton}
                    // onPress={() => navigation.navigate('')}
                    >
                    <Text style={styles.searchButtonText}>Search</Text>
                </Pressable>
                {/* END: Button */}
            </View>
        </View>
    );
}

export default GuestsScreen;