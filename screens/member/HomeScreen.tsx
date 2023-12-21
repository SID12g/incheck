import { Platform, SafeAreaView, ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import StarLocation from "../../components/member/HomeScreen/StarLocation";
import { useContext } from "react";
import { LoginUserContext } from "../../store/LoginUser-context";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function MemberHomeScreen() {
    const LoginUserCtx = useContext(LoginUserContext)
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.logoWrap}>
                <Image resizeMode="center" style={styles.logo} source={require('../../public/image/incheck_logo.png')} />
            </View>
            <View style={styles.locationContainer}>
                <View style={styles.topUtil}>
                <Text style={styles.explain}>{LoginUserCtx.name}님의 현재위치</Text>
                <Text style={styles.locationDetail}>{LoginUserCtx.subLocation}</Text>
                <Text style={styles.location}>{LoginUserCtx.location}</Text>
                </View>
                <View style={styles.bottomUtil}>
                    
                    <TouchableOpacity style={styles.changeLocation}>
                        <Text style={styles.changeLocationText}>위치변경</Text>
                        <Entypo style={{}} name="chevron-right" color='white' size={windowWidth*14} />
                    </TouchableOpacity>
                    <View style={{ width: windowWidth * 4 }}></View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.starLocationWrap}>
                            {
                                LoginUserCtx.favoriteLocation.map((a, i) => {
                                    return (<StarLocation key={i}>{a}</StarLocation>)
                                })
                            }

                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        width: windowWidth * 393,
        height: windowHeight * 852,
    },
    topUtil: {
        height: windowHeight*131,
        width: '100%',
        marginBottom: windowHeight*10,
    },
    logoWrap: {
        width: windowWidth*31.8,
       
        marginTop: windowHeight * 17,
        marginLeft: windowWidth * 21,
    },
    logo: {
        width: '100%',
        height: windowHeight*37,
    },
    locationContainer: {
        width: windowWidth * 366,
        height: Platform.select({ ios: windowHeight * 204, android: windowHeight * 210 }),
        backgroundColor: '#525CC9',
        borderRadius: 25,
        marginTop: windowHeight * 22,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    explain: {
        fontSize: 16,
        fontFamily: 'Pretendard-Bold',
        color: 'white',
        marginTop: windowHeight * 18,
        marginLeft: windowWidth * 24,
    },
    locationDetail: {
        fontSize: 16,
        fontFamily: 'Pretendard-Regular',
        color: 'white',
        marginTop: windowHeight * 27,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    location: {
        fontSize: 32,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
        marginTop: windowHeight * 8,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    bottomUtil: {
        height: windowHeight * 73,
        width: windowWidth * 335,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    changeLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 124,
        height: windowHeight * 30,
        justifyContent: 'center',
        borderColor: 'white',
    },
    changeLocationText: {
        marginLeft: windowWidth*10,
        height: windowHeight*25,
        fontSize: windowWidth*14,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
        marginRight: windowWidth * 37,
        alignSelf: 'flex-end'
       
    },
    starLocationWrap: {
        marginLeft: windowWidth * 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: windowWidth * 8,
    },
})