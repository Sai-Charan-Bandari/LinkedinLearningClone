import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// THIS IS THE TOP MENU FOR SUBCOMPONENTS
//WHICH DONOT HAVE MENUBARS
//THIS MENU PROVIDES A NAVIGATE BACK BUTTON AND NAME OF THE COMP
const TopMenu = ({name}) => {
  return (
    <View style={[{backgroundColor:'#0077b5',padding:10},styles.container]}>
        <TouchableOpacity onPress={()=>nav.goBack()}>
      {/* flipped imgae horizontally */}
      <Image style={{height:30,width:30,transform:[{scaleX:(-1)}] }} source={{uri:"https://cdn-icons-png.flaticon.com/128/7466/7466366.png"}}></Image>
    </TouchableOpacity>
      <Text style={{color:'white',fontSize:19,fontWeight:'500'}}>{name}</Text>
    </View>
  )
}

export default TopMenu

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        padding:10
    },
})