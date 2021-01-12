import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import SuggestionRow from './SuggestionRow';

import { useNavigation } from '@react-navigation/native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    console.log(data, details);
                    navigation.navigate('Guests', {viewport: details.geometry.viewport});
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput,
                }}
                query={{
                    key: 'AIzaSyBYchC8Fbqc9nPH3QJ2-cXiPJjEBqLtgXs',
                    language: 'en',
                    types: '(cities)',
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />    
        </View>
    );
}

export default DestinationSearchScreen;