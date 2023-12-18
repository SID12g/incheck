import { createStackNavigator } from "@react-navigation/stack";
import MemberChoosePlaceScreen from "../../screens/member/ChoosePlaceScreen";
import FolderB1Folder from "../../screens/member/ChoosePlace/FolderB1Floor";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator  from "./BottomTabNavigator";

const Stack = createStackNavigator()
export default function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
            <Stack.Screen name="ChoosePlace" component={MemberChoosePlaceScreen} />
            <Stack.Screen name="B1Floor" component={FolderB1Folder} />
        </Stack.Navigator>
    )
}