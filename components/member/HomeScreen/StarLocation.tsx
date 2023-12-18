import { View, Text, StyleSheet } from "react-native"
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function StarLocation({ children }: any) {
    return (
        <View style={styles.starLocation}>
            <Text style={styles.starLocationText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    starLocation: {
        width: 'auto',
        height: windowHeight * 30,
        paddingHorizontal: windowWidth * 8,
        borderRadius: 30,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: windowWidth*8,
    },
    starLocationText: {
        color: 'white',
    },
})