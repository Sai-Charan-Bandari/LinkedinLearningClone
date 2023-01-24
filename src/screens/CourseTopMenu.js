import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal } from 'react-native'
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const CourseTopMenu = ({setShowCertificate}) => {
    const nav=useNavigation()
    const [switchVal,setSwitchVal]=useState(false)
    const [showModal,setShowModal]=useState(false)
    
  return (
    <View style={[styles.container,{position:'absolute',top:10,width:'100%'}]}>
    <TouchableOpacity  onPress={()=>{nav.goBack()}}>
      {/* flipped imgae horizontally */}
      <Image style={{height:30,width:30,transform:[{scaleX:(-1)}] }} source={{uri:"https://cdn-icons-png.flaticon.com/128/7466/7466366.png"}}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={[{marginLeft:'auto'},styles.container]} onPress={()=>setSwitchVal(!switchVal)}>
    <Text style={{color:'white'}}>Audio only</Text>
    <Switch style={{borderColor:'black',borderWidth:2,height:25}} onValueChange={()=>setSwitchVal(!switchVal)} value={switchVal}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginRight:10}} onPress={()=>setShowModal(true)}>
      <Image style={{height:20,width:20}} source={{uri:"https://cdn-icons-png.flaticon.com/128/482/482620.png"}}></Image>
    </TouchableOpacity>
    {showModal && 
    <Modal animationType='slide' transparent={true}>
        <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>setShowModal(false)}>

        <View style={{borderRadius:5,backgroundColor:'white',width:'60%',padding:10,marginLeft:'auto'}}>
            <TouchableOpacity style={{margin:5}} onPress={()=>{setShowCertificate(true);setShowModal(false)}}>
                <Text>Show Certificates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:5}}>
                <Text>Add to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:5}}>
                <Text>Streaming Quality: High</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:5}}>
                <Text>Download Quality: Medium</Text>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
        </Modal>}
    </View>
  )
}

export default CourseTopMenu

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
    },
})