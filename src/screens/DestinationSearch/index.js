import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable } from 'react-native';

import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState();

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput
                style={styles.textInput}
                placeholder='Where are you going?'
                value={inputText}
                onChangeText={setInputText}
            />

            {/* Flatlist of Destinations */}
            <FlatList 
                data={searchResults}
                renderItem={
                    ({item}) => (
                    <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={20} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

export default DestinationSearchScreen;