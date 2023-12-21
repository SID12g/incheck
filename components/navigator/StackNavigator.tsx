import { createStackNavigator } from "@react-navigation/stack";
import MemberChoosePlaceScreen from "../../screens/member/ChoosePlaceScreen";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator  from "./BottomTabNavigator";

const Stack = createStackNavigator()
export default function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
            <Stack.Screen name="ChoosePlace" component={MemberChoosePlaceScreen} />
        </Stack.Navigator>
    )
}