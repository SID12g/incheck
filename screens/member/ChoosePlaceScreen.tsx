import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import Folder from "../../components/member/ChoosePlace/Folder";
import LocationSelectButton from "../../components/member/ChoosePlace/LocationSelectButton";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;



export default function MemberChoosePlaceScreen() {
    return (
       
        <SafeAreaView style={styles.root}>
            <ScrollView>
            <View style={styles.topLine}>
                <Text style={styles.title}>장소 선택</Text>
            </View>
            <View style={styles.locationWrap}>
                <View style={styles.frame}>
                    <Text style={styles.frameText}>본관</Text>
                    <Folder Icon='🍚' subTitle='급식실' Title='B1층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='교무실, 특별실' Title='1층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='2학년 교실, 특별실' Title='2층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='1학년 교실, 특별실' Title='3층' navi='B1Floor' />
                </View>
            </View>
            <View style={styles.locationWrap}>
                <View style={styles.frame}>
                    <Text style={styles.frameText}>신관</Text>
                    <Folder Icon='🏫' subTitle='교무실, 특별실' Title='1층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='3학년 교실, 특별실' Title='2층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='열람실, 특별실' Title='3층' navi='B1Floor' />
                    <Folder Icon='🏫' subTitle='대강당' Title='4층' navi='B1Floor' />
                </View>
            </View>
            <View style={styles.locationWrap}>
                <View style={styles.etcFrame}>
                    <Text style={styles.frameText}>기타</Text>
                    <LocationSelectButton Icon='🏫' subTitle='지상' Title='스마트팜' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='지상' Title='운동장' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='지하' Title='체육관' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='기숙사' Title='학봉관' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='기숙사' Title='우정학사' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='교외' Title='외출' navi='B1Floor' />
                    <LocationSelectButton Icon='🏫' subTitle='교외' Title='귀가' navi='B1Floor' />
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.directBtn}>
                    <Text style={styles.directBtnText}>직접 입력</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex: 1,
    },
    topLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 29,
        marginTop: windowHeight * 27,
    },
    addIcon: {
        marginLeft: windowWidth * 191,
        marginTop: windowHeight * 27,
    },
    locationWrap: {
        alignItems: 'center',
        marginTop: windowHeight * 27,
    },
    frame: {
        width: windowWidth * 366,
        height: windowHeight * 412,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
    },
    etcFrame: {
        width: windowWidth * 366,
        height: windowHeight * 678,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
    },
    frameText: {
        color: '#6D6D6D',
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 33,
        marginTop: windowHeight * 19,
    },
    directBtn: {
        width: windowWidth*330,
        height: windowHeight*60,
        backgroundColor: '#525CC9',
        borderRadius: 15,
        marginTop: windowHeight*21,
        marginBottom: windowHeight*150,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    directBtnText: {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 18,
        color: 'white',
    },
})