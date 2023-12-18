import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function LocationSelectButton({ Icon, subTitle, Title, navi }: { Icon: string, subTitle: string, Title: string, navi: string }) {
    return (

        <View style={styles.locationWrap}>
            <View style={styles.location}>
                <Text style={styles.locationIcon}>{Icon}</Text>
                <View style={styles.locationTitleWrap}>
                    <Text style={styles.locationSubTitle}>{subTitle}</Text>
                    <Text style={styles.locationTitle}>{Title}</Text>
                </View>
                <View style={styles.starAndBtnWrap}>
                    <TouchableOpacity>
                        <Fontawesome style={styles.starBtn} name="star-o" color='white' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.selectBtn}>
                            <Text style={styles.selectBtnText}>선택</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    locationWrap: {
        alignItems: 'center',
    },
    location: {
        width: windowWidth * 330,
        height: windowHeight * 75,
        backgroundColor: '#5B84EC',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: windowHeight * 12,
        alignItems: 'center',
    },
    locationIcon: {
        fontSize: 40,
        marginBottom: windowHeight * 10,
        marginLeft: windowWidth * 22,
    },
    locationTitleWrap: {
        marginLeft: windowWidth * 13,
    },
    locationSubTitle: {
        fontSize: 12,
        fontFamily: 'Pretendard-Medium',
        color: '#CBCBCB',
    },
    locationTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: 'white',
    },
    starAndBtnWrap: {
        position: 'absolute',
        marginLeft: windowWidth * 212,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    starBtn: {
        marginRight: windowWidth*10,
    },
    selectBtn: {
        width: windowWidth * 72,
        height: windowHeight * 38,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectBtnText: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Pretendard-SemiBold'
    },
});
