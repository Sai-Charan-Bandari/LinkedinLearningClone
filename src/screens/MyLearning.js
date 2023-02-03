import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import List from './List'
import { useEffect } from 'react'
import { useRef } from 'react'

import {downloadsArr,inProgressArr,savedArr,learningHistoryArr} from '../data/Arrays'
const MyLearning = (props) => {
    let [weeklyGoal,setWeeklyGoal]=useState('NULL')
 

    const ref=useRef()
    useEffect(()=>{
        ref.current.scrollTo({y:0,animated:true})
    },[props.route.params.scroll])
    return (
    <View>
      <ScrollView ref={ref}>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')} style={styles.top}> 
            {/* icon profile */}
            <Image style={[styles.icon,{marginRight:20,marginLeft:10,borderWidth:3,borderColor:'skyblue',borderRadius:50}]} source={{uri:'https://cdn-icons-png.flaticon.com/128/3177/3177440.png'}}></Image>
            <View>
                <Text>BSC</Text>
                <Text>7 skills</Text>
            </View>
                {/* icon */}
                <Image style={[styles.icon,{marginLeft:230}]} source={{uri:"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}}></Image>
            </TouchableOpacity>
       
            <View style={styles.container}>
            <Text style={styles.heading}>{weeklyGoal=='NULL' ? 'Set a weekly goal':'Weekly Goal'}</Text>
            <TouchableOpacity style={[styles.seeall]} onPress={()=>props.navigation.navigate('EditWeeklyGoal',{weeklyGoal:weeklyGoal,setWeeklyGoal:setWeeklyGoal})}>
            {weeklyGoal!='NULL'  && <Text style={{color:'blue'}}>EDIT</Text>}
            </TouchableOpacity>
            </View>

            <View style={[styles.container,{marginBottom:25}]}>
                {/* Circular progress bar */}
               <View style={{margin:10,borderWidth:1,paddingTop:10,borderRadius:50,height:80,width:80}}>
                { weeklyGoal=='NULL'
                ?
                <Image style={{width:35,height:35,position:'relative',bottom:3,left:13,top:4,padding:25,borderColor:'black',borderWidth:1,borderRadius:50}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9583/9583697.png"}}></Image>
                :
                <Text style={{fontSize:15,fontWeight:'500',position:'relative',bottom:3,left:6,borderWidth:1,paddingTop:20,paddingLeft:10,borderRadius:50,height:65,width:65}}>{weeklyGoal!='NULL' && `0/${weeklyGoal}`}</Text>
                }
               </View>
                <View style={{width:'60%'}}>
                    {weeklyGoal!='NULL' && <Text style={{fontSize:13,fontWeight:'300',marginBottom:5}}>Jan 9 to Jan 15</Text>}
                    <Text>{weeklyGoal=='NULL' ? "We'll help you track your progress and remind you to keep learning" : "You've got this! Start learning to reach your goal."}</Text>
                    {weeklyGoal!='NULL' && <Text style={{fontSize:13,fontWeight:'300',marginTop:5}}>Last week: 74 minutes</Text>}
                    {weeklyGoal=='NULL' && 
                    <TouchableOpacity style={{borderColor:'#0077b5',borderWidth:1,width:90,marginTop:20}} onPress={()=>props.navigation.navigate('EditWeeklyGoal',{weeklyGoal:weeklyGoal,setWeeklyGoal:setWeeklyGoal})}>
                        <Text style={{color:'#0077b5',fontWeight:'500',alignSelf:'center'}}>SET GOAL</Text>
                    </TouchableOpacity>
                    }
                </View>
            </View>

      <List arr={downloadsArr} showSeeAll={true} heading={'Downloaded'}></List>
      <List arr={inProgressArr} showSeeAll={true} heading={'In Progress'}></List>
      <List arr={savedArr} showSeeAll={true} heading={'Saved'}></List>
      <List arr={learningHistoryArr} showSeeAll={true} heading={'Learning History'}></List>
      </ScrollView>
    </View>
  )

}

export default MyLearning

const styles = StyleSheet.create({
    list:{
        
    },
    top:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        marginBottom:20
    },
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingRight:10
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
        
    },
    icon:{height:40,width:40}
})