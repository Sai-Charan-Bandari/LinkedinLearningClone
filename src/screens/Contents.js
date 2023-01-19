import { StyleSheet, Text, View ,SectionList, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { FlatList,TouchableOpacity,Image } from 'react-native'

const Chapter=({name,no,sectionsArr})=>{
  const [show,setShow]=useState(true)
  return(
<View style={{marginLeft:20}}>
  <View style={{ display:'flex',
        flexDirection:'row',}}>
  {no!=0 ? <Text style={{fontWeight:'500'}}>{no} {name}</Text> : <Text style={{fontWeight:'500'}}>{name}</Text>}
  <TouchableOpacity onPress={()=>setShow(!show)}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:show ? "https://cdn-icons-png.flaticon.com/128/60/60799.png" : "https://cdn-icons-png.flaticon.com/128/32/32195.png"}} />
        </TouchableOpacity>
  </View>

  {/* {show && <FlatList data={sectionsArr} renderItem={(ele)=>
  <View>
    <Text>{ele.item}</Text>
  </View>
  }/>} */}

  {show && <ScrollView >
    {sectionsArr.map((ele,index)=>{
      const [download,setDownload]=useState(false)
      return(
    <TouchableOpacity key={index} style={{display:'flex',
    flexDirection:'row',}}>
      <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: ele.done ? "https://cdn-icons-png.flaticon.com/128/443/443138.png" : "https://cdn-icons-png.flaticon.com/128/7837/7837400.png"}} />
      <Text style={{marginLeft:10}}>{ele.topic}</Text>
      {/* if the topic is not chapter quiz then we need to display downlad option */}
      {(ele.topic != "Chapter Quiz") && <TouchableOpacity style={{marginLeft:'auto',marginRight:15}} onPress={()=>setDownload(!download)}>
      <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri: download ? "https://cdn-icons-png.flaticon.com/128/726/726271.png" : "https://cdn-icons-png.flaticon.com/128/2926/2926214.png" }} />
        </TouchableOpacity>}
      
    </TouchableOpacity>
      )
}
    )}
    </ScrollView>}
</View> )
}

// CHAPTER COMP IS NOT WORKING
const Contents = ({arr}) => {

  return (
    // dont place scrollview inside view...it led to improper scrolling
    <ScrollView>
      {/* <FlatList data={['2222ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={
            (ele)=>
            <Chapter style={{borderColor:'black',borderWidth:2,}} name={ele.item} no={ele.index} sectionsArr={['s1ghfjakfa','s2hdkfhajdfl','s3ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}/>
            // <Text style={{borderColor:'black',borderWidth:2,}}>{ele.index}  {ele.item}</Text>
          }     
       /> */}


    {['introduction','chapp1','chapp2','chapp3','chapp4','chapp1','chapp1','chapp1'].map((ele,index)=>
     <Chapter  name={ele} no={index} sectionsArr={[{topic:'s1ghfjakfa',done:true},{topic:'s1ghfjakfa',done:true},{topic:'s1ghfjakfa',done:false},{topic:'s1ghfjakfa',done:false},{topic:'Chapter Quiz',done:false},]}/>)}

    </ScrollView>
  )
}

export default Contents

const styles = StyleSheet.create({})