import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal } from 'react-native'
import React from 'react'
import TopMenu from './TopMenu'

const Certificates = ({setShowCertificate}) => {
  return (
    <View>
        {/* top menu */}
    <TopMenu name='Certificates of completion' />
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