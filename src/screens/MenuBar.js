import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useEffect, useState } from 'react'


const MenuBar = ({setIsNotifications,isNotifications,menuItem,setMenuItem,setScroll,scroll}) => {

    const navigation = useNavigation()
    
    // 1->Home
    //2->Topics
    //3->Notifications
    //4->MyLearning
    // console.log(menuItem)
    function checkIsNotifications(){
    if(isNotifications==true) //other button is clicked
        setIsNotifications(false)
    }
    function checkIsNotifications2(){
       //notificcations button is clicked
        if( isNotifications==false)
        setIsNotifications(true)
    }
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={()=>{
        if(menuItem==1)
        setScroll(!scroll)
        else
        setMenuItem(1);checkIsNotifications();navigation.navigate('Home')
        }}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==1 ? "https://cdn-icons-png.flaticon.com/128/9187/9187555.png" : "https://cdn-icons-png.flaticon.com/128/263/263115.png"}} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(2);checkIsNotifications();navigation.navigate('Topics')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==2 ? "https://cdn-icons-png.flaticon.com/128/535/535146.png" : "https://cdn-icons-png.flaticon.com/128/6583/6583140.png"}} />
        <Text>Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{setMenuItem(3);checkIsNotifications2();navigation.navigate('Notifications')}}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: menuItem==3 ? "https://cdn-icons-png.flaticon.com/128/3177/3177336.png" : "https://cdn-icons-png.flaticon.com/128/3602/3602145.png"}} />
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>{
        if(menuItem==4)
        setScroll(!scroll)
        else
        setMenuItem(4);checkIsNotifications();navigation.navigate('MyLearning',{setMenuItem:setMenuItem})}}>
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
        justifyContent:'space-evenly',
        paddingVertical:10
    },
    option:{
        // margin:10,
    }
})