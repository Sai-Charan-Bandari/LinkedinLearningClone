import { StyleSheet, Text, TouchableOpacity, View,Image,FlatList, Modal,Button, Alert } from 'react-native'
import React, { useState ,useEffect} from 'react'

// transform: [{ scaleX: -1 }]...use this to invert images horizontally
// obj values can be accessed by using : obj[variable containing key value] (or) obj.key_value

let filterArr=[
    {key:'Language',arr:['Italian','Polish','English','Turkish','Italian','Polish','English','Turkish',]},
    {key:'Type',arr:['Courses','Videos','Audio','Events','Learning Paths']},
    {key:'Time to Complete',arr:['< 10 mins','10 - 30 mins','30 - 60 mins','1 - 2 hours','3+ hours']},
    {key:'Level',arr:['Beginner','Intermediate','Advanced']},
    {key:'Sort by',arr:['Best Match','View Count','Newest']}]

const BottomModal=({setShowModal,showModal:{key,arr,isCalledByMainFilter,index},setArrIndex,arrIndex})=>{
    // console.log('received index is ',index)
    return(
        <Modal animationType='slide' transparent={true}>
        <TouchableOpacity style={{backgroundColor:'#00000080',width:'100%',height:'100%'}} onPress={()=>setShowModal(null)}>
            {/* this 2nd touchable opacity acts as the card view.
            I placed an empty onPress in order to make sure that the card did not close when touched due to 1st touchableopacity */}
            <TouchableOpacity style={{backgroundColor:'white',marginTop:'auto'}}  onPress={()=>console.log()}> 
            <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/32/32320.png"}} />
            
            
            <View style={styles.container}>
                {/* back button to go back from a filter type to the main filter('Filters')...only for modal called by main filter */}
            {(key!='Filters' && isCalledByMainFilter==true) && 
            <TouchableOpacity style={{width:30,paddingLeft:5}} onPress={()=>setShowModal({key:'Filters',arr:[],isCalledByMainFilter:true})}>
            <Image style={{width:20,height:20,transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2735/2735071.png"}} />
            </TouchableOpacity>}

                <Text style={{marginLeft:10,fontWeight:'500',fontSize:19}}>{key}</Text>
                {/* Reset button is commonly available to all */}
            <TouchableOpacity style={{marginLeft:'auto'}} onPress={()=>{
                if(key=='Filters'){ //reset all filter types to default
                setArrIndex({
                    0:[2], //language
                    1:[],  //type
                    2:[],  //time to complete...
                    3:[],
                    4:[0]
                })
            }else{
                if(index==0)
                setArrIndex({...arrIndex,[index]:[2]})
                else if(index==4)
                setArrIndex({...arrIndex,[index]:[0]})
                else
                setArrIndex({...arrIndex,[index]:[]})

            }
            // just trying to re render modal
            // setShowModal({key:key,arr:arr,isCalledByMainFilter:isCalledByMainFilter,index:index})
                Alert.alert('Reset successful','',
                [{text:'Done'}])
            }}>
                <Text style={{color:'blue'}}>Reset</Text>
            </TouchableOpacity>
            </View>
            {(key=='Filters')
            ?
            <FlatList data={filterArr}
                renderItem={(ele)=>
                    // 'next' button in modal...only for modal called by main filter
                    <TouchableOpacity style={[styles.container,{margin:10}]} onPress={()=>setShowModal({...ele.item,isCalledByMainFilter:true,index:ele.index})}>
                    <Text>{ele.item.key}</Text>
                    <Image style={{width:20,height:20,marginLeft:'auto'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2735/2735071.png"}} />
                </TouchableOpacity>
                }
                ></FlatList>
            :
            <View style={{height:150,display:'flex',flexWrap:'wrap'}}>
                {arr.map((ele,i)=>{
                    let highlight,setHighlight
                    if(arrIndex[index].length>0 && arrIndex[index].includes(i))
                     [highlight,setHighlight]=useState(true)
                    else
                    [highlight,setHighlight]=useState(false)
                    return(
                <TouchableOpacity key={i} 
                style={[styles.ellipse2, highlight ? {backgroundColor:'green'} : {backgroundColor:'lightgrey'}]} 
                onPress={()=>{
                    setHighlight(!highlight);
                    let newArr=[];
                    if(arrIndex[index].length > 0){
                        newArr=arrIndex[index] //gives array of selected options for a filter type specified by 'index' in the 'arrIndex'
                        // console.log('newArr is ',newArr)
                        if(newArr.includes(i))
                        newArr=newArr.filter((k)=>k!=i)
                        else
                        newArr.push(i)
                    }else
                        newArr.push(i)

                    setArrIndex({...arrIndex,[index]:newArr})
                    }}>
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
    // this array contains array of indices tells which option/options have been selected among the arr must be show for each key (filter type) in the filter menu
    // empty array [] => donot show any option value of arr .... instead display key (filter type name) itself
    //this is the default selection
    //for 1st and last filters we have a single option selected by default
    const [arrIndex,setArrIndex]=useState({
        0:[2], //language
        1:[],  //type
        2:[],  //time to complete...
        3:[],
        4:[0]
    }) 
    useEffect(() => {
      console.log('arrIndex value is ',arrIndex)
    }, [arrIndex])
    
  return (
    <View style={[styles.container,{paddingHorizontal:10}]}>
        <TouchableOpacity style={{marginRight:15,alignSelf:'center'}} onPress={()=>setShowModal({key:'Filters',arr:[],isCalledByMainFilter:true})}>
        <Image style={{width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3839/3839020.png"}} />
        </TouchableOpacity>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={filterArr}
            renderItem={(ele)=>
                <TouchableOpacity style={[styles.ellipse,{backgroundColor:(arrIndex[ele.index].length > 0) ? 'green' : 'white',}]} 
            onPress={()=>
                setShowModal({key:ele.item.key,
                arr:ele.item.arr,
                isCalledByMainFilter:false,
                index:ele.index //index is the index of a filter type in the filter arr...this will be used to identify which filter type we r working on in the indexArr
            })}>
                <Text style={{ color:(arrIndex[ele.index].length > 0) ? 'white' : 'grey'}}>
                    {(arrIndex[ele.index].length == 0 ) 
                    ?
                     ele.item.key
                    :
                       (arrIndex[ele.index].length == 1)
                       ?  
                       ele.item.arr[arrIndex[ele.index]]
                       : //length>1 => multiple options have been selected
                       `${ele.item.key} (${arrIndex[ele.index].length})`
                    }
                </Text> 
    <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3992/3992458.png"}} />
                </TouchableOpacity>
            }
            ></FlatList>

            {showModal!=null && <BottomModal showModal={showModal} setShowModal={setShowModal} setArrIndex={setArrIndex} arrIndex={arrIndex}/>}
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