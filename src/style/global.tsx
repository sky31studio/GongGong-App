import {Appearance, StyleSheet} from "react-native";

const lightSS = {
    fontColor: '#fff',
};

const darkSS = {
    fontColor: '#fff',
};

const globalSS = () => {
    const colorScheme = Appearance.getColorScheme();

    if (colorScheme === 'dark') {
        return darkSS;
    } else {
        return lightSS;
    }
}

export default globalSS;