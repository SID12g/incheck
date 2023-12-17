import { Platform, SafeAreaView, ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import StarLocation from "../components/HomeScreen/StarLocation";


const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View style={styles.root}>
                <Image style={styles.logo} source={require('../public/image/incheck_logo.png')} />
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.explain}>이현명님의 현재위치</Text>
                <Text style={styles.locationDetail}>본관 3층</Text>
                <Text style={styles.location}>1학년 4반</Text>
                <View style={styles.bottomUtil}>
                    <View style={styles.changeLocation}>
                        <Text style={styles.changeLocationText}>위치변경</Text>
                        <Entypo name="chevron-right" color='white' size={18} />
                    </View>
                    <View style={{width: windowWidth*4}}></View>
                    <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                   >
                        <View style={styles.starLocationWrap}>
                        <StarLocation>1학년 4반</StarLocation>
                        <StarLocation>302호</StarLocation>
                        <StarLocation>물, 화장실</StarLocation>
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
        flex: 1,
    },
    logo: {
        width: windowWidth * 31.8,
        height: windowHeight * 37,
        marginTop: windowHeight * 17,
        marginLeft: windowWidth * 21,
    },
    locationContainer: {
        width: windowWidth * 366,
        height: Platform.select({ios: windowHeight * 204, android: windowHeight * 210}),
        backgroundColor: '#525CC9',
        borderRadius: 25,
        marginTop: windowHeight * 82,
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
        height: windowHeight * 52,
        width: windowWidth * 335,
        marginTop: windowHeight * 17,
        marginLeft: windowWidth * 29,
        flexDirection: 'row',
        alignItems: 'center'
    },
    changeLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 124,
        height: windowHeight * 16,
        borderRightWidth: 1,
        borderColor: 'white',
    },
    changeLocationText: {
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
        marginRight: windowWidth * 37,
    },
    starLocationWrap: {
        marginLeft: windowWidth * 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: windowWidth*8,
    },
})