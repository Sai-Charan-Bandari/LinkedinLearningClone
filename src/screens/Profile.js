import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList,Button} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import EditSkills from './EditSkills'

const skillsArr=['Personal Development', 'Communication', 'Career Development', 'Cloud Computing', 'Mobile Application Development', 'Animation', 'Web Development']

const Profile = (props) => {
  useEffect(()=>{
    props.route.params.setShowMenu(false);
  },[])
  const [editPage, setEditPage] = useState(false)
  const nav=useNavigation()
  
  return (
  <View>
    {!editPage
    ?
    <View style={{alignItems:'center'}}>

        <Button title="go back" onPress={()=>{props.route.params.setShowMenu(true);nav.goBack()}}></Button>

      <Image style={{height:100,width:100,marginTop:60}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9131/9131529.png"}}></Image>
      <Text>Sai Charan Bandari</Text>
      <TouchableOpacity style={{borderColor:'black',borderWidth:2}}>
        <Text>VIEW ON LINKEDIN</Text>
      </TouchableOpacity>

      <View style={{borderTopWidth:2,borderBottomWidth:2 ,borderColor:'black'}}>
        <View style={styles.container}>
        <Text>Skills you're interested in</Text>
        <TouchableOpacity style={{marginLeft:'30%'}}>
        <Text>EDIT</Text>
        </TouchableOpacity>
        </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, laboriosam beatae delectus cupiditate quisquam blanditiis quam facere ea? Quod saepe natus sapiente dolor alias magnam dignissimos inventore ea et.
      </Text>
      </View>

      <FlatList data={skillsArr} renderItem={(ele)=>
      <TouchableOpacity style={{borderColor:'lightgrey',borderBottomWidth:1}} onPress={()=>setEditPage(true)}>
      <Text>{ele.item}</Text>
      </TouchableOpacity>
      }></FlatList>
    </View>
  
    :
    <EditSkills setEditPage={setEditPage}></EditSkills>
      }
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    // borderColor:'black',
    // borderWidth:2,
    display:'flex',
    flexDirection:'row',
},
})