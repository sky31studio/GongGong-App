import {RefreshControl, ScrollView, Text, View} from "react-native";
import React, {useCallback} from "react";

const onRefresh = useCallback(() => {

}, []);

export default function TablePage(): JSX.Element {
    return (
        <ScrollView
            style={{
                width: '100%',
                marginTop: 20
            }}
            refreshControl={
                <RefreshControl refreshing={false} />
            }
        >


        </ScrollView>
    );
}
