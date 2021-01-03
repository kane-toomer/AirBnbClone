import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '50%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 250,
        marginTop: 25,
        marginLeft: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700'
    },
    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 1
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: '700'
    }
});

export default styles;