import { StyleSheet, Text, View ,ScrollView,FlatList,TouchableOpacity,Image,ImageBackground, Button} from 'react-native'
import React, { useEffect } from 'react'
import List from './List'
import {topPicksArr,bcozOfSkillsUFollowArr,thisWeeksTopCoursesArr,newReleasesArr,popularOnLinkedinLearningArr,mostLikedOnLinkedinLearningArr,relatedCoursesArr,newCoursesArr} from '../data/Arrays'
import { useRef } from 'react'

const Slider=(props)=>
<View style={{backgroundColor:'lightblue'}}>
<FlatList horizontal data={props.arr} renderItem={(ele)=>
            <TouchableOpacity style={styles.container} onPress={()=>props.nav.navigate('Course',{data:ele.item})}>
                <ImageBackground style={{height:'100%',width:'100%',borderRadius:10,}} source={{uri:ele.item.image}}>
                <View style={{padding:5,backgroundColor:'white',width:'20%',borderRadius:5}}><Text style={{fontSize:10}}>New</Text></View>
                <Text style={styles.heading}>{ele.item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        }/>
</View>

const Home = (props) => { 
    const ref=useRef()
    useEffect(()=>{
      ref.current.scrollTo({y:0,animated:true})
    },[props.route.params.scroll])
  return (
    <View>
      <ScrollView ref={ref} >
      <Slider arr={newCoursesArr} nav={props.navigation}/>
      <List arr={topPicksArr} showSeeAll={false} heading={'Top Picks for BSC'}></List>
      <List arr={bcozOfSkillsUFollowArr} showSeeAll={false} heading={'Because of skills you follow'}></List>
      <List arr={thisWeeksTopCoursesArr} showSeeAll={false} heading={"This week's top courses"}></List>
      <List arr={newReleasesArr} showSeeAll={false} heading={'New releases'}></List>
      <List arr={popularOnLinkedinLearningArr} showSeeAll={false} heading={'Popular on Linkedin Learning'}></List>
      <List arr={mostLikedOnLinkedinLearningArr} showSeeAll={false} heading={'Most liked on Linkedin Learning'}></List>
      <List arr={relatedCoursesArr} showSeeAll={false} heading={'Related Courses'}></List>
      {/* <Button title="scroll to top" onPress={()=>ref.current.scrollTo({y:0,animated:true})} /> */}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        margin:20,height:150,width:250,paddingBottom:10,paddingTop:10,borderRadius:10
    },
    heading:{
        // fontSize:20,
        // borderColor:'black',
        // borderWidth:2,
    },
})