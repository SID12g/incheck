import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ChoosePlaceScreen from './screens/ChoosePlaceScreen';
import CheckPeopleScreen from './screens/CheckPeopleScreen';
import Fontawesome from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width/393;
const windowHeight = Dimensions.get('window').height/852;

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          height: windowHeight*91,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: 'black',
          borderColor: 'black'          
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor:'white',
        tabBarActiveBackgroundColor: '#525CC9',
        tabBarItemStyle:{
          marginLeft: windowWidth*17,
          marginRight: windowWidth*17,
          marginTop: windowHeight*4,
          width: windowWidth*64,
          height: windowHeight*64,
          borderRadius: 100,
        },
      }}>
        <Tab.Screen 
        name="ChoosePlace" 
        component={ChoosePlaceScreen} 
        options={{
         
          tabBarIcon: ({color, size}) => (
            <Fontawesome name="map-pin" color={color} size={size} />
          ),
        }} />
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen 
        name="CheckPeople" 
        component={CheckPeopleScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="bar-graph" color={color} size={size} />
          ),
        }} />
        <Tab.Screen 
        name="Setting" 
        component={SettingScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="three-bars" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}