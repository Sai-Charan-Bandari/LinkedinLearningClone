import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity,FlatList} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { newCoursesArr } from '../data/Arrays'

const ListItem=(props)=>{
    const nav=useNavigation()
    const [saveCourse,setSaveCourse]=useState(false)
    return(
    <TouchableOpacity style={styles.container} onPress={()=>nav.navigate('Course',{data:props.courseData})}>
        
        {/* <View style={{width:'40%',height:'70%'}}> */}
        <ImageBackground style={{height:'100%',width:'100%',borderRadius:10,borderColor:'black',
        borderWidth:2,}} source={{uri:props.courseData.image}}>
                <View style={{padding:5,backgroundColor:'white',width:'30%',borderRadius:5}}><Text style={{fontSize:10}}>POPULAR</Text></View>
                <Text style={styles.heading}>{props.courseData.time}</Text>
                </ImageBackground>
        {/* </View> */}
        <View style={{marginLeft:0}}>
            <View style={[styles.container,{width:'70%'}]}>
                <Text>COURSE</Text>
                <TouchableOpacity onPress={()=>setSaveCourse(!saveCourse)} style={{marginLeft:'auto'}}>
        {saveCourse ? <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} />
              : <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} />}
        </TouchableOpacity>
            </View>
                <Text style={{width:'100%'}}>{props.courseData.name}</Text>
                <Text>{props.courseData.learnersCount} learners</Text>      
        </View>
    </TouchableOpacity>
    )
}

const VerticalList = (props) => {

  return (
    <View>
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
        borderColor:'black',
        borderWidth:2,
        display:'flex',
        flexDirection:'row',
        marginTop:5
    },
})