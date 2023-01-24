import { StyleSheet, Text, TouchableOpacity, View,Image,FlatList, Modal,Button } from 'react-native'
import React, { useState } from 'react'

let filterArr=[
    {key:'Language',arr:['Italian','Polish','English','Turkish','Italian','Polish','English','Turkish',]},
    {key:'Type',arr:['Courses','Videos','Audio','Events','Learning Paths']},
    {key:'Time to Complete',arr:['< 10 mins','10 - 30 mins','30 - 60 mins','1 - 2 hours','3+ hours']},
    {key:'Level',arr:['Beginner','Intermediate','Advanced']},
    {key:'Sort by',arr:['Best Match','View Count','Newest']}]

const BottomModal=({setShowModal,showModal:{key,arr}})=>{
    return(
        <Modal animationType='slide' transparent={true}>
        <TouchableOpacity style={{backgroundColor:'#00000080',width:'100%',height:'100%'}} onPress={()=>setShowModal(null)}>
            <TouchableOpacity style={{backgroundColor:'white',marginTop:'auto'}} onPress={()=>setShowModal(null)}>
            <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/32/32320.png"}} />
            
            
            <View style={styles.container}>
                <Text style={{marginLeft:10,fontWeight:'500',fontSize:19}}>{key}</Text>
            <TouchableOpacity style={{marginLeft:'auto'}}>
                <Text style={{color:'blue'}}>Reset</Text>
            </TouchableOpacity>
            </View>
            {(key=='Filters')
            ?
                <FlatList data={filterArr}
                renderItem={(ele)=>
                    <TouchableOpacity style={[styles.container,{margin:10}]} onPress={()=>setShowModal(ele.item)}>
                    <Text>{ele.item.key}</Text>
                    <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2735/2735071.png"}} />
                </TouchableOpacity>
                }
                ></FlatList>
            :
            <View style={{height:150,display:'flex',flexWrap:'wrap'}}>
                {arr.map((ele,i)=>{
                    let highlight,setHighlight
                    if(i==0)
                     [highlight,setHighlight]=useState(true)
                    else
                    [highlight,setHighlight]=useState(false)
                    return(
                <TouchableOpacity key={i} style={[styles.ellipse2, highlight ? {backgroundColor:'green'} : {backgroundColor:'lightgrey'}]} onPress={()=>setHighlight(!highlight)}>
                    <Text style={highlight ? {color:'white'} : {color:'grey'}}>{ele} +</Text>
                </TouchableOpacity>)}
                )}
            
            </View>
        }
                <Button title='Show results'></Button>
            
            
            </TouchableOpacity>
        </TouchableOpacity>
        </Modal>
    )
}

const CourseFilter = ({filterParams,setFilterParams}) => {
    const [showModal,setShowModal]=useState(null)
  return (
    <View style={[styles.container,{paddingHorizontal:10}]}>
        <TouchableOpacity style={{marginRight:15,alignSelf:'center'}} onPress={()=>setShowModal({key:'Filters',arr:[]})}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3839/3839020.png"}} />
        </TouchableOpacity>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={filterArr}
            renderItem={(ele)=>
                <TouchableOpacity style={[styles.ellipse,{backgroundColor:(ele.item.key=='Language' || ele.item.key=='Sort by') ? 'green' : 'white',}]} onPress={()=>setShowModal({key:ele.item.key,arr:ele.item.arr})}>
                <Text style={{ color:(ele.item.key=='Language' || ele.item.key=='Sort by') ? 'white' : 'grey'}}>
                    {(ele.item.key=='Language' || ele.item.key=='Sort by') ? ele.item.arr[0] : ele.item.key}
                </Text> 
    <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3992/3992458.png"}} />
                </TouchableOpacity>
            }
            ></FlatList>

            {showModal!=null && <BottomModal showModal={showModal} setShowModal={setShowModal}/>}
    </View>
  )
}

export default CourseFilter

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        marginTop:8
    },
    ellipse:{
        padding:6,
        borderRadius:40,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:5,
            display:'flex',
            flexDirection:'row',
    },
    ellipse2:{
        padding:6,
        borderRadius:40,
        backgroundColor:'lightgrey',
        margin:5,
            display:'flex',
            flexDirection:'row',
    }
})