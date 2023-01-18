import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { newCoursesArr } from '../data/Arrays'

const ListItem=(props)=>{
    const nav=useNavigation()
    const [saveCourse,setSaveCourse]=useState(false)
    return(
    <TouchableOpacity style={styles.container} onPress={()=>nav.navigate('Course',{data:props.courseData})}>
        
                <Image style={{height:'100%',width:'30%'}} source={{uri:props.courseData.image}}></Image>
        <View>
            <View style={[styles.container,{width:'76%'}]}>
                <Text>COURSE</Text>
                <TouchableOpacity onPress={()=>setSaveCourse(!saveCourse)} style={{marginLeft:'auto'}}>
        {saveCourse ? <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} />
              : <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} />}
        </TouchableOpacity>
            </View>
                <Text style={{width:'100%'}}>{props.courseData.name}</Text>
                <Text>179,189 learners</Text>      
        </View>
    </TouchableOpacity>
    )
}

const VerticalList = (props) => {

  return (
    <View>
      <Text>VerticalList</Text>
      <Text>{props.coursesType}</Text>
      {/* we need to fetch courses data and filter them according to their category (coursesType) */}
      {/* then we will display them in flat list */}
      <FlatList  data={newCoursesArr} renderItem={(ele)=>
      <ListItem courseData={ele.item}/>
    }/>
    </View>
  )
}

export default VerticalList

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        margin:10
    },
})