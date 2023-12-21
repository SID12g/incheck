import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, View } from 'react-native';
import BottomTabNavigator from './components/navigator/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import MemberChoosePlaceScreen from './screens/member/ChoosePlaceScreen'; 
import LoginScreen from './screens/initial/LoginScreen';
import LoginUserContext from './store/LoginUser-context';
import AddUserInitialInformationScreen from './screens/initial/AddUserInitialInformationScreen';
import FolderToLocationScreen from './screens/member/ChoosePlace/FolderToLocationScreen';
import MemberHomeScreen from './screens/member/HomeScreen';

const Stack = createStackNavigator()

const windowWidth = Dimensions.get('window').width / 393;
const windowHeight = Dimensions.get('window').height / 852;
const first = true

const LoginUser = { name: 'userName', grade: 1, class: 4, number: 27, location: '104class' }

export default function App() {
  return (
    false ?
      (
        // <LoginScreen />
        // <AddUserInitialInformationScreen />
        <FolderToLocationScreen />
      ) :
      (
        <LoginUserContext>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              {/* <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='AddUserInformation' component={AddUserInitialInformationScreen} /> */}
              <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
              <Stack.Screen name="Home" component={MemberHomeScreen} />
              <Stack.Screen name="ChoosePlace" component={MemberChoosePlaceScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </LoginUserContext>
      )
  );
}