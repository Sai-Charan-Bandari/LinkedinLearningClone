import { Button, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React, { useState ,useEffect} from 'react'
import TopMenu from './TopMenu'
import VerticalList from './VerticalList'
import { downloadsArr } from '../data/Arrays'

// by default showMenu is false here..so we need not use setShowMenu in useEffect
// but when we navigate to Topics using Button then we need to setShowMenu to true

const Downloaded = (props) => {
    const [dArr,setDArr]=useState(downloadsArr)
  return (
    <View>
        <TopMenu name='Downloaded' />
        {/* this button needs to be removed,add a functionality to the vertical list to delete the items of the list */}
        <Button title='Delete downloads' onPress={()=>setDArr([])}/>
        { dArr.length>0 
        ? 
        <VerticalList coursesType='' showFilter={false} courseArr={dArr} showPopular={false}/>
        :
        <View style={{alignSelf:'center'}} >
            <Image style={{width:50,height:50,alignSelf:'center',marginVertical:20}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9153/9153957.png"}} />
            <Text style={{fontWeight:'500',fontSize:16,width:300,marginHorizontal:'auto',marginLeft:'auto'}}>Courses and videos that you download will appear here.</Text>
            <TouchableOpacity style={{borderWidth:1,borderColor:'#0077b5',marginVertical:20,padding:10}} onPress={()=>{
              // when we navigate to Topics using Button then we need to setShowMenu to true
              //when navigating to Topics the icon of MenuBar remains at the source of the Settings comp (either Notifications/MyLearning)
              //so we need to manually update the icon of MenuBar from either Notifications/MyLearning to Topics by calling setMenuItem
              //also the MenuBar2 is showing settings option...so we need to disable it
                props.route.params.setShowMenu(true)
                props.route.params.setMenuItem(2)
                props.route.params.setIsNotifications(false)
                props.navigation.navigate('Topics')
                }}>
            <Text style={{fontWeight:'500',fontSize:17,color:'#0077b5'}}>FIND SOMETHING TO DOWNLOAD</Text>
            </TouchableOpacity>
        </View>
        }
    </View>
  )
}

export default Downloaded

const styles = StyleSheet.create({})