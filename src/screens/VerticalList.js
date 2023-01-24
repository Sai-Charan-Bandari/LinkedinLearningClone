import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { newCoursesArr } from '../data/Arrays'
import CourseFilter from './CourseFilter'

const ListItem=(props)=>{
  console.log('showPopular is founnd tp be',props.showPopular)
    const nav=useNavigation()
    const [saveCourse,setSaveCourse]=useState(false)
    return(
    <TouchableOpacity style={styles.container} onPress={()=>nav.navigate('Course',{data:props.courseData,isVerticalList:true})}>
        
        <ImageBackground style={{height:90,width:130,borderRadius:10,}} source={{uri:props.courseData.image}}>
                {props.showPopular && <View style={{padding:5,backgroundColor:'white',width:'60%',borderRadius:5}}><Text style={{fontSize:9}}>POPULAR</Text></View>}
                <Text style={{color:'white',marginLeft:'auto',marginTop:'auto',backgroundColor:'black'}}>{props.courseData.time}</Text>
                </ImageBackground>

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

// We can fetch data(array) here using coursesType
//else it can also take the array as props also (courseArr)
const VerticalList = ({coursesType,showFilter,courseArr,showPopular}) => {
let [filterParams,setFilterParams]=useState({
  language:'English'
})

  let showFilter2
  if(showFilter)
    showFilter2=showFilter
    else
    showFilter2=false

  return (
    <>
      {/* {props.coursesType && <Text>{props.coursesType}</Text>} */}
      {showFilter2 && <CourseFilter filterParams={filterParams} setFilterParams={setFilterParams}/>}
      {/* PROCEDURE */}
      {/* we need to fetch courses data and filter them according to their category (coursesType) */}
      {/* then we will display them in flat list */}

      {/* //TEMPORARY FIX : i had to set the height of flatlist such that it exactly fit into the remaining screen size and did not extend out of the screen */}
      <FlatList style={{height:'89%'}}  data={courseArr.length==0 ? newCoursesArr.concat(newCoursesArr) : courseArr} renderItem={(ele)=>
      <ListItem courseData={ele.item} showPopular={showPopular}/>
    }/>
    </>
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