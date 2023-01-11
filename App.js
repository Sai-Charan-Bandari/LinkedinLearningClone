import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import MyLearning from './src/screens/MyLearning';
import Course from './src/screens/Course';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuBar from './src/screens/MenuBar';
import Topics from './src/screens/Topics';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator()

export default function App() {
  // NavigationContainer tags did not work if i enclosed them within View tags.Hence i removed outer View tags
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='MyLearning' component={MyLearning}/>
          <Stack.Screen name='Course' component={Course}/>
          <Stack.Screen name='Topics' component={Topics}/>
          <Stack.Screen name='Notifications' component={Notifications}/>
          <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
        <MenuBar />
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
