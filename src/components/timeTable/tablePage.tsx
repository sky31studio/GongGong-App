import {Image, RefreshControl, ScrollView, StyleSheet, Text, useColorScheme, View} from "react-native";
import React, {createContext, useCallback, useEffect, useState} from "react";
import globalSS from "../../style/global";

const fontContext = createContext('');

export default function TablePage(): JSX.Element {
    const theme = useColorScheme();
    const [fontColor, setFontColor] = useState('black');
    useEffect(() => {
        setFontColor(globalSS().fontColor);
    }, [theme]);

    return (
        <fontContext.Provider value={fontColor}>
            <ScrollView
                style={{
                    width: '100%',
                    marginTop: 20,
                }}
                refreshControl={
                    <RefreshControl refreshing={false} />
                }
            >
                <View style={styleSheet.guideBar}>
                    <Image
                        source={require('../../assets/svg/leftArrow.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}></Image>
                    <View style={styleSheet.weekBox}>
                        <View style={styleSheet.textBox}>
                            <Text style={{color: fontColor}}>123</Text>
                            <Text style={{color: fontColor}}>456</Text>
                            <Image
                                source={require('../../assets/svg/leftArrow.png')}
                                style={{
                                    width: 15,
                                    height: 15,
                                    transform: [
                                        {rotate: '-90deg'}
                                    ],
                                    position: 'absolute',
                                    right: -15,
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </fontContext.Provider>
    );
}

const styleSheet = StyleSheet.create({
    guideBar: {
        paddingBottom: 16,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#ff6275'
    },

    weekBox: {
        width: '30%',
    },

    textBox: {
        maxWidth: 50,
        position: 'relative',
    }
})
