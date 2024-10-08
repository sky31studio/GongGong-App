import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SvgXml} from "react-native-svg";


const HomePage = () => {
    const functionBar = <FunctionBar />;
    const marinBoard = <MainBoard />;


    return (
      <View style={styleSheet.homeContainer}>
          <View style={{width: '100%', height: '18%'}}>
              {functionBar}
          </View>
        <View style={styleSheet.mainBoardWrapper}>
            {marinBoard}
        </View>
      </View>
    );
}

const emptyClassroomXML = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_223_8348)">
<path d="M13 11C13 8.23858 15.2386 6 18 6H26C28.7614 6 31 8.23858 31 11V37H13V11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31 37V22H32C34.7614 22 37 24.2386 37 27V34C37 35.6569 35.6569 37 34 37H31Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 37V17C10.2386 17 8 19.2386 8 22V34C8 35.6569 9.34315 37 11 37H13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2778 15.7778L23.8889 15.7778" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M17.2778 22.8889L23.8889 22.8889" stroke="white" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_223_8348">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

`;
const gradeXML = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_223_8355)">
<path d="M12 10C12 8.34315 13.3431 7 15 7H29C30.6569 7 32 8.34315 32 10V18C32 23.5228 27.5228 28 22 28C16.4772 28 12 23.5228 12 18V10Z" stroke="white" stroke-width="2"/>
<path d="M22 27V33" stroke="white" stroke-width="2"/>
<path d="M11.2857 13H7C7.35714 16 8.85714 22 12 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.7143 13H37C36.6429 16 35.1429 22 32 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="path-5-inside-1_223_8355" fill="white">
<path d="M12 35C12 33.3431 13.3431 32 15 32H29C30.6569 32 32 33.3431 32 35V37C32 37.5523 31.5523 38 31 38H13C12.4477 38 12 37.5523 12 37V35Z"/>
</mask>
<path d="M12 35C12 33.3431 13.3431 32 15 32H29C30.6569 32 32 33.3431 32 35V37C32 37.5523 31.5523 38 31 38H13C12.4477 38 12 37.5523 12 37V35Z" stroke="white" stroke-width="4" mask="url(#path-5-inside-1_223_8355)"/>
</g>
<defs>
<clipPath id="clip0_223_8355">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

`;
const classXML = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_223_8362)">
<rect x="7" y="8.77783" width="30" height="28.2222" rx="5" stroke="white" stroke-width="2"/>
<path d="M7.77783 17.5555H36.2223" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M14.8889 6V8.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M29.1111 6V8.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M18.4445 25.6445L21.9461 29.1112L27.3333 23.7778" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_223_8362">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

`;
const emptyClassXML = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_236_108)">
<rect x="7" y="8.77783" width="30" height="28.2222" rx="5" stroke="white" stroke-width="2"/>
<path d="M7.7778 17.5555H36.2222" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M14.8889 6V8.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M29.1111 6V8.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M18.4445 25.6445L21.9461 29.1112L27.3333 23.7778" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_236_108">
<rect width="44" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

`;

const FunctionBar = () => {
    return (
      <View style={styleSheet.functionBarContainer}>
        <View style={styleSheet.functionBox}>
            <SvgXml xml={emptyClassroomXML} width="100%" />
            <Text style={styleSheet.functionText}>空教室</Text>
        </View>
          <View style={styleSheet.functionBox}>
              <SvgXml xml={gradeXML} width="100%" />
              <Text style={styleSheet.functionText}>查成绩</Text>
          </View>
          <View style={styleSheet.functionBox}>
              <SvgXml xml={classXML} width="100%" />
              <Text style={styleSheet.functionText}>课程表</Text>
          </View>
          <View style={styleSheet.functionBox}>
              <SvgXml xml={emptyClassXML} width="100%" />
              <Text style={styleSheet.functionText}>多人空课</Text>
          </View>
      </View>
    );
}

const MainBoard = () => {
    const shiftButton = <ShiftButton />;

    return (
        <View style={styleSheet.mainBoardContainer}>
            <View style={styleSheet.shiftButtonContainer}>
                <View style={styleSheet.shiftButton}>
                    {shiftButton}
                </View>
                <View style={{height: '100%', width: 2, borderRadius: 1, backgroundColor: '#D9D9D9'}}></View>
                <View style={styleSheet.shiftButton}>

                </View>
            </View>
        </View>
    );
}

const ShiftButton = () => {

    const [chunkWidth, setChunkWidth] = useState(0);
    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        console.log(width);
        setChunkWidth(width);
    }

    return (
        <View style={styleSheet.shiftBox}>
            <Text onLayout={handleLayout} numberOfLines={1} style={styleSheet.shiftBoxText}>123</Text>
            <View style={[styleSheet.initBox, {width: chunkWidth}]}></View>
        </View>
    );
}

const styleSheet = StyleSheet.create({
   homeContainer: {
       width: '100%',
       flex: 1,
   },

    functionBarContainer: {
       width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#FF6275',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    functionBox: {
       width: 55,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
    },

    functionText: {
       color: '#fff',
       fontSize: 13,
        fontWeight: '600',
        height: 25,
        lineHeight: 25,
        width: '100%',
        textAlign: 'center',
    },

    mainBoardWrapper: {
       width: '100%',
        paddingTop: 50,
        flex: 1,
    },

    mainBoardContainer: {
       width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    shiftButtonContainer: {
       width: '60%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 8,
    },

    shiftButton: {
        width: '40%',
        height: '100%',
        paddingHorizontal: 15,
    },

    shiftBox: {
       position: 'relative',
       height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    shiftBoxText: {
       padding: 0,
        width: undefined,
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
    initBox: {
        width: undefined,
        height: 3,
        backgroundColor: '#a0a',
    }
});

export default HomePage;