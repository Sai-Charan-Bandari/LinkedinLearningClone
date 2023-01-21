import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Button,Alert,Image} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRoute } from '@react-navigation/native';
import Contents from './Contents';
import Overview from './Overview';

// const data=useRoute().params //same as useParams in react

// NOTE: Whenever we enter Course comp we setShowMenu to false and whenever we go back from this Screen we will set it back to true.
// Hence other comps will not need to setShowMenu to true again.
const Course = (props) => {
  const nav=useNavigation()
  //when i kept this statement within useEffect ..it didnt work indicating that the render occurred before the useEffect was called
  const data=props.route.params.data
  // console.log(data)

  useEffect(()=>{
    props.route.params.setShowMenu(false);
  },[])
  
  useEffect(()=>{
    return ()=>{
    props.route.params.setShowMenu(true)
      // console.log('destroyed')
  }
  // this useEffect is called when Course is destroyed
  },[])

    const [menu,setMenu]=useState(1)
    // 1:// overview
    // 2:// contents
    // 3:// q+a
    
    const [iconCheckBoxes,setIconCheckBoxes]=useState({like:false,save:false})

  return (
    <View>
      {/* this button may not be clicked*/}
      <Button title="go back" onPress={()=>{
        props.route.params.setShowMenu(true);
        nav.goBack()}}></Button>

        {/* Video */}

        <Image style={{height:280,width:'100%'}} source={{uri:data.image}}></Image>

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

