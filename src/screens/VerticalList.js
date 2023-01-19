import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { newCoursesArr } from '../data/Arrays'

const ListItem=(props)=>{
    const nav=useNavigation()
    const [saveCourse,setSaveCourse]=useState(false)
    return(
    <TouchableOpacity style={styles.container} onPress={()=>nav.navigate('Course',{data:props.courseData})}>
        
        {/* <View style={{width:'40%',height:'70%'}}> */}
        <ImageBackground style={{height:90,width:130,borderRadius:10,}} source={{uri:props.courseData.image}}>
                <View style={{padding:5,backgroundColor:'white',width:'60%',borderRadius:5}}><Text style={{fontSize:9}}>POPULAR</Text></View>
                <Text style={{color:'white',marginLeft:'auto',marginTop:'auto',backgroundColor:'black'}}>{props.courseData.time}</Text>
                </ImageBackground>
        {/* </View> */}
        <View style={{marginLeft:10,width:'70%'}}>
            <View style={[styles.container]}>
                <Text>COURSE</Text>
                <TouchableOpacity onPress={()=>setSaveCourse(!saveCourse)} style={{marginLeft:'auto'}}>
        {saveCourse ? <Image style={{marginRight:30,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} />
              : <Image style={{marginRight:30,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} />}
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
    //TEMPORARY FIX : I HAVE SET THE ROOT ELEMENT HEIGHT TO 95%...MAKING IT 100% WILL PARTIALY HIDE THE LAST ELEMENT
    <View style={{height:'95%'}}>
      <Text>{props.coursesType}</Text>
      {/* PROCEDURE */}
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
        marginTop:8
    },
})