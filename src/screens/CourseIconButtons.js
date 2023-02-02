import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Button,Alert,Image,Switch} from 'react-native'
import React ,{useState}from 'react'

const CourseIconButtons = () => {
    const [iconCheckBoxes,setIconCheckBoxes]=useState({like:false,save:false})
  return (
     
      <View style={[{marginVertical:5},styles.container]}>
        
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
  )
}

export default CourseIconButtons

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
})