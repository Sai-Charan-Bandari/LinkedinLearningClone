import { StatusBar } from 'expo-status-bar';
import {React,useEffect,useState} from 'react';
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
  //need to pass this state to all other comps
  const [showMenu,setShowMenu]=useState(true)
  const [menuItem,setMenuItem]=useState('Home')
  useEffect(()=>{
    if(menuItem=='Notifications')
    console.log('changed ',menuItem)
    else if(menuItem=='Topics')
    console.log('changed to topics')
  },[menuItem])
  useEffect(()=>{
    // setShowMenu(true)
  })

  // NavigationContainer tags did not work if i enclosed them within View tags.Hence i removed outer View tags
  return (
    <>
      <NavigationContainer >
        {/* as i have removed the default navigation header , i used this extra view to create some space at the top */}
        <View style={{marginTop:30}}></View>
        {/* <Stack.Navigator initialRouteName='Home' > */}
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
          <Stack.Screen name='Home' component={Home} initialParams={{setMenuItem:setMenuItem}}/>
          <Stack.Screen name='MyLearning' component={MyLearning} initialParams={{setMenuItem:setMenuItem}}/>
          <Stack.Screen name='Course' component={Course} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='Topics' component={Topics} initialParams={{setMenuItem:setMenuItem}}/>
          <Stack.Screen name='Notifications' component={Notifications} initialParams={{setMenuItem:setMenuItem}}/>
          <Stack.Screen name='Profile' component={Profile} initialParams={{setShowMenu:setShowMenu}}/>
        </Stack.Navigator>
        {showMenu && <MenuBar menuItem={menuItem}/>}
      </NavigationContainer>
      {/* MenuBar cannot be placed outside NavigationContainer bcoz it will not have access to screens/routes */}
    </>
   
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
