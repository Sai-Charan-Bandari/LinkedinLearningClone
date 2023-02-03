import { StyleSheet, Text, TouchableOpacity, View,Image,FlatList, Modal,Button, Alert } from 'react-native'
import React,{useState} from 'react'

const SettingsModal = ({arr,setShowSModal,title}) => {
    const [toggle,setToggle]=useState(0)
  return (
            <Modal animationType='slide' transparent={true}>
            <TouchableOpacity style={{backgroundColor:'#00000080',width:'100%',height:'100%'}} onPress={()=>setShowSModal(false)}>
                {/* this view acts as the card view.
                I placed an empty onPress in order to make sure that the card did not close when touched due to 1st touchableopacity */}
                <View style={{backgroundColor:'white',marginTop:'auto',marginBottom:'auto',marginHorizontal:20,padding:10}} > 

                <Text style={{fontSize:19,fontWeight:'500',margin:10}}>{title}</Text>

                <FlatList data={arr} renderItem={(ele)=>
                <TouchableOpacity style={[styles.container,{paddingLeft:5,paddingVertical:8}]} onPress={()=>{
                    setToggle(ele.index)
                    setShowSModal(false)}}>
                <Image style={{width:20,height:20,alignSelf:'center',marginLeft:10}} source={{uri: toggle==ele.index ? "https://i.stack.imgur.com/OWcpX.png" : "https://i.stack.imgur.com/Kn8zA.png"}} />
                <Text style={{fontSize:18,marginLeft:20,marginRight:20}}>{ele.item}</Text>
                </TouchableOpacity>
                }
                ></FlatList>

                <TouchableOpacity style={{marginLeft:'auto',marginRight:10,marginTop:10}} onPress={()=>setShowSModal(false)}>
                    <Text style={{color:'#0077b5'}}>CANCEL</Text>
                </TouchableOpacity >
                
                </View>
            </TouchableOpacity>
            </Modal>
        )
    }

export default SettingsModal

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        marginTop:8
    },
})