import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Dimensions } from 'react-native';
import { ParamListBase ,useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;

export default function Folder({ Icon, subTitle, Title, navi }: {Icon:string, subTitle: string, Title: string, navi: string}) {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function handleFolderPress(){
        navigation.navigate('B1Floor');
    };
    return (
        <TouchableOpacity onPress={handleFolderPress}>
            <View style={styles.folderWrap}>
                <View style={styles.folder}>
                    <Text style={styles.folderIcon}>{Icon}</Text>
                    <View style={styles.folderTitleWrap}>
                        <Text style={styles.folderSubTitle}>{subTitle}</Text>
                        <Text style={styles.folderTitle}>{Title}</Text>
                    </View>
                    <View style={styles.folderRightIconWrap}>
                        <EvilIcons style={styles.folderRightIcon} name="chevron-right" color='white' size={40} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
        marginLeft: windowWidth * 280,
    },
    folderRightIcon: {

    },
});
