import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

const List = (props) => {
    //props will contain showSeeAll,arr,heading

    const navigtion = useNavigation()
  return (
    <View style={styles.list}>
      <View style={styles.container}>
            <Text style={styles.heading}>{props.heading}</Text>
            {props.showSeeAll && 
            <TouchableOpacity style={styles.seeall}>
            <Text style={{color:'blue'}}>SEE ALL ({props.arr.length})</Text>
            </TouchableOpacity>}
      </View>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={props.arr} renderItem={(ele)=>
            <TouchableOpacity style={{margin:20,height:150,width:250}}  onPress={()=>navigtion.navigate('Course',{data:ele.item})}>
                <Image style={{height:'100%',width:'100%'}} source={{uri:ele.item.image}}></Image>
                <Text>COURSE</Text>
                <Text style={{width:'100%'}}>{ele.item.name}</Text>
            </TouchableOpacity>
        }></FlatList>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
list:{
    // this style is used in the root View tag to check the boundaries of each List component
    // borderColor:'black', 
    // borderWidth:2,
    height:300
},
container:{
    // borderColor:'black',
    // borderWidth:2,
    display:'flex',
    flexDirection:'row',
},
heading:{
    marginLeft:10,
    fontSize:20,
    // borderColor:'black',
    // borderWidth:2,
},
seeall:{
    marginLeft:180,
    // borderColor:'black',
    // borderWidth:2
    
}
})