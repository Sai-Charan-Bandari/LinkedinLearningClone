import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Alert,Image,Switch, ScrollView,Linking} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import TopMenu from './TopMenu'

// LINKING IS USED TO OPEN HYPERLINKS/URLS
// SWITCH USES onValueChange property but not onChange


const Settings = (props) => {
  
  const nav=useNavigation()
  const [switchVal,setSwitchVal]=useState([false,false,false,false,false,false])
  useEffect(()=>{
    console.log(switchVal)
  },[switchVal])
  
  useEffect(()=>{
    //called when Settings screen is created
    props.route.params.setShowMenu(false);
  },[])

  // func to toggle switches
  const toggle=(i)=>{
    // let k=switchVal
    // k[i]=!switchVal[i]
    // setSwitchVal(k)
  }

//called when Settings screen is destroyed
useEffect(()=>{
          //this params tells whether the settings comp was called by Profile or by MenuBar2
          //if it is called by Profile then we should not display Menu bars on destroying this Settings screen
          if(!props.route.params.isProfile) 
        return ()=>{
        props.route.params.setShowMenu(true)
          // console.log('destroyed')
      }},[])
  return (
    <View>
      {/* top menu */}
      <TopMenu name='Settings' />
    
    {/* body */}
    <ScrollView style={{height:'95%'}}>
    <View>
      <Text>Your Account</Text>
      <TouchableOpacity style={{margin:20}}>
      <Text>Switch Accounts</Text>
      <Text>Personal Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text>Account type: Enterprise Learning</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque, cumque architecto facere eveniet. Culpa, saepe facilis!</Text>
    <Text onPress={()=>Linking.openURL('https://google.com')}>See more</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text>Sync my learning activity</Text>
      <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque, cumque architecto facere eveniet. Culpa, saepe facilis!</Text>
      <Switch value={switchVal[0]} onValueChange={toggle(0)}></Switch>
      </View>
    <Text onPress={()=>Linking.openURL('https://google.com')}>Learn more</Text>
      </TouchableOpacity>

      <Text>Consumption Preferences</Text>
      {/* alert/modal setter */}
      <TouchableOpacity style={{margin:20}}>
      <Text>Content Language</Text>
      <Text>English</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam illo omnis voluptatibus officiis deserunt inventore, voluptas eligendi obcaecati est error beatae autem quae ut nesciunt. Asperiores facere eaque rerum et nostrum iste perspiciatis molestiae minima consequatur autem! Asperiores, sequi ab! Voluptates quibusdam voluptatibus non incidunt. Minus cumque hic quaerat.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text>Autoplay</Text>
      <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[1]} onValueChange={toggle(1)}></Switch>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text>Autoplay videos on course preview</Text>
      <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[1]} onValueChange={toggle(1)}></Switch>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text>Background Play</Text>
      <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[1]} onValueChange={toggle(1)}></Switch>
      </View>
      </TouchableOpacity>
      {/* alert/modal setter */}
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text>Streaming Quality</Text>
      <Text>High</Text>
      </TouchableOpacity>

      <Text>Social</Text>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text>Social</Text>
      <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque,</Text>
      <Switch value={switchVal[0]} onValueChange={toggle(0)}></Switch>
      </View>
    <Text onPress={()=>Linking.openURL('https://google.com')}>Learn more</Text>
      </TouchableOpacity>

      <Text>Downloads</Text>
      <TouchableOpacity style={{margin:20,}}>
      <Text>View Downloads</Text>
      <Text>See all your downloaded content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Downloads Quality</Text>
      <Text>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{margin:20},styles.container]}>
      <Text>Allow Cellular Downloads</Text>
      <Switch value={ switchVal[1]} onValueChange={toggle(1)}></Switch>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
        {/* alert/modal setter */}
      <Text>Downloads Location</Text>
      <Text>Internal Storage</Text>
      </TouchableOpacity>
      </View>


      <Text >Storage Information</Text>
      <View style={{ display:'flex',flexDirection:'row',}}>
        <View style={{height:13,width:'10%',backgroundColor:'blue', }}></View>
        <View style={{height:13,width:'70%',backgroundColor:'skyblue', }}></View>
        <View style={{height:13,width:'20%',backgroundColor:'grey', }}></View>
      </View>
    <ScrollView style={{height:'50%'}} horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={{height:13,width:13,backgroundColor:'blue',alignSelf:'center',marginRight:5 }} ></View>
      <Text>Used : 46 GB</Text>
    </View>
    <View style={styles.container}>
    <View style={{height:13,width:13,backgroundColor:'skyblue',alignSelf:'center',marginRight:5 }}/>
      <Text>Learning : 160 MB</Text>
    </View>
    <View style={styles.container}>
    <View style={{height:13,width:13,backgroundColor:'grey',alignSelf:'center',marginRight:5 }}/>
      <Text>Free : 2.1 GB</Text>
    </View>
    </ScrollView>

    <Text style={{margin:20,borderTopWidth:1,borderColor:'lightgrey'}}>Notifications</Text>
    <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text>Manage notificcations</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus?</Text>
      </TouchableOpacity>

      <Text>About</Text>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text>Linkedin Learning Version</Text>
      <Text>0.234.5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Accessibility</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>User agreement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>End user agreement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Additional terms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text>Sign out</Text>
      <Text>Signed in as Sai Charan Bandari</Text>
      </TouchableOpacity>
  </ScrollView>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    // borderColor:'black',
    // borderWidth:2,
    display:'flex',
    flexDirection:'row',
    padding:10
},
})