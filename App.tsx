import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, View } from 'react-native';
import BottomTabNavigator from './components/navigator/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import MemberChoosePlaceScreen from './screens/member/ChoosePlaceScreen';
import FolderB1Floor from './screens/member/ChoosePlace/MainBuilding/FolderB1Floor';
import LoginScreen from './screens/initial/LoginScreen';

const Stack = createStackNavigator()

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;
const first = true

export default function App() {
  return (
    true ? 
    (
      <LoginScreen />
    ) : (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="ChoosePlace" component={MemberChoosePlaceScreen} />
        <Stack.Screen name="B1Floor" component={FolderB1Floor} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
}