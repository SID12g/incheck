import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

function NumPeople({ Content, Pnumber }: { Content: string, Pnumber: number }) {
    return (
        <View style={styles.numberPeople}>
            <Text style={styles.numText}>{Content}</Text>
            <Text style={styles.numText}>{Pnumber}</Text>
        </View>
    )
}

export default function MemberCheckPeopleScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.topLine}>
                    <Text style={styles.title}>1학년 4반 인원 현황</Text>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>현재 인원</Text>
                        <View style={styles.NumPeopleWrap}>
                            <NumPeople Content="총원" Pnumber={32} />
                            <NumPeople Content="현원" Pnumber={28} />
                            <NumPeople Content="결원" Pnumber={4} />
                        </View>
                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>1학년 4반</Text>

                        <View style={styles.personsWrap}>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>

                        </View>

                        <View style={styles.personsWrap}>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>

                        </View>

                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>기타</Text>


                        <View style={styles.personsWrap}>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>
                            <View style={styles.person}>
                                <Text style={styles.personText}>1</Text>
                            </View>

                        </View>


                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>결원</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
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
    locationWrap: {
        alignItems: 'center',
        marginTop: windowHeight * 27,
    },
    frame: {
        width: windowWidth * 366,
        paddingBottom: windowHeight * 23,
        backgroundColor: '#EBECF5',
        borderRadius: 25,
    },
    frameText: {
        color: '#6D6D6D',
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 33,
        marginTop: windowHeight * 19,
        marginBottom: windowHeight * 2,
    },
    NumPeopleWrap: {
        alignItems: 'center',

    },
    numberPeople: {
        flexDirection: 'row',
        width: windowWidth * 145,
    },
    numText: {
        fontSize: 24,
        fontFamily: 'Pretendard-SemiBold',
        color: 'black',
        marginHorizontal: windowWidth * 16,
        marginVertical: windowHeight * 8,
    },
    personsWrap: {
        width: windowWidth * 295,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'red',
        marginTop: windowHeight * 6,
    },
    person: {
        marginHorizontal: windowWidth * 10,
        width: windowWidth * 40,
        height: windowHeight * 40,
        borderRadius: 100,
        borderColor: '#525CC9',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    personText: {
        fontSize: 16,
        fontFamily: 'Pretendard-Regular',
        color: 'black',
    },
})