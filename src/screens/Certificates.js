import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal } from 'react-native'
import React from 'react'

const Certificates = ({setShowCertificate}) => {
  return (
    <View>
        {/* top menu */}
    <View style={[{backgroundColor:'#0077b5',padding:10},styles.container]}>
        <TouchableOpacity  onPress={()=>{setShowCertificate(false)}}>
      {/* flipped imgae horizontally */}
      <Image style={{height:30,width:30,transform:[{scaleX:(-1)}] }} source={{uri:"https://cdn-icons-png.flaticon.com/128/7466/7466366.png"}}></Image>
    </TouchableOpacity>
      <Text style={{color:'white',fontSize:19,fontWeight:'500'}}>Certificates of completion</Text>
    </View>
    {/* body */}
    <View style={[styles.container,{marginTop:10}]}>
      <Image style={{height:30,width:30}} source={{uri:"https://cdn-icons-png.flaticon.com/128/4157/4157036.png"}}></Image>
        <View>
            <Text>Linkedin Learning Certificate</Text>
            <Text>Complete the course to earn this.</Text>
        </View>
    {/* download option */}
    <TouchableOpacity  onPress={()=>{setShowCertificate(false)}}>
      <Image style={{height:30,width:30}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9429/9429043.png"}}></Image>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Certificates

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
})