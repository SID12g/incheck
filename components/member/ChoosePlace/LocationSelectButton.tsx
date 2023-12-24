import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import { CommonActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useContext, useEffect, useState, } from "react";
import { LoginUserContext } from "../../../store/LoginUser-context";
import firestore from '@react-native-firebase/firestore'
const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LocationSelectButton({ Icon, subTitle, Title }: { Icon: string, subTitle: string, Title: string }) {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const LoginUserCtx = useContext(LoginUserContext)
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const userDoc = firestore().collection('dimigo').doc(LoginUserCtx.googleInformation.email)
    useEffect(()=>{
        async function setFav(){
           await setIsFavorite(LoginUserCtx.favoriteLocation.includes(Title))
        }
        async function goDb(){
            
            userDoc.update(
                {'location': LoginUserCtx.location,
                'subLocation': LoginUserCtx.subLocation,
                'favoriteLocation': LoginUserCtx.favoriteLocation, 
                'favoriteSubLocation': LoginUserCtx.favoriteSubLocation
            }
            )
        }
        setFav()
        goDb()
        // 데이터 전송 함수 !!!!!!
    })
    
    function pressSelectBtn(){
        LoginUserCtx.changeUserLocation(Title)
        LoginUserCtx.changeUserSubLocation(subTitle)
        // console.log(LoginUserCtx)
    }

    async function pressStarBtn(){
        if(isFavorite) {
            await LoginUserCtx.subtUserFavoriteLocation(Title)
            await LoginUserCtx.subtUserFavoriteSubLocation(subTitle)
            
            // console.log('true -> false')
        } else {
            await LoginUserCtx.addUserFavoriteLocation(Title)
            await LoginUserCtx.addUserFavoriteSubLocation(subTitle)
            
            // console.log('f -> t')
        }

        // console.log(LoginUserCtx)
    }

    return (

        <View style={styles.locationWrap}>
            <View style={styles.location}>
                <Text style={styles.locationIcon}>{Icon}</Text>
                <View style={styles.locationTitleWrap}>
                    <Text style={styles.locationSubTitle}>{subTitle}</Text>
                    <Text style={styles.locationTitle}>{Title}</Text>
                </View>
                <View style={styles.starAndBtnWrap}>
                    <TouchableOpacity>
                        <Fontawesome onPress={pressStarBtn} style={styles.starBtn} name={isFavorite ? "star" : "star-o"} color='white' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressSelectBtn}>
                        <View style={styles.selectBtn}>
                            <Text style={styles.selectBtnText}>선택</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    locationWrap: {
        alignItems: 'center',
    },
    location: {
        width: windowWidth * 330,
        height: windowHeight * 75,
        backgroundColor: '#5B84EC',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: windowHeight * 12,
        alignItems: 'center',
    },
    locationIcon: {
        fontSize: 40,
        marginBottom: windowHeight * 10,
        marginLeft: windowWidth * 22,
    },
    locationTitleWrap: {
        marginLeft: windowWidth * 13,
    },
    locationSubTitle: {
        fontSize: 12,
        fontFamily: 'Pretendard-Medium',
        color: '#CBCBCB',
    },
    locationTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
    },
    starAndBtnWrap: {
        position: 'absolute',
        marginLeft: windowWidth * 212,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    starBtn: {
        marginRight: windowWidth*10,
    },
    selectBtn: {
        width: windowWidth * 72,
        height: windowHeight * 38,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectBtnText: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Pretendard-SemiBold'
    },
});
