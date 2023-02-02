import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList,Button,Modal,Linking} from 'react-native'
import React, { useEffect,useState } from 'react'

const EditWeeklyGoal = ({route:{params:{weeklyGoal,setWeeklyGoal,setShowMenu}},navigation}) => {
    useEffect(()=>{
        setShowMenu(false)
    },[])
    useEffect(()=>{
        return()=>setShowMenu(true)
    },[])
    
    let [toggle,setToggle]=useState(weeklyGoal)
    useEffect(()=>{
        console.log('toggle : ',toggle)
    },[toggle])

  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <TouchableOpacity style={{alignSelf:'flex-start',marginLeft:10,marginTop:10}} onPress={()=>{navigation.goBack()}}>
          {/* flipped imgae horizontally */}
          <Image style={{height:30,width:30,transform:[{scaleX:(-1)}] }} source={{uri:"https://cdn-icons-png.flaticon.com/128/7466/7466366.png"}}></Image>
        </TouchableOpacity>
    
      <Image style={{height:330,width:330,marginLeft:30,alignSelf:'center'}} source={require('../data/img.png')} />

      <View style={{alignSelf:'center'}}>
        <Text style={{alignSelf:'center'}}>{weeklyGoal=='NULL' ?'Set a' : 'Edit your'} weekly goal</Text>
        {weeklyGoal=='NULL' && <Text style={{alignSelf:'center'}}>You can always change this later</Text>}
        <View style={[{justifyContent:'center'},styles.container]}>
            <SelectItem num={15} toggle={toggle} setToggle={setToggle} />
            <SelectItem num={30} toggle={toggle} setToggle={setToggle} />
            <SelectItem num={60} toggle={toggle} setToggle={setToggle} />
            <SelectItem num={120} toggle={toggle} setToggle={setToggle} />
        </View>
        {toggle==15 
        ?
        <View style={{backgroundColor:'lightgrey',padding:20,marginTop:25}}>
        <Text style={{fontSize:14,fontWeight:'500'}}>Ease your way in</Text>
        <Text style={{fontSize:14,fontWeight:'500'}}>Nice start! Every minute counts</Text>
        </View>
        :  toggle==30
            ?
        <View style={{backgroundColor:'lightgrey',padding:20,marginTop:25}}>
        <Text style={{fontSize:14,fontWeight:'500'}}>Keep it casual</Text>
        <Text style={{fontSize:14,fontWeight:'500'}}>Lorem ipsum dolor sit takes</Text>
        </View>
            : toggle==60
            ?
        <View style={{backgroundColor:'lightgrey',padding:20,marginTop:25}}>
        <Text style={{fontSize:14,fontWeight:'500'}}>Become an expert</Text>
        <Text style={{fontSize:14,fontWeight:'500'}}>Lorem ipsum dolor sit takes</Text>
        </View>
            :
        <View style={{backgroundColor:'lightgrey',padding:20,marginTop:25}}>
        <Text style={{fontSize:14,fontWeight:'500'}}>Master your craft</Text>
        <Text style={{fontSize:14,fontWeight:'500'}}>Lorem ipsum dolor sit takes</Text>
        </View>
            }
        </View>


            <View style={{marginTop:'auto',alignSelf:'center'}}>
      {weeklyGoal=='NUll' 
      ?
      <Button title='SET GOAL' onPress={()=>{
          navigation.goBack()
        }}/>
        :
        <View style={styles.container}>
            <TouchableOpacity  style={{marginRight:20,marginTop:5}} onPress={()=>{
                setWeeklyGoal('NULL')
                navigation.goBack()
            }}>
                <Text style={{color:'#0077b5'}}>REMOVE GOAL</Text>
            </TouchableOpacity>
          <Button title='SET GOAL'  onPress={()=>{
                setWeeklyGoal(toggle)
              navigation.goBack()
            }}/>

        </View>
    }
    </View>
      </View>
  )
}

const SelectItem=({num,toggle,setToggle})=>{
    
    return(
        <TouchableOpacity style={{borderWidth:2,alignItems:'center',backgroundColor:toggle==num ? '#0077b5':'white'}}
        onPress={()=>{setToggle(num)}}
        >
            <Text style={{color:toggle==num ? 'white':'black'}}>{num}</Text>
            <Text style={{color:toggle==num ? 'white':'black'}}>mins</Text>
        </TouchableOpacity>
    )
}

export default EditWeeklyGoal

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
    },
    heading:{
        marginLeft:10,
        fontSize:20,
        // borderColor:'black',
        // borderWidth:2,
    },
})