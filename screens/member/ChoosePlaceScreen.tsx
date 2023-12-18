import { Platform, SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';



const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function MemberHomeScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <View>
                <Text style={styles.title}>장소 선택</Text>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Pretendard SemiBold',
        marginLeft: windowWidth*29, 
        marginTop: windowHeight*27,
    },
})