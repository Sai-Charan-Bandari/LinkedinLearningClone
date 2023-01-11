import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'


const MenuBar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Home')}>
        {/* <Image style={{width:20,height:20}} source={{uri:}} /> */}
        
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Topics')}>
        {/* <Image style={{width:20,height:20}} source={{uri:}} /> */}
        <Text>Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Notifications')}>
        {/* <Image style={{width:20,height:20}} source={{uri:}} /> */}
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('MyLearning')}>
        {/* <Image style={{width:20,height:20}} source={{uri:}} /> */}
        <Text>My Learning</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row'
    },
    option:{
        margin:10,
    }
})