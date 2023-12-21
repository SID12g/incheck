import { Image, SafeAreaView, StyleSheet, View, Dimensions, Text, TouchableOpacity, Button } from "react-native";
import { CommonActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginUserContext } from "../../store/LoginUser-context";
import { useContext, useEffect, useState, } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LoginScreen() {
    const [idToken, setIdToken] = useState('')
    const LoginUserCtx = useContext(LoginUserContext)
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

   
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '630749287407-ro1v0dj6bkjuur3je2l3i8fa4tvhdbln.apps.googleusercontent.com',
        });
    }, []);


    const onPressGoogleBtn = async () => {
        try{
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        console.log('idToekn : ', idToken);
        if (idToken) {
            setIdToken(idToken);
            LoginUserCtx.changeUserToken(idToken)
            navigation.dispatch(
                CommonActions.reset({
                    routes: [{ name: 'AddUserInformation' }]
                })
            ) // 로그인 후 로그인 화면으로 돌아가지 못하게 함.
        }
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential);
        } catch(error) {
            console.log("google login error", error)
        }
    };



    return (
        <SafeAreaView>
            <View style={styles.logoWrap}>
            <Image style={styles.logo} source={require('../../public/image/incheck_logo.png')} />
            </View>
            <Text style={styles.textLogo}>INCHECK</Text>
            {/* <TouchableOpacity onPress={clickLogin}>
                    <Text>Login</Text>
                </TouchableOpacity> */}
            <View>
                <Text>{idToken}</Text>
                <TouchableOpacity style={styles.GoogleLoginWrap} onPress={onPressGoogleBtn} >
                    
                    <Image style={styles.GoogleLogo} source={require('../../public/image/google_logo.png')} />
                    
                    <Text style={styles.GoogleText}>구글 계정으로 로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logoWrap: {
        width: windowWidth * 127,
        height: 'auto',
        alignSelf: 'center'
    },
    logo: {
       
        alignSelf: 'center',
        marginTop: windowHeight * 231,
    },
    textLogo: {
        fontSize: 30,
        fontFamily: 'Pretendard-SemiBold',
        alignSelf: 'center',
        color: 'black',
        marginTop: windowHeight * 24,
    },
    GoogleLoginWrap: {
        width: windowWidth * 345,
        height: windowHeight * 55,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: windowHeight*220,
        alignSelf: 'center'
    },
    GoogleLogo: {
        width: windowWidth * 23,
        height: windowHeight * 25,
        marginLeft: windowWidth * 22,
        marginRight: windowWidth * 10,
    },
    GoogleText: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#929292',
    },
})