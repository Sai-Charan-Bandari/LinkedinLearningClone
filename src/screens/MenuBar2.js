import { StyleSheet, Text, View,Image,TouchableOpacity ,Modal,TextInput, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useState } from 'react'

const SearchModal=({setShowSearch})=>{
    return(
        <View>
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setShowSearch(false)}>
            <Image style={{width:22,height:22,margin:15,borderRadius:10,marginRight:10}} source={{uri: "https://cdn-icons-png.flaticon.com/128/2976/2976252.png"}} />
            </TouchableOpacity>
        <TextInput style={{width:'80%'}} placeholder='Search for skills subjects, or software'></TextInput>
        </View>
        <ScrollView>
            <Text style={{fontWeight:'500'}}>Recent searches</Text>
            <View>
            <Text>Recent searches</Text>

            </View>
        </ScrollView>
        </View>
    )
}

const MenuBar2 = ({isNotifications}) => {
    const navigation = useNavigation()
    const [showSearch,setShowSearch]=useState(false)
  return (
    <View style={{backgroundColor:showSearch ? 'white':'#0077b5',}}>
        {showSearch 
        ? 
        <SearchModal setShowSearch={setShowSearch}/>
        :
        <View style={{display:'flex',flexDirection:'row'}}>
         <Image style={{width:120,height:20,margin:15}} source={{uri: "https://www.ajsnetworking.com/wp-content/uploads/2020/09/linkedin_learning.jpg"}} />
            <TouchableOpacity style={{width:isNotifications ? '50%':'60%'}} onPress={()=>{
                setShowSearch(true)
            }}>
         <Image style={{width:22,height:22,margin:15,borderRadius:10,marginLeft:'auto',marginRight:10}} source={{uri: "https://image.pngaaa.com/560/25560-middle.png"}} />
            </TouchableOpacity>
            {isNotifications && <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
         <Image style={{width:22,height:22,margin:15}} source={{uri: "https://www.iconsdb.com/icons/preview/white/settings-xxl.png"}} />
            </TouchableOpacity>}
            </View>
        }
    </View>
  )
}

export default MenuBar2

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'lightgrey',
        width:400,
        borderWidth:1,
        borderColor:'black',
    }
})