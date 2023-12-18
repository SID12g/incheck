import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import BottomTabNavigator from './components/navigator/BottomTabNavigator';
import StackNavigator from './components/navigator/StackNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import MemberChoosePlaceScreen from './screens/member/ChoosePlaceScreen';
import MemberHomeScreen from './screens/member/HomeScreen';
import MemberCheckPeopleScreen from './screens/member/CheckPeopleScreen';
import FolderB1Floor from './screens/member/ChoosePlace/MainBuilding/FolderB1Floor';

const Stack = createStackNavigator()

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="ChoosePlace" component={MemberChoosePlaceScreen} />
        <Stack.Screen name="B1Floor" component={FolderB1Floor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}