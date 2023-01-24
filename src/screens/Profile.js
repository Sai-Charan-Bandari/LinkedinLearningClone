import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList,Button,Modal} from 'react-native'
import React,{useEffect,useState} from 'react'
import EditSkills from './EditSkills'
import VerticalList from './VerticalList'
import { useNavigation } from '@react-navigation/native'


const Profile = (props) => {
  let navigation=useNavigation()
  useEffect(()=>{
    //called when Profile screen is created
    props.route.params.setShowMenu(false);
  },[])
  
  useEffect(()=>{
    //called when Profile screen is destroyed
    return ()=>{
    props.route.params.setShowMenu(true)
  }},[])

  const [editPage, setEditPage] = useState(false)
  const [coursesListPage, setCoursesListPage] = useState('NULL')
  
  const [skillsArr, setSkillsArr] = useState(['Personal Development', 'Communication', 'Career Development', 'Cloud Computing', 'Mobile Application Development', 'Animation', 'Web Development'])

  if(coursesListPage==='NULL' && editPage==false){
  return (
    <View>
    <View style={{alignItems:'center',height:'60%'}}>
        <View style={[{backgroundColor:'#0077b5',width:'100%',height:'25%'},styles.container]}>
          {/* we dont need to setShowMenu to true while clicking on this button...bcoz now it is implemented automatically when the comp is destroyed */}
        <TouchableOpacity style={{alignSelf:'flex-start',marginLeft:10,marginTop:10}} onPress={()=>{navigation.goBack()}}>
          {/* flipped imgae horizontally */}
          <Image style={{height:30,width:30,transform:[{scaleX:(-1)}] }} source={{uri:"https://cdn-icons-png.flaticon.com/128/7466/7466366.png"}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:'auto'}} onPress={()=>navigation.navigate('Settings',{isProfile:true})}>
         <Image style={{width:22,height:22,margin:15}} source={{uri: "https://www.iconsdb.com/icons/preview/white/settings-xxl.png"}} />
            </TouchableOpacity>
        </View>
      <Image style={{height:100,width:100,position:'absolute',top:50,alignSelf:'center',borderWidth:5,borderRadius:50,borderColor:'white'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/9131/9131529.png"}}></Image>
      <Text style={{marginTop:'13%',marginBottom:20,fontSize:22}}>Sai Charan Bandari</Text>
      <TouchableOpacity style={{borderColor:'blue',borderRadius:4,borderWidth:1,padding:10,marginBottom:20}}>
        <Text style={{color:'blue',fontSize:15}}>VIEW ON LINKEDIN</Text>
      </TouchableOpacity>

      <View style={{borderTopWidth:1,borderBottomWidth:1 ,borderColor:'black',padding:10}}>
        <View style={[styles.container,{marginBottom:5}]}>
        <Text style={{fontWeight:'500',fontSize:15}}>Skills you're interested in</Text>
        <TouchableOpacity style={{marginLeft:'30%'}} onPress={()=>setEditPage(true)}>
        <Text style={{color:'blue'}}>EDIT</Text>
        </TouchableOpacity>
        </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur, laboriosam beatae delectus cupiditate quisquam blanditiis quam facere ea? Quod saepe natus sapiente dolor alias magnam dignissimos inventore ea et.
      </Text>
      </View>
    </View>

    <FlatList style={{height:'37%',paddingLeft:10}} data={skillsArr.concat(skillsArr)} renderItem={(ele)=>
      <TouchableOpacity style={{borderColor:'lightgrey',borderBottomWidth:1,padding:10}} onPress={()=>setCoursesListPage(ele.item)}>
      <Text style={{fontWeight:'500',fontSize:15}}>{ele.item}</Text>
      </TouchableOpacity>
      }></FlatList>
    </View>
  )
}
else if(editPage){
return(
<EditSkills setEditPage={setEditPage} skillsArr={skillsArr} setSkillsArr={setSkillsArr}></EditSkills>
)
}else{
  return(
    <View style={{paddingLeft:15}}>
      <View style={[{width:'100%',padding:10},styles.container]}>
          {/* we dont need to setShowMenu to true while clicking on this button...bcoz now it is implemented automatically when the comp is destroyed */}
        <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={() => {setCoursesListPage("NULL") }}>
          {/* flipped imgae horizontally */}
          <Image style={{height:25,width:25 }} source={{uri:"https://cdn-icons-png.flaticon.com/128/3114/3114883.png"}}></Image>
        </TouchableOpacity>
       <Text style={{fontSize:16,alignSelf:'center',marginLeft:10}}>{coursesListPage}</Text>
        </View>
      {/* menu to filter list */}
      <VerticalList coursesType={coursesListPage} showPopular={true} courseArr={[]} showFilter={true}/>
    </View>
  )
}
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