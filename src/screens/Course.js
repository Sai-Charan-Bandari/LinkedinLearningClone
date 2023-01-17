import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Button} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRoute } from '@react-navigation/native';
// const data=useRoute().params //same as useParams in react

const Course = (props) => {
  const nav=useNavigation()
  //when i kept this statement within useEffect ..it didnt work indicating that the render occurred before the useEffect was called
  const data=props.route.params.data

  useEffect(()=>{
    props.route.params.setShowMenu(false);
  },[])
  
    const [menu,setMenu]=useState(1)
    // 1:// overview
    // 2:// contents
    // 3:// q+a
    
  return (
    <View>
      {/* this button must be clicked to go back and also to setShowMenu to true */}
      <Button title="go back" onPress={()=>{
        props.route.params.setShowMenu(true);
        nav.goBack()}}></Button>

        {/* Video */}

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


      <Text>{data.name}</Text>
      <View>
        {/* <CheckBox></CheckBox> */}
        <TouchableOpacity >
            <Text>Download course</Text>
            {/* icon */}
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* in the backgroundColor attr of TouchableOpacity i had to use string literals `${}` bcoz normal braces {} do not work there */}
      <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==1) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(1)}}>
            <Text style={{backgroundColor:'white'}}>OVERVIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==2) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(2)}}>
            <Text style={{backgroundColor:'white'}}>CONTENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==3) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(3)}}>
            <Text style={{backgroundColor:'white'}}>Q+A [41]</Text>
        </TouchableOpacity>
      </View>

         {menu==1 && <FlatList data={['1111ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}   
         {menu==2 && <FlatList data={['2222ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}   
         {menu==3 && <FlatList data={['3333ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}     
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
})