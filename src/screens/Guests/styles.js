import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginHorizontal: 20
    },
    mainTitle: {
        fontWeight: '800'
    },
    subTitle: {
        color: '#8d8d8d'
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#474747'
    },
    button: {
        borderColor: '#474747',
        borderWidth: 1,
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        marginHorizontal: 20,
        fontSize: 16
    },
    searchButton: {
        marginBottom: 100,
        backgroundColor: '#f15454',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 10
    },
    searchButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
    }
});

export default styles;