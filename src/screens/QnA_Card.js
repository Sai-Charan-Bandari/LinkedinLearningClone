import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal ,Linking,FlatList, TextInput} from 'react-native'
import React,{useEffect, useState} from 'react'
import { Qmodal } from './QnA'
import { useNavigation } from '@react-navigation/native'

const QnA_Card = ({item,enableNavigation}) => {
    //enableNavigation is true if the QnA_Card is called from QnA page in Course page, bcoz we need to navigate to Answer page
    // false if it is of Answer Page, bcoz we dont need to navigate to Answer page
    const {image,name,time,description,question,fromTheVideo,noOfAnswers,noOfLikes}=item
    const [showModal,setShowModal]=useState(false)
    const [like,setLike]=useState(false)
    const [showMore,setShowMore]=useState(false)
    const nav=useNavigation()
    useEffect(()=>{
        //if the length of question is less than 150 then we should not display show more button
        if(question.length<150)
        setShowMore(true)
    },[])
    useEffect(()=>{
        console.log('showModal set to ',showModal)
    },[showModal])
  return (
    <View style={{borderBottomColor:'lightgrey',borderBottomWidth:10,paddingTop:15}}>
    {showModal && <Qmodal setShowModal={setShowModal} />}

    <TouchableOpacity style={[{alignItems:'center'},styles.container]} onPress={()=>Linking.openURL('https://linkedin.com')}>
    <Image style={{height:45,width:45,borderRadius:30,margin:10}} source={{uri:image}}></Image>
    <View >
        <Text style={{fontWeight:'500'}}>{name}</Text>
        <Text style={{color:'grey'}}>{description.substring(0,35)}...</Text>
        <Text style={{color:'grey',fontSize:12}}>{time}</Text>
    </View>
    <TouchableOpacity onPress={()=>setShowModal(true)} style={{marginLeft:'auto'}}>
    <Image style={{height:30,width:30}} source={{uri:'https://cdn-icons-png.flaticon.com/128/4947/4947596.png'}}></Image>
    </TouchableOpacity>
    </TouchableOpacity>

    <View style={{marginLeft:12,marginTop:20}}>
    <TouchableOpacity style={{marginBottom:15}}>
    {showMore ? <TouchableOpacity onPress={()=>{
        if(enableNavigation)  //is true if the QnA_Card is of QnA page in Course page , false if it is of Answer Page
        nav.navigate('Answer',{item:item})
    }}><Text>{question}</Text></TouchableOpacity> 
    : 
    <Text>{question.substring(150)}<TouchableOpacity onPress={()=>setShowMore(true)}><Text style={{fontSize:12,color:'grey'}}>show more</Text></TouchableOpacity></Text>
    }
    </TouchableOpacity>
    <Text>From the video:<Text style={{textDecorationLine:'underline'}}>{fromTheVideo}</Text></Text>
    <Text style={{fontSize:13,borderBottomColor:'lightgrey',borderBottomWidth:1,paddingVertical:15}}>{noOfLikes} {noOfLikes==1 ? 'Like' : 'Likes'}.{noOfAnswers} {noOfAnswers==1 ? 'Answer' : 'Answers'}</Text>

    <View style={[{borderBottomColor:'lightgrey',borderBottomWidth:1,marginTop:15,paddingBottom:15},styles.container]}>
    <TouchableOpacity onPress={()=>setLike(!like)} style={styles.container}>
  {/* i used transform property in Image style attr to invert the image horizontally*/}
{like ? <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center',transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/4926/4926585.png"}} />
      : <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center',transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/739/739282.png"}} />}
      <Text style={{marginLeft:10}}>Like  . </Text>
</TouchableOpacity>
    <TouchableOpacity style={styles.container}>
   <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center',transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/3193/3193015.png"}} />
      <Text style={{marginLeft:10}}>Answer</Text>
</TouchableOpacity>
    </View>
    {noOfAnswers==0 && 
    <TouchableOpacity>
        <Text style={{color:'blue',fontWeight:'500',marginVertical:15}}>Be the first to answer </Text>
        
    </TouchableOpacity>
    }
    </View>
</View>
  )
}

export default QnA_Card

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-around'
    },
})