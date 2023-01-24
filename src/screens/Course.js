import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Button,Alert,Image,Switch} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRoute } from '@react-navigation/native';
import Contents from './Contents';
import Overview from './Overview';
import CourseTopMenu from './CourseTopMenu';
import Certificates from './Certificates';

// const data=useRoute().params //same as useParams in react

// NOTE: Whenever we enter Course comp we setShowMenu to false and whenever we go back from this Screen we will set it back to true.
// Hence other comps will not need to setShowMenu to true again.
const Course = (props) => {
  
  //when i kept this statement within useEffect ..it didnt work indicating that the render occurred before the useEffect was called
  const data=props.route.params.data
  // console.log(data)

  useEffect(()=>{
    //if this comp is called by VerticalList then the menu bars are already set to false..so no need to set to false
    if(!props.route.params.isVerticalList)
    props.route.params.setShowMenu(false);
    else
    console.log('no need to set to false')
  },[])
  
  useEffect(()=>{
    //we know that VerticalList is comp of Profile and Course.
    //if this Course page is being called from a Profile page or another Course page's Overview
    //then we must not set the Menubars to true when this comp is destroyed.
    //we must setback the Menubars to true only if this comp is called by the Menubar comps like Home,MyLearning.
    let isVerticalList
    if(props.route.params.isVerticalList)
    isVerticalList=props.route.params.isVerticalList
    else
    isVerticalList=false
    console.log('value of isVerticalList is ',isVerticalList)
    if(!isVerticalList){
      return ()=>{
      props.route.params.setShowMenu(true)
      }  
    }
  // this useEffect is called when Course is destroyed
  },[])

    const [menu,setMenu]=useState(1)
    // 1:// overview
    // 2:// contents
    // 3:// q+a
    
    const [iconCheckBoxes,setIconCheckBoxes]=useState({like:false,save:false})
    const [showCertificate,setShowCertificate]=useState(false)
    

  return (
    <View>
    {!showCertificate
      ?
    <View>
      {/* this button may not be clicked*/}
      {/* <Button title="go back" onPress={()=>{
        nav.goBack()}}></Button> */}

        {/* Video */}

        {/* i placed the top menu beneath the Image bcoz.. 
        the top menu's position is absolute and needs to be displayed on top of the image tag(video).
        if the menu is written above Image comp then it is found that the Image comp got rendered on top of the menu
        so i wrote Image 1st, then the menu comp */} 
        <Image style={{height:280,width:'100%'}} source={{uri:data.image}}></Image>

        {/* TOP MENU FOR COURSE COMP */}
        <CourseTopMenu setShowCertificate={setShowCertificate}/>

        {/* <Video
        ref={video}
        style={{height:1000,width:1000}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}

        {/*End of Video tags */}


      <Text style={{fontWeight:'500',fontSize:17,alignSelf:'center'}}>{data.name}</Text>
      <View style={styles.container}>
        
        {/* <CheckBoxES></CheckBoxES> */}
        <TouchableOpacity onPress={()=>setIconCheckBoxes({...iconCheckBoxes,like:!iconCheckBoxes['like']})}>
          {/* i used transform property in Image style attr to invert the image horizontally*/}
        {iconCheckBoxes.like ? <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center',transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/4926/4926585.png"}} />
              : <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center',transform: [{ scaleX: -1 }]}} source={{uri:"https://cdn-icons-png.flaticon.com/128/739/739282.png"}} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIconCheckBoxes({...iconCheckBoxes,save:!iconCheckBoxes['save']})}>
        {iconCheckBoxes.save ? <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} />
              : <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert('Share this course','',[{text:'Share'}])}>
        <Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2958/2958783.png"}} />
        </TouchableOpacity>
              {/* END OF <CheckBoxES></CheckBoxES> */}
        

        <TouchableOpacity style={{display:'flex',flexDirection:'row',marginLeft:10}} onPress={()=>{
           Alert.alert('Download Entire Course', 'This course contains 49 videos. Would you like to continue?', 
           [
            {
              text: 'CANCEL',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'DOWNLOAD NOW', onPress: () => console.log('DOWNLOAD Pressed')},
          ]);
        }}>
            <Text>Download course</Text>
            <Image style={{marginLeft:25,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/2926/2926214.png"}} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* in the backgroundColor attr of TouchableOpacity i had to use string literals `${}` bcoz normal braces {} do not work there */}
      <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==1) ? 'blue' : 'whitesmoke'}`}} onPress={()=>{setMenu(1)}}>
            <Text style={{backgroundColor:'whitesmoke'}}>OVERVIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==2) ? 'blue' : 'whitesmoke'}`}} onPress={()=>{setMenu(2)}}>
            <Text style={{backgroundColor:'whitesmoke'}}>CONTENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==3) ? 'blue' : 'whitesmoke'}`}} onPress={()=>{setMenu(3)}}>
            <Text style={{backgroundColor:'whitesmoke'}}>Q+A [41]</Text>
        </TouchableOpacity>
      </View>

         {menu==1 && <Overview data={data}/>}  
          {/*we need to pass only the contents array of the course obj... but i've not yet created contents array for each course obj..hence i am passing whole course data  */}
         {menu==2 && <Contents arr={data}/>}   
         {menu==3 && <FlatList data={['3333ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}     
    </View>
    :
    <Certificates setShowCertificate={setShowCertificate}/>
    }
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
})

