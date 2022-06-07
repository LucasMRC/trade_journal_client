import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';
import { useFonts } from 'expo-font';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'src/utils/navigation';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(223, 223, 223)'
    },
    navigator: {
        flex: 1
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        fontFamily: 'Montserrat-Light',
        fontSize: 24,
        color: '#rgb(51, 51, 51)',
        lineHeight: 30,
        width: screenWidth * 0.7,
        textAlign: 'center',
        borderBottomColor: 'rgba(51, 51, 51, 0.5)',
        borderBottomWidth: .5,
        marginBottom: 10
    },
    footer: {
        flex: 1
    }
});

const LandingScreen: React.FC<NativeStackScreenProps<StackParamList, 'Landing'>> = ({ navigation }) => {
    const [ _fontsLoaded ] = useFonts({
        'Montserrat-Light': require('../../../assets/fonts/Montserrat-Light.ttf')
    });

    const {
        container,
        navigator,
        body,
        footer,
        logo,
        title
    } = styles;

    return (
        <View
            style={container}
        >
            <View
                style={navigator}
            />
            <View
                style={body}
            >
                <Image
                    style={logo}
                    source={require('../../../assets/images/chart.png')}
                />
                <Text
                    style={title}
                >
                    Your trading Journal
                </Text>
                <Button
                    title="Ir a inicio"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View
                style={footer}
            />
        </View>
    );
};

export default LandingScreen;