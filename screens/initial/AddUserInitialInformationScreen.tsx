import { CommonActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext, useEffect, useState, } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import { LoginUserContext } from "../../store/LoginUser-context";
import { Alert } from "react-native";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function AddUserInitialInformationScreen() {
    const LoginUserCtx = useContext(LoginUserContext)
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [name, setName] = useState('')
    const onChangeName = (name: string) => {
        setName(name)
        // console.log(name)
    }

    const [phoneNum, setPhoneNum] = useState('')
    const onChangePhoneNum = (num: string) => {
        setPhoneNum(num)
        // console.log(num)
    }

    const [studentId, setStudentId] = useState('')
    const onChangeStudentId = (id: string) => {
        setStudentId(id)
        // console.log(id)
    }
    

    function pressCompleteBtn() {
        if(name === '' || phoneNum === '' || studentId === '' || studentId[0]>='4' || studentId[0] == '0' || studentId.length != 4 || studentId[1]>='7' || studentId[1] == '0') {
            Alert.alert(
                '알림',
                '정보를 모두 올바르게 기입해주세요',
                [
                  {
                    text: 'Ok',
                    style: 'cancel',
                  },
                ],
            )
        } else {
            LoginUserCtx.changeUserName(name)
            LoginUserCtx.changeUserPhoneNumber(phoneNum)
            LoginUserCtx.changeUserStudentId(studentId)
            LoginUserCtx.changeUserLocation(`${studentId[0]}학년 ${studentId[1]}반`)
            if(studentId[0] == '1') {
                LoginUserCtx.changeUserSubLocation('본관 3층')
            } else if(studentId[0] == '2') {
                LoginUserCtx.changeUserSubLocation('본관 2층')
            } else if(studentId[0] == '3') {
                LoginUserCtx.changeUserSubLocation('신관 2층')
            }
            
            navigation.dispatch(
                        CommonActions.reset({
                            routes: [{ name: 'BottomTab' }]
                        })
                    ) // 로그인 후 로그인 화면으로 돌아가지 못하게 함.
        }
    }

    useEffect(()=>{
        console.log(LoginUserCtx)
    },[LoginUserCtx])


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.inputWrap}>
                <Text style={styles.inputTitle}>이름</Text>
                <TextInput placeholder='예) 홍길동' onChangeText={onChangeName} value={name} style={styles.input}></TextInput>
            </View>
            <View style={styles.inputWrap}>
                <Text style={styles.inputTitle}>전화번호</Text>
                <TextInput maxLength={11} keyboardType="phone-pad" placeholder='예) 01012345678' onChangeText={onChangePhoneNum} value={phoneNum} style={styles.input}></TextInput>
            </View>
            <View style={styles.inputWrap}>
                <Text style={styles.inputTitle}>학번</Text>
                <TextInput maxLength={4} keyboardType="phone-pad" placeholder='예) 1427 (1학년 4반 27번)' onChangeText={onChangeStudentId} value={studentId} style={styles.input}></TextInput>
            </View>
            <TouchableOpacity onPress={pressCompleteBtn} style={styles.completeBtn}>
                <Text style={styles.completeText}>완료</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputWrap: {
        width: windowWidth * 336,
        height: windowHeight * 105,
        alignSelf: 'center',
        marginTop: windowHeight * 27,
    },
    inputTitle: {
        fontSize: 28,
        fontFamily: 'Pretendard-SemiBold',
        color: 'black'
    },
    input: {
        width: windowWidth * 336,
        height: windowHeight * 60,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
        fontSize: 20,
        fontFamily: 'Pretendard-Medium',
        color: 'black',
        paddingHorizontal: windowWidth * 18,
        paddingVertical: windowHeight * 15,
        marginTop: windowHeight * 19,
    },
    completeBtn: {
        width: windowWidth * 330,
        height: windowHeight * 60,
        backgroundColor: '#525CC9',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: windowHeight * 263,
    },
    completeText: {
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
    },
})