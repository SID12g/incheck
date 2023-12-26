import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from '@react-native-firebase/firestore';
import { LoginUserContext } from "../../store/LoginUser-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function MemberCheckPeopleScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const LoginUserCtx = useContext(LoginUserContext);
    const [documentCount, setDocumentCount] = useState<number>(0);
    const [inClassCount, setInclassCount] = useState<number>(0);
    const [otherCount, setOtherCount] = useState<number>(0);

    const [studentIds, setStudentIds] = useState<string[]>([]);
    const [classStudentIds, setClassStudentIds] = useState<string[]>([]);
    const [outStudentIds, setOutStudentIds] = useState<string[]>([]);
    const [otherStudentIds, setOtherStudentIds] = useState<string[]>([]);
    const FirstNum = Number(LoginUserCtx.studentId[0]) * 1000 + Number(LoginUserCtx.studentId[1]) * 100;
    const LastNum = FirstNum + 100;

    useEffect(() => {
        async function fetchData() {
            const count = await getCountOfDocuments(FirstNum.toString(), LastNum.toString());
            setDocumentCount(count);
        }

        fetchData();
    }, []);

    async function fetchStudents() {
        try {
            const querySnapshot = await firestore()
                .collection('dimigo')
                .where('studentId', '>=', FirstNum.toString())
                .where('studentId', '<', LastNum.toString())
                .get();

            const studentData = querySnapshot.docs.map((doc) => {
                const studentId = doc.data().studentId;
                const inClass = doc.data().location === `${LoginUserCtx.studentId[0]}학년 ${LoginUserCtx.studentId[1]}반`;
                const other = doc.data().subLocation === '교외';

                return {
                    id: studentId,
                    name: `${studentId[2]}${studentId[3]}`,
                    inClass,
                    other,
                };
            });

            setStudentIds(studentData.map((student) => student.id));

            // 학급 인원과 외부 인원으로 분류
            const classStudents = studentData.filter((student) => student.inClass);
            const outStudents = studentData.filter((student) => student.other);
            const otherStudents = studentData.filter((student) => !student.inClass && !student.other);

            setClassStudentIds(classStudents.map((student) => student.id));
            setOutStudentIds(outStudents.map((student) => student.id));
            setOtherStudentIds(otherStudents.map((student) => student.id));

            console.log(studentIds)
            console.log(classStudentIds)
            console.log(outStudentIds)
            console.log(otherStudentIds)

            // 학급 인원 수
            const classCount = classStudents.length;
            setInclassCount(classCount);

            // 교외 인원 수
            const otherCount = outStudents.length;
            setOtherCount(otherCount);

        } catch (error) {
            console.error('Error getting students:', error);
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchStudents();
        });

        return unsubscribe;
    }, [navigation]);

    async function getCountOfDocuments(f: any, l: any) {
        console.log(f);
        try {
            const querySnapshot = await firestore()
                .collection('dimigo')
                .where('studentId', '>=', f)
                .where('studentId', '<', l)
                .get();

            const documentCount = querySnapshot.size;
            console.log('Documents count:', documentCount);
            return documentCount;
        } catch (error) {
            console.error('Error getting documents:', error);
            return 0;
        }
    }

    const renderPersons = (studentIds: string[]) => {
        const persons = [];
        for (let i = 0; i < studentIds.length; i++) {
            const isVacantStudent = studentIds[i] === ''; // Check if the student is vacant
           
                persons.push(
                    <View key={i} style={styles.person}>
                        <Text style={styles.personText}>{`${studentIds[i][2]}${studentIds[i][3]}`}</Text>
                    </View>
                );
            // 5개마다 줄 바꿈
            if ((i + 1) % 5 === 0) {
                persons.push(<View key={`break-${i}`} style={{ width: '100%', height: 10 }} />);
            }
        }
        return persons;
    };

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.topLine}>
                    <Text style={styles.title}>{LoginUserCtx.studentId[0]}학년 {LoginUserCtx.studentId[1]}반 인원 현황</Text>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>현재 인원</Text>
                        <View style={styles.NumPeopleWrap}>
                            <NumPeople Content="총원" Pnumber={documentCount} />
                            <NumPeople Content="현원" Pnumber={documentCount-otherCount} />
                            <NumPeople Content="결원" Pnumber={otherCount} />
                        </View>
                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>{LoginUserCtx.studentId[0]}학년 {LoginUserCtx.studentId[1]}반</Text>

                        <View style={styles.personsWrap}>
                            {renderPersons(classStudentIds)}
                        </View>
                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>기타</Text>
                        <View style={styles.personsWrap}>
                        {renderPersons(otherStudentIds)}
                        </View>
                    </View>
                </View>
                <View style={styles.locationWrap}>
                    <View style={styles.frame}>
                        <Text style={styles.frameText}>결원</Text>
                        <View style={styles.personsWrap}>
                            {renderPersons(outStudentIds)}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function NumPeople({ Content, Pnumber }: { Content: string, Pnumber: number }) {
    return (
        <View style={styles.numberPeople}>
            <Text style={styles.numText}>{Content}</Text>
            <Text style={styles.numText}>{Pnumber}</Text>
        </View>
    );
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
        marginVertical: windowHeight * 8
    },
    personsWrap: {
        width: windowWidth * 300,
        flexDirection: 'row',
        alignSelf: 'center',
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