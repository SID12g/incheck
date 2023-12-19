import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function SettingComponent() {
    function openGithub(){
        Linking.openURL('https://github.com/SID12g/incheck')
    }
    return (
        <View>
             <TouchableOpacity>
                        <View style={styles.directBtn}>
                            <Feather style={styles.directIcon} name='external-link' color='black' size={24} />
                            <Text style={styles.directText}>인체크 사용방법 확인하기</Text>
                        </View>
                    </TouchableOpacity>
            <TouchableOpacity onPress={openGithub}>
                <View style={styles.setComponent}>
                    <View style={styles.setComponentTextWrap}>
                        <FontAwesome style={styles.setComponentIcon} name='github' color='black' size={30} />
                        <Text style={styles.setComponentText}>소스 코드 확인 하기</Text>
                    </View>
                    <Feather style={styles.setComponentArrow} name="chevron-right" color='black' size={24} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.setComponent}>
                    <View style={styles.setComponentTextWrap}>
                        <MaterialCommunityIcons style={styles.setComponentIcon} name='information-outline' color='black' size={30} />
                        <Text style={styles.setComponentText}>앱 정보</Text>
                    </View>
                    <Feather style={styles.setComponentArrow} name="chevron-right" color='black' size={24} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    directBtn: {
        width: windowWidth * 366,
        height: windowHeight * 60,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
        marginTop: windowHeight * 20,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    directIcon: {
        marginRight: windowWidth * 17,
        marginLeft: windowWidth * -30,
    },
    directText: {
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
        color: 'black',
        marginRight: windowWidth * 59,
    },
    setComponent: {
        width: windowWidth * 393,
        height: windowHeight * 60,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: windowHeight * 20,
    },
    setComponentTextWrap: {
        width: windowWidth * 290,
        height: windowHeight * 30,
        flexDirection: 'row',
        marginTop: windowHeight * 15,
        marginLeft: windowWidth * 47,
    },
    setComponentIcon: {
        
    },
    setComponentText: {
        fontSize: 16,
        fontFamily: 'Pretendard-Medium',
        color: 'black',
        marginLeft: windowWidth * 11,
        marginTop: windowHeight * 4,
    },
    setComponentArrow: {
        alignSelf: 'center',
    },
})