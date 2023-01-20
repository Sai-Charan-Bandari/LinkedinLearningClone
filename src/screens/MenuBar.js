import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useState } from 'react'


const MenuBar = () => {
    const navigation = useNavigation()
    const [menuItem,setMenuItem]=useState(1)
    // 1->Home
    //2->Topics
    //3->Notifications
    //4->MyLearning
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(1);navigation.navigate('Home')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==1 ? "https://cdn-icons-png.flaticon.com/128/9187/9187555.png" : "https://cdn-icons-png.flaticon.com/128/263/263115.png"}} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(2);navigation.navigate('Topics')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==2 ? "https://cdn-icons-png.flaticon.com/128/535/535146.png" : "https://cdn-icons-png.flaticon.com/128/6583/6583140.png"}} />
        <Text>Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(3);navigation.navigate('Notifications')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==3 ? "https://cdn-icons-png.flaticon.com/128/3177/3177336.png" : "https://cdn-icons-png.flaticon.com/128/3602/3602145.png"}} />
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(4);navigation.navigate('MyLearning')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==4 ? "https://cdn-icons-png.flaticon.com/128/9433/9433739.png" : "https://cdn-icons-png.flaticon.com/128/9283/9283030.png"}} />
        <Text>My Learning</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'lightblue',
        
    },
    option:{
        margin:10,
    }
})