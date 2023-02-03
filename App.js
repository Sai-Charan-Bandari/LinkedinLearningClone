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
import MenuBar2 from './src/screens/MenuBar2';
import Settings from './src/screens/Settings';
import TopMenuWithVerticalList from './src/screens/TopMenuWithVerticalList';
import Answer from './src/screens/Answer';
import Certificates from './src/screens/Certificates';
import EditWeeklyGoal from './src/screens/EditWeeklyGoal';
import EmptyComp from './src/screens/EmptyComp';
import Downloaded from './src/screens/Downloaded';

const Stack = createNativeStackNavigator()

export default function App() {
  //need to pass this state to all other comps
  const [showMenu,setShowMenu]=useState(true)
  const [menuItem,setMenuItem]=useState(1)
  const [isNotifications,setIsNotifications]=useState(false)
  const [scroll,setScroll]=useState(false)
  useEffect(()=>{
    // console.log('app ',scroll)
  },[scroll])
  useEffect(()=>{
    // setShowMenu(true)
  })

  // NavigationContainer tags did not work if i enclosed them within View tags.Hence i removed outer View tags
  return (
    <>
      <NavigationContainer >
        {/* as i have removed the default navigation header , i used this extra view to create some space at the top */}
        <View style={{marginTop:30}}></View>
        <StatusBar animated={true} backgroundColor='#243763' />
        {showMenu && <MenuBar2 isNotifications={isNotifications}/>}
        {/* <Stack.Navigator initialRouteName='Home' > */}
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
          <Stack.Screen name='Home' component={Home} initialParams={{scroll:scroll}} />
          <Stack.Screen name='MyLearning' component={MyLearning} initialParams={{scroll:scroll}}/>
          <Stack.Screen name='Course' component={Course} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='Topics' component={Topics} />
          <Stack.Screen name='Notifications' component={Notifications} />
          <Stack.Screen name='Profile' component={Profile} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='EditWeeklyGoal' component={EditWeeklyGoal} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='Settings' component={Settings} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='EmptyComp' component={EmptyComp} initialParams={{setShowMenu:setShowMenu}}/>
          <Stack.Screen name='Downloaded' component={Downloaded} initialParams={{setShowMenu:setShowMenu,setMenuItem:setMenuItem,setIsNotifications:setIsNotifications}}/>
          <Stack.Screen name='Answer' component={Answer} />
          <Stack.Screen name='Certificates' component={Certificates} />
          <Stack.Screen name='TopMenuWithVerticalList' component={TopMenuWithVerticalList} initialParams={{setShowMenu:setShowMenu}}/>
        </Stack.Navigator>
        {showMenu && <MenuBar  scroll={scroll} setScroll={setScroll} menuItem={menuItem} setMenuItem={setMenuItem} setIsNotifications={setIsNotifications} isNotifications={isNotifications}/>}
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

{/* <>
     <VideoPlayer video={{uri:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
     autoplay={false}
     defaultMuted={true}
     videoWidth={1500}
     videoHeight={1000}>
      </VideoPlayer> 
    </> */}