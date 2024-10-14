import {StyleSheet, View} from "react-native";


const ClassComponent = () => {

    return (
        <View style={styleSheet.classContainer}>
            <View style={styleSheet.statusContainer}>
                <View style={styleSheet.circle}></View>
            </View>
            <View style={styleSheet.timelineContainer}>
                
            </View>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    timelineContainer: {

    },

    circle: {

    }
})

export default ClassComponent;