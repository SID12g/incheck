import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingComponent from "../../components/member/SettingScreen/SettingComponent";
import UserInformation from "../../components/member/SettingScreen/UserInformation";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function MemberSettingScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.root}>
                <View>
                    <View style={styles.topLine}>
                        <Text style={styles.title}>설정</Text>
                        <TouchableOpacity>
                            <MaterialIcons style={styles.logoutIcon} name="logout" color='#6D6D6D' size={30} />
                        </TouchableOpacity>
                    </View>
                    <UserInformation />
                    <SettingComponent />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        width: windowWidth * 393,
        height: windowHeight * 852,
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
    logoutIcon: {
        marginLeft: windowWidth * 253,
        marginTop: windowHeight * 31,
    },
})