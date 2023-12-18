import { Platform, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import Folder from "../../components/member/ChoosePlace/Folder";
import StackNavigator from "../../components/navigator/StackNavigator";


const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;



export default function MemberChoosePlaceScreen() {
    return (
       
        <SafeAreaView style={styles.root}>
            <View style={styles.topLine}>
                <Text style={styles.title}>장소 선택</Text>
            </View>
            <View style={styles.locationWrap}>
                <View style={styles.frame}>
                    <Text style={styles.frameText}>본관</Text>
                    <Folder Icon='🏫' subTitle='급식실' Title='B1층' navi='B1Floor' />
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
    frameText: {
        color: '#6D6D6D',
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 33,
        marginTop: windowHeight * 19,
    },
    
})