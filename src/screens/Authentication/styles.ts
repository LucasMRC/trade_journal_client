
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B232A',
        justifyContent: 'center',
        width: '100%'
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#161C22',
        height: 46,
        borderRadius: 12,
        justifyContent: 'space-between',
        padding: 4,
        marginBottom: 44
    },
    inactiveTab: {
        width: '50%',
        justifyContent: 'center'
    },
    activeTab: {
        width: '50%',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#1B232A'
    },
    inactiveTabLabel: {
        color: '#777',
        textAlign: 'center'
    },
    activeTabLabel: {
        color: '#C1C7CD',
        textAlign: 'center'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    title: {
        color: '#ddd',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 44
    },
    eyeIconContainer: {
        position: 'absolute',
        bottom: 46,
        right: 10
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 12,
        color: '#A7AFB7'
    },
    input: {
        backgroundColor: '#161C22',
        height: 54,
        borderRadius: 12,
        color: '#777777',
        padding: 10,
        marginBottom: 30
    },
    inputError: {
        backgroundColor: '#161C22',
        height: 54,
        borderRadius: 12,
        color: '#777777',
        padding: 10,
        marginBottom: 30,
        borderColor: '#ff4a4a'
    },
    error: {
        position: 'absolute',
        color: '#ff4a4a',
        bottom: 10,
        fontSize: 12
    },
    button: {
        width: '100%',
        backgroundColor: '#5ED5A8',
        borderRadius: 16,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    }
});
