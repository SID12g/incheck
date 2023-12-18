import { Platform, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;



export default function MemberHomeScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.topLine}>
                <Text style={styles.title}>장소 선택</Text>
            </View>
            <View style={styles.locationWrap}>
                <View style={styles.frame}>
                    <Text style={styles.frameText}>본관</Text>
                    <View style={styles.folderWrap}>

                        <View style={styles.folder}>
                            <Text style={styles.folderIcon}>🏫</Text>
                            <View style={styles.folderTitleWrap}>
                                <Text style={styles.folderSubTitle}>급식실</Text>
                                <Text style={styles.folderTitle}>B1층</Text>
                            </View>
                            <View style={styles.folderRightIconWrap}>
                                <EvilIcons style={styles.folderRightIcon} name="chevron-right" color='white' size={40} />
                            </View>
                        </View>

                    </View>
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
    folderWrap: {
        alignItems: 'center',
    },
    folder: {
        width: windowWidth * 330,
        height: windowHeight * 75,
        backgroundColor: '#5B84EC',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: windowHeight * 12,
        alignItems: 'center',
    },
    folderIcon: {
        fontSize: 40,
        marginBottom: windowHeight * 10,
        marginLeft: windowWidth * 22,
    },
    folderTitleWrap: {
        marginLeft: windowWidth * 13,
    },
    folderSubTitle: {
        fontSize: 12,
        fontFamily: 'Pretendard-Medium',
        color: '#CBCBCB',
    },
    folderTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
    },
    folderRightIconWrap: {
        position: 'absolute',
        marginLeft: windowWidth*280,
    },
    folderRightIcon: {
        
    },
})