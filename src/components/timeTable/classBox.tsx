import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function ClassBox({name = 'Class', location = 'Somewhere', color = '#1cb128'}): React.JSX.Element {


    return (
      <View style={{...styleSheet.boxContainer, backgroundColor: color}}>
          <View style={styleSheet.classBoxTextWrapper}>
              <Text style={styleSheet.classBoxText}>{name}</Text>
          </View>
          <View style={{...styleSheet.classBoxTextWrapper, position: 'absolute', bottom: 5}}>
              <Text style={styleSheet.classBoxText}>{location}</Text>
          </View>

      </View>
    );
}

const styleSheet = StyleSheet.create({
    boxContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
        position: 'relative',
    },

    classBoxTextWrapper: {
        width: '100%',
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 3,
        paddingBottom: 3,
    },

    classBoxText: {
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 14,
    }
})