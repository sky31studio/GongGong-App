import {StyleSheet, View} from "react-native";


const ClassComponent = () => {

    return (
        <View style={styleSheet.classContainer}>

        </View>
    );
}

const styleSheet = StyleSheet.create({
    classContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    statusContainer: {

    },

    timelineContainer: {

    }
})

export default ClassComponent;