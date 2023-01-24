import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, ScrollView,Alert } from 'react-native'
import React,{useState} from 'react'
import VerticalList from './VerticalList'

const Overview = ({data}) => {
  const [showFullDesc,setShowFullDesc]=useState(false)
  return (
    //i had to set the height of flatlist such that it exactly fit into the remaining screen size and did not extend out of the screen
    <ScrollView style={{paddingLeft:20,height:420}}>
      <Text>{data.time}.{data.date}</Text>
      <Text>{showFullDesc ? data.description : data.description.substring(0,120)}
      </Text>
      <TouchableOpacity onPress={()=>setShowFullDesc(!showFullDesc)}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:showFullDesc ? "https://cdn-icons-png.flaticon.com/128/60/60799.png" : "https://cdn-icons-png.flaticon.com/128/32/32195.png"}} />
        </TouchableOpacity>
        <Text style={{borderTopWidth:1,width:'95%',borderColor:'black'}}>Related to this content</Text>

        <View style={styles.container}>
        <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2958/2958783.png"}} />
          <Text >Learning Groups</Text>
        <TouchableOpacity onPress={()=>Alert.alert('Share this course','',[{text:'See all'}])}>
          <Text style={{color:'blue'}}>See All</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container}>
        <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2958/2958783.png"}} />
          <Text >Certificates</Text>
        <TouchableOpacity onPress={()=>Alert.alert('Share this course','',[{text:'Share'}])}>
          <Text style={{color:'blue'}}>See All</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={[{borderTopWidth:1,width:'95%',borderColor:'black'},styles.container]}>
        <Image style={{height:50,width:50,marginTop:10,marginRight:5}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9131/9131529.png"}}></Image>
        <View>
          <Text>{data.creator}</Text>
          <Text>Technologist, Artist, Educator</Text>
          <Text style={{color:'blue'}}>View Linkedin Profile</Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:'lightgrey',height:10,marginVertical:10}}>
          {/* Gap */}
        </View>

        <TouchableOpacity>
        <Text>363 Likes</Text>
        <View style={[styles.container]}>
        <Image style={{height:50,width:90,marginRight:5}} source={{uri:"https://user-images.githubusercontent.com/11325941/52910469-bb0e6000-32bd-11e9-883b-bb934f3f1867.png"}}></Image>
        <Text>363 members like this</Text>
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:'lightgrey',height:10,marginVertical:10}}>
          {/* Gap */}
        </View>

        <Text>{data.learnersCount} people started learning</Text>

        <View style={{backgroundColor:'lightgrey',height:10,marginVertical:10}}>
          {/* Gap */}
        </View>

        <View>
          <Text>Skills covered</Text>
          {['Android Development','Kotlin'].map((ele,i)=>
          <Text key={i} style={{color:'blue'}}>{ele}</Text>)}
        </View>

        <View style={{backgroundColor:'lightgrey',height:10,marginVertical:10}}>
          {/* Gap */}
        </View>

        <Text>Similar content</Text>
        {/* courseType is not yet passed into this verticallist */}
        <VerticalList  showFilter={false} showPopular={false} courseArr={[]} />
    </ScrollView>
  )
}

export default Overview

const styles = StyleSheet.create({
  container:{
    // borderColor:'black',
    // borderWidth:2,
    display:'flex',
    flexDirection:'row',
},
})