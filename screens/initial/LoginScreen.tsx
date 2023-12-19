import { Image, SafeAreaView, StyleSheet, View, Dimensions, Text } from "react-native";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LoginScreen(){
    return(
        <SafeAreaView>
            <Image style={styles.logo} source={require('../../public/image/incheck_logo.png')} />
            <Text style={styles.textLogo}>INCHECK</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: windowWidth*127,
        height: windowHeight*148,
        alignSelf: 'center',
        marginTop: windowHeight*231,
    },
    textLogo: {
        fontSize: 30,
        fontFamily: 'Pretendard-SemiBold',
        alignSelf: 'center',
        color: 'black',
        marginTop: windowHeight*24,
    },
})