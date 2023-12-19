import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function UserInformation() {
    return (
        <View>
            <View style={styles.profileWrap}>
                <View style={styles.profileImg}></View>
                <View style={styles.textWrap}>
                    <Text style={styles.userName}>조성민</Text>
                    <Text style={styles.userEmail}>csm1219csm1219@gmail.com</Text>
                </View>
            </View>
            <View style={styles.userHomeTownWrap}>
                <Text style={styles.frameText}>소속</Text>
                <View style={styles.userHomeTown}>
                    <Text style={styles.homeTownTitle}>소속</Text>
                    <Text style={styles.homeTownContent}>1학년 4반</Text>
                </View>
                <View style={styles.userHomeTown}>
                    <Text style={styles.homeTownTitle}>번호</Text>
                    <Text style={styles.homeTownContent}>27번</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileWrap: {
        alignSelf: 'center',
        width: windowWidth * 366,
        height: windowHeight * 108,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
        flexDirection: 'row',
        marginTop: windowHeight * 22,
    },
    profileImg: {
        width: windowWidth * 70,
        height: windowHeight * 70,
        backgroundColor: 'red',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: windowWidth * 15,
        marginTop: windowHeight * 19,
    },
    textWrap: {
        width: windowWidth * 209,
        height: windowHeight * 55,
        marginTop: windowHeight * 31,
        marginLeft: windowWidth * 15,
    },
    userName: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
        color: 'black',
    },
    userEmail: {
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
        color: '#6D6D6D',
        marginTop: windowHeight * 3
    },
    userHomeTownWrap: {
        width: windowWidth * 366,
        height: windowHeight * 144,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: windowHeight * 20,
    },
    frameText: {
        color: '#6D6D6D',
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 33,
        marginTop: windowHeight * 19,
    },
    userHomeTown: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: windowWidth * 177,
        height: windowHeight * 29,
        marginTop: windowHeight * 12,
    },
    homeTownTitle: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
        color: 'black',
        marginRight: windowWidth * 59,
    },
    homeTownContent: {
        fontSize: 20,
        fontFamily: 'Pretendard-SemiBold',
        color: 'black',
    },
})