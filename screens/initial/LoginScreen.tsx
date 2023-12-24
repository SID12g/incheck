import React, { useContext, useEffect, useMemo, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native";
import { CommonActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginUserContext } from "../../store/LoginUser-context";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LoginScreen() {
    const LoginUserCtx = useContext(LoginUserContext)
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const studentId = LoginUserCtx.studentId
    const [idToken, setIdToken] = useState('');

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '630749287407-ro1v0dj6bkjuur3je2l3i8fa4tvhdbln.apps.googleusercontent.com',
        });
    }, []);

    const onPressGoogleBtn = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken, user } = await GoogleSignin.signIn();
            console.log('user : ', user);

            if (idToken && user) {
                LoginUserCtx.changeUserGoogleInformation(user);

                // 문서가 존재하는지 확인
                const docSnapshot = await firestore().collection('dimigo').doc(user.email).get();

                if (docSnapshot.exists) {
                    // 문서가 존재하면 데이터를 가져옵니다.
                    const existingData = docSnapshot.data();
                    console.log('Existing Data:', existingData);
                    await LoginUserCtx.changeFavoriteLocation(existingData?.favoriteLocation)
                    await LoginUserCtx.changeFavoriteSubLocation(existingData?.favoriteSubLocation)
                    await LoginUserCtx.changeUserGoogleInformation(existingData?.googleInformation)
                    await LoginUserCtx.changeUserName(existingData?.name)
                    await LoginUserCtx.changeUserPhoneNumber(existingData?.phoneNumber)
                    await LoginUserCtx.changeUserStudentId(existingData?.studentId)
                    await LoginUserCtx.changeUserLocation(existingData?.location)
                    await LoginUserCtx.changeUserSubLocation(existingData?.subLocation)
                    // 기존 데이터로 무언가를 수행합니다.
                    
                    navigation.dispatch(
                        CommonActions.reset({
                            routes: [{ name: 'BottomTab' }]
                        })
                    )
                } else {
                    // 문서가 존재하지 않으면 문서를 만들고 데이터를 설정합니다.
                    LoginUserCtx.changeUserGoogleInformation(user)
                    navigation.dispatch(
                        CommonActions.reset({
                            routes: [{ name: 'AddUserInformation' }]
                        })
                    );
                }
            }

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const res = await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log("google login error", error);
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.logoWrap}>
                <Image style={styles.logo} source={require('../../public/image/incheck_logo.png')} />
            </View>
            <Text style={styles.textLogo}>INCHECK</Text>
            <View>
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
        marginTop: windowHeight * 220,
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
});
