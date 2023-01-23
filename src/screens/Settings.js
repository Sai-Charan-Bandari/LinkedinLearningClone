import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const Settings = (props) => {
    useEffect(()=>{
    //called when Settings screen is created
    props.route.params.setShowMenu(false);
},[])

//called when Settings screen is destroyed
useEffect(()=>{
          //this params tells whether the settings comp was called by Profile or by MenuBar2
          //if it is called by Profile then we should not display Menu bars on destroying this Settings screen
          if(!props.route.params.isProfile) 
        return ()=>{
        props.route.params.setShowMenu(true)
          // console.log('destroyed')
      }},[])
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})