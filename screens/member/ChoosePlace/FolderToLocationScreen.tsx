import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { Dimensions } from 'react-native';
import LocationSelectButton from "../../../components/member/ChoosePlace/LocationSelectButton";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;


export default function FolderToLocationScreen(){
    const route = useRoute()
    const data: any = route.params
    const [building, setBuilding] = useState(0)
    useEffect(()=>{
        if(data.Building == '본관') {
            setBuilding(0)
        } else {
            setBuilding(1)
        }
        
    },[])
    
    
    const LocationsAndIcons = [
        [
            [['교무실', '🗂️'], ['보건실', '🏥'], ['행정실', '🖨️'], ['학생회실', '📊'], ['교장실', '👨‍🏫'], ['물, 화장실', '🚰'],],
            [['2학년 1반', '🏫'], ['2학년 2반', '🏫'], ['2학년 3반', '🏫'], ['2학년 4반', '🏫'], ['2학년 5반', '🏫'], ['2학년 6반', '🏫'], ['물, 화장실', '🚰'], ['특별실', '⭐️']],
            [['1학년 1반', '🏫'], ['1학년 2반', '🏫'], ['1학년 3반', '🏫'], ['1학년 4반', '🏫'], ['1학년 5반', '🏫'], ['1학년 6반', '🏫'], ['물, 화장실', '🚰'], ['특별실', '⭐️']],
            [[],]
        ],
        [
            [['교무실', '🗂️'], ['세미나실', '📅'], ['다목적실', '🖥️'], ['매점', '🍭'], ['물, 화장실', '🚰'],],
            [['3학년 1반', '🏫'], ['3학년 2반', '🏫'], ['3학년 3반', '🏫'], ['3학년 4반', '🏫'], ['3학년 5반', '🏫'], ['3학년 6반', '🏫'], ['물, 화장실', '🚰'], ['특별실', '⭐️']],
            [['열람실', '📝'], ['물, 화장실', '🚰'],],
            [['대강당', '🎬'], ['물, 화장실', '🚰'],],
        ],
        []
    ]

    return(
        <SafeAreaView style={styles.root}>
           <ScrollView>
           <Text style={styles.header}>{`${data.Building} ${data.Title}`}</Text>
            {
                LocationsAndIcons[building][Number(data.Title[0])-1].map((a, i)=>{
                    return(
                        <LocationSelectButton key={i} Icon={a[1]} subTitle={`${data.Building} ${data.Title}`} Title={a[0]} />
                    )
                })
               
                
            }
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Pretendard-SemiBold',
        marginLeft: windowWidth * 29,
        marginTop: windowHeight * 27,
    },
})