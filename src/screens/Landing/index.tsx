import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { useFonts } from 'expo-font';

const screenWidth = Dimensions.get('screen').width;

const defaultStyles = StyleSheet.create({
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
    title: {
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

const LandingScreen: React.FC = () => {
    const [ styles, setStyles ] = useState<StyleSheet.NamedStyles<{ [key: string]: unknown }>>(defaultStyles);
    const [ fontsLoaded ] = useFonts({
        'Montserrat-Light': require('../../../assets/fonts/Montserrat-Light.ttf')
    });

    useEffect(() => {
        if (fontsLoaded)
            setStyles({
                ...defaultStyles,
                title: {
                    ...defaultStyles.title,
                    fontFamily: 'Montserrat-Light'
                }
            } as StyleSheet.NamedStyles<{ [key: string]: unknown }>);
    }, [ fontsLoaded ]);

    const {
        container,
        navigator,
        body,
        footer,
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
                    height={120}
                    width={120}
                    source={require('../../../assets/images/chart.png')}
                />
                <Text
                    style={title}
                >
                    Your trading Journal
                </Text>
            </View>
            <View
                style={footer}
            />
        </View>
    );
};

export default LandingScreen;