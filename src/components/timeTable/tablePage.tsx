import {Image, RefreshControl, ScrollView, StyleSheet, Text, useColorScheme, View} from "react-native";
import React, {createContext, useCallback, useEffect, useState} from "react";
import globalSS from "../../style/global";
import Schedule from "./schedule";
import Table from "./table";

const fontContext = createContext('');

const timeData = [
    {
        date: '09-23',
        weekday: '周一',
    },
    {
        date: '09-24',
        weekday: '周二',
    },
    {
        date: '09-25',
        weekday: '周三',
    },
    {
        date: '09-26',
        weekday: '周四',
    },
    {
        date: '09-27',
        weekday: '周五',
    },
    {
        date: '09-28',
        weekday: '周六',
    },
    {
        date: '09-29',
        weekday: '周日',
    },
];

export default function TablePage(): JSX.Element {
    const theme = useColorScheme();
    const [fontColor, setFontColor] = useState('black');

    const dateColumn = timeData.map((item) => {
        return (
          <View style={styleSheet.dateItem}>
              <Text>{item.weekday}</Text>
              <Text>{item.date}</Text>
          </View>
        );
    })


    useEffect(() => {
        setFontColor(globalSS().fontColor);
    }, [theme]);

    return (
        <fontContext.Provider value={fontColor}>
            <View style={{
                width: '100%',
                flex: 1,
            }}
            >
                <View style={{
                    width: '100%',
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={styleSheet.guideBar}>
                        <Image
                            source={require('../../assets/png/leftArrow.png')}
                            style={{
                                width: 30,
                                height: 30,
                                position: 'absolute',
                                left: 5,
                                bottom: '40%',
                            }}></Image>
                        <View style={styleSheet.weekBox}>
                            <View style={styleSheet.textBox}>
                                <Text style={{color: fontColor, height: 20, lineHeight: 20, fontSize: 18, fontWeight: '600'}}>第5周</Text>
                                <Text style={{color: fontColor, fontSize: 12}}>本周</Text>
                                <Image
                                    source={require('../../assets/png/leftArrow.png')}
                                    style={{
                                        width: 18,
                                        height: 18,
                                        transform: [
                                            {rotate: '-90deg'}
                                        ],
                                        position: 'absolute',
                                        right: -20,
                                        top: 0,
                                    }}
                                ></Image>
                            </View>
                        </View>

                        <Image
                            source={require('../../assets/png/reload.png')}
                            style={{
                                width: 26,
                                height: 26,
                                position: 'absolute',
                                right: 10,
                                bottom: '40%'
                            }}
                        ></Image>
                    </View>
                    <View style={styleSheet.tableWrapper}>
                        <Schedule></Schedule>
                    </View>
                </View>
            </View>
        </fontContext.Provider>
    );
}

const styleSheet = StyleSheet.create({
    guideBar: {
        paddingTop: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#ff6275',
        position: 'relative',
    },

    weekBox: {
        width: '30%',
        height: '100%',
        position: 'absolute',
        left: '35%',
        bottom: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBox: {
        maxWidth: 50,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    tableWrapper: {
        width: '100%',
        flex: 1,
        marginVertical: 10,
    },

    tableContainer: {
        flex: 1,
        backgroundColor: '#932626',
    },

    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    dateItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
})
