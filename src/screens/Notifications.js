import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Button,Alert,Image,Switch, Modal} from 'react-native'
import React, { useState } from 'react'
import NotificationsArray from '../data/NotificationsArray'
import { useNavigation } from '@react-navigation/native'

const Notifications = () => {
  const [showNotifModal,setShowNotifModal]=useState('NULL')
  const [nArray,setNArray]=useState(NotificationsArray)
  return (
    <View>
      {/* <ActivityIndicator></ActivityIndicator> */}
      <FlatList data={nArray} renderItem={(ele)=>
      <NotifItem item={ele.item} setShowNotifModal={setShowNotifModal} />
    } />
      {showNotifModal!='NULL' && <NotifModal nArray={nArray} setNArray={setNArray} showNotifModal={showNotifModal} setShowNotifModal={setShowNotifModal}/>}
    </View>
  )
}

const NotifItem=({item,setShowNotifModal})=>{
const nav=useNavigation()
return(
<TouchableOpacity style={[{borderBottomWidth:1,borderColor:'lightgrey',padding:20},styles.container]} onPress={()=>nav.navigate('Course',{data:item.course})}>
<Image style={{width:40,height:40,margin:10,marginLeft:5,borderWidth:2,borderRadius:5,borderColor:'lightblue'}} source={{uri:'https://cdn-icons-png.flaticon.com/128/1011/1011528.png'}} />
        <Text style={{fontSize:14,width:280,marginLeft:5}}>{item.normalText} <Text style={{fontSize:14,fontWeight:'500'}}>{item.course.name}</Text></Text>
        <View >
          <Text>{item.time}</Text>
          <TouchableOpacity onPress={()=>setShowNotifModal(item.course.name)}>
          <Image style={{height:30,width:30}} source={{uri:'https://cdn-icons-png.flaticon.com/128/4947/4947596.png'}}></Image>
          </TouchableOpacity>
        </View>

</TouchableOpacity>
)
}

const NotifModal=({setShowNotifModal,showNotifModal,nArray,setNArray})=>{
  let [save,setSave]=useState(false)
  return(
<Modal transparent={true} animationType='slide'>
<TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>setShowNotifModal('NULL')}>
  <View style={{backgroundColor:'white',marginTop:'auto',marginBottom:70}}>

    <View style={styles.container}>
    <TouchableOpacity style={[styles.container,{marginLeft:10}]} onPress={()=>setSave(!save)}>
        {save ? <Image style={{marginRight:10,width:20,height:20,}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} />
              : <Image style={{marginRight:10,width:20,height:20,}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} />}
        <View>
        <Text>{!save ? 'Save' : 'Unsave'}</Text>
        <Text>Save this content for late</Text>
        </View>
        </TouchableOpacity>
    </View>

    <View style={styles.container}>
    <TouchableOpacity style={[styles.container,{marginLeft:10}]} onPress={()=>{
      let k=nArray.filter((e)=>e.course.name!=showNotifModal)
      // console.log(k.length)
      setNArray(k)
      setShowNotifModal('NULL')
      Alert.alert('Deleted notification')
    }}>
      <Image style={{marginRight:10,width:20,height:20,}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3096/3096673.png"}} />
        <View>
        <Text>Delete</Text>
        <Text>Delete the notification</Text>
        </View>
        </TouchableOpacity>
    </View>

    <View style={styles.container}>
    <TouchableOpacity style={[styles.container,{marginLeft:10}]} onPress={()=>{
      let k=nArray.filter((e)=>e.course.name!=showNotifModal)
      // console.log(k.length)
      setNArray(k)
      setShowNotifModal('NULL')
      Alert.alert('Notification turned off')
    }}>
    <Image style={{marginRight:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2529/2529529.png"}} />
        <View>
        <Text>Turn off</Text>
        <Text>Stop receiving notifications like this</Text>
        </View>
        </TouchableOpacity>
    </View>

  </View>
</TouchableOpacity>
</Modal>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container:{
    // borderColor:'black',
    // borderWidth:2,
    display:'flex',
    flexDirection:'row',
    padding:10
},
})