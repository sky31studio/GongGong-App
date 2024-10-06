import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { ClassObject } from "./table";

interface ClassBoxProps {
    color?: string,
    course?: ClassObject,
}

const ClassBox: React.FC<ClassBoxProps> = ({ color = '#1cb128', course = {
    classroom: 'somewhere',
    name: 'class',
}}) => {

    const {name, classroom} = course;

    return (
      <View style={{...styleSheet.boxContainer, backgroundColor: color}}>
          <View style={styleSheet.classBoxTextWrapper}>
              <Text style={styleSheet.classBoxText}>{name}</Text>
          </View>
          <View style={{...styleSheet.classBoxTextWrapper, position: 'absolute', bottom: 5}}>
              <Text style={styleSheet.classBoxText}>{classroom}</Text>
          </View>

      </View>
    );
}

export default ClassBox;

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
        fontSize: 10,
        lineHeight: 14,
    }
})
