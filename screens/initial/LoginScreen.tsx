import { Image, SafeAreaView, StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native";
import { CommonActions, ParamListBase ,useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginUserContext } from "../../store/LoginUser-context";
import { useContext } from "react";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LoginScreen(){
    const LoginUserCtx = useContext(LoginUserContext)
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function clickLogin(){
        console.log(LoginUserCtx)
        LoginUserCtx.changeUserEmail('aaa')
        console.log(LoginUserCtx)
        navigation.dispatch(
            CommonActions.reset({
                routes: [{name: 'BottomTab'}]
            })
        ) // 로그인 후 로그인 화면으로 돌아가지 못하게 함.
    }
    return(
        <SafeAreaView>
            <Image style={styles.logo} source={require('../../public/image/incheck_logo.png')} />
            <Text style={styles.textLogo}>INCHECK</Text>
            <TouchableOpacity onPress={clickLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
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