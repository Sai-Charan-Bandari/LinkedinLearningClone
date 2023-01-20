import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const Settings = (props) => {
    useEffect(()=>{
    //called when Settings screen is created
    props.route.params.setShowMenu(false);
},[])

useEffect(()=>{
          //called when Settings screen is destroyed
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