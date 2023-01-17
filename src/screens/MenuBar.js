import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'


const MenuBar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Home')}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/263/263115.png"}} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Topics')}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/6583/6583140.png"}} />
        <Text>Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Notifications')}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3602/3602145.png"}} />
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('MyLearning')}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9283/9283030.png"}} />
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