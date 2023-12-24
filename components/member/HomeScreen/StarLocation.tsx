import { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Dimensions } from 'react-native';
import { LoginUserContext } from "../../../store/LoginUser-context";
import firestore from'@react-native-firebase/firestore'

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;



export default function StarLocation({ Title, SubTitle }:{Title: string, SubTitle: string}) {
    const LoginUserCtx = useContext(LoginUserContext)
    const userDoc = firestore().collection('dimigo').doc(LoginUserCtx.googleInformation.email)
    useEffect(()=>{
        async function goDb(){
            
            userDoc.update(
                {'location': LoginUserCtx.location,
                'subLocation': LoginUserCtx.subLocation,
                'favoriteLocation': LoginUserCtx.favoriteLocation, 
                'favoriteSubLocation': LoginUserCtx.favoriteSubLocation
            }
            )
        }
        goDb()
        // 데이터 전송 함수 !!!!!!
    })
   

    function pressSelectBtn(){
        LoginUserCtx.changeUserLocation(Title)
        LoginUserCtx.changeUserSubLocation(SubTitle)
        // 데이터 전송 함수 !!!!!!!
    }

    return (
        <TouchableOpacity onPress={pressSelectBtn} style={styles.starLocation}>
            <Text style={styles.starLocationText}>{Title}</Text>
        </TouchableOpacity>
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