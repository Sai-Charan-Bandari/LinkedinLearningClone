import { StyleSheet, Text, View,TouchableOpacity, FlatList ,Image,Switch, ScrollView,Linking,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import TopMenu from './TopMenu'
import SettingsModal from './SettingsModal'

// LINKING IS USED TO OPEN HYPERLINKS/URLS
// SWITCH USES onValueChange property but not onChange
//Alert has 4th parameter i.e, alert options : in this obj i set cancelable to true...so that if we tap outside of alert box..it will close the alert box

const Settings = (props) => {
  // for settings modal
  const [showSModal,setShowSModal]=useState(false)
  const [arr,setArr]=useState(false)
  const [title,setTitle]=useState('')
  
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
  function toggle(i){
    let k=[...switchVal]
    k[i]=!k[i]
    setSwitchVal(k)
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
    {/* Settings Modal */}
    {showSModal && <SettingsModal arr={arr} setShowSModal={setShowSModal} title={title}/>}

    <ScrollView style={{height:'95%'}}>
    <View>
      <Text style={styles.bluehead}>Your Account</Text>
      <TouchableOpacity style={{margin:20}} onPress={()=>{
        setTitle('Switch Accounts')
        setArr(['Personal Account','All India Council for Technical Education'])
        setShowSModal(true)
      }}>
      <Text style={styles.blackhead}>Switch Accounts</Text>
      <Text style={styles.smalltext}>Personal Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text style={styles.blackhead}>Account type: Enterprise Learning</Text>
      <Text  style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque, cumque architecto facere eveniet. Culpa, saepe facilis!</Text>
    <Text style={styles.underlined} onPress={()=>Linking.openURL('https://google.com')}>See more</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text style={styles.blackhead}>Sync my learning activity</Text>
      <View style={{display: "flex",flexDirection: "row"}}>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque, cumque architecto facere eveniet. Culpa, saepe facilis!</Text>
      <Switch value={switchVal[0]} onValueChange={()=>toggle(0)}></Switch>
      </View>
    <Text style={styles.underlined} onPress={()=>Linking.openURL('https://google.com')}>Learn more</Text>
      </TouchableOpacity>

      <Text style={styles.bluehead}>Consumption Preferences</Text>
      {/* alert/modal setter */}
      <TouchableOpacity style={{margin:20}} onPress={()=>{
        setTitle('Content Language')
        setArr(['English (English)','Deutsch (German)','Espanol (Spanish)','English (English)','Deutsch (German)','Espanol (Spanish)'])
        setShowSModal(true)
      }}>
      <Text style={styles.blackhead}>Content Language</Text>
      <Text  style={styles.smalltext}>English</Text>
      <Text  style={styles.smalltext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam illo omnis voluptatibus officiis deserunt inventore, voluptas eligendi obcaecati est error beatae autem quae ut nesciunt. Asperiores facere eaque rerum et nostrum iste perspiciatis molestiae minima consequatur autem! Asperiores, sequi ab! Voluptates quibusdam voluptatibus non incidunt. Minus cumque hic quaerat.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text style={styles.blackhead}>Autoplay</Text>
      <View style={{display: "flex",flexDirection: "row"}}>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[1]} onValueChange={()=>toggle(1)}></Switch>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text style={styles.blackhead}>Autoplay videos on course preview</Text>
      <View style={{display: "flex",flexDirection: "row"}}>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[2]} onValueChange={()=>toggle(2)}></Switch>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20}}>
      <Text style={styles.blackhead}>Background Play</Text>
      <View style={{display: "flex",flexDirection: "row"}}>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni </Text>
      <Switch value={ switchVal[3]} onValueChange={()=>toggle(3)}></Switch>
      </View>
      </TouchableOpacity>
      {/* alert/modal setter */}
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey',paddingBottom:10}} onPress={()=>{
        setTitle('Streaming Quality')
        setArr(['Auto','Low','Medium','High'])
        setShowSModal(true)
      }}>
      <Text style={styles.blackhead}>Streaming Quality</Text>
      <Text style={styles.smalltext}>High</Text>
      </TouchableOpacity>

      <Text style={styles.bluehead}>Social</Text>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text style={styles.blackhead}>Social</Text>
      <View style={{display: "flex",flexDirection: "row"}}>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero magni rem labore laborum hic dignissimos animi, ut libero dolorum fugit autem atque,</Text>
      <Switch value={switchVal[4]} onValueChange={()=>toggle(4)}></Switch>
      </View>
    <Text style={styles.underlined} onPress={()=>Linking.openURL('https://google.com')}>Learn more</Text>
      </TouchableOpacity>

      <Text style={styles.bluehead}>Downloads</Text>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>View Downloads</Text>
      <Text style={styles.smalltext}>See all your downloaded content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}} onPress={()=>{
        setTitle('Downloads Quality')
        setArr(['Low','Medium','High'])
        setShowSModal(true)
      }}>
      <Text style={styles.blackhead}>Downloads Quality</Text>
      <Text style={styles.smalltext}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: "flex",flexDirection: "row",marginLeft:20}}>
      <Text style={styles.blackhead}>Allow Cellular Downloads</Text>
      <Switch value={ switchVal[5]} onValueChange={()=>toggle(5)}></Switch>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}} onPress={()=>{
        setTitle('Download Location')
        setArr(['Internal Storage','SD Card'])
        setShowSModal(true)
      }}>
      <Text style={styles.blackhead}>Downloads Location</Text>
      <Text style={styles.smalltext}>Internal Storage</Text>
      </TouchableOpacity>
      </View>


      <Text style={[styles.blackhead,{marginLeft:20}]}>Storage Information</Text>
      <View style={{ display:'flex',flexDirection:'row',marginLeft:20}}>
        <View style={{height:13,width:'10%',backgroundColor:'blue', }}></View>
        <View style={{height:13,width:'60%',backgroundColor:'skyblue', }}></View>
        <View style={{height:13,width:'25%',backgroundColor:'grey', }}></View>
      </View>
    <ScrollView style={{height:'50%',marginLeft:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={{height:13,width:13,backgroundColor:'blue',alignSelf:'center',marginRight:5 }} ></View>
      <Text style={styles.smalltext}>Used : 46 GB</Text>
    </View>
    <View style={styles.container}>
    <View style={{height:13,width:13,backgroundColor:'skyblue',alignSelf:'center',marginRight:5 }}/>
      <Text style={styles.smalltext}>Learning : 160 MB</Text>
    </View>
    <View style={styles.container}>
    <View style={{height:13,width:13,backgroundColor:'grey',alignSelf:'center',marginRight:5 }}/>
      <Text style={styles.smalltext}>Free : 2.1 GB</Text>
    </View>
    </ScrollView>

    <Text style={[{margin:20,borderTopWidth:1,borderColor:'lightgrey'},styles.bluehead]}>Notifications</Text>
    <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text style={styles.blackhead}>Manage notificcations</Text>
      <Text style={styles.smalltext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus?</Text>
      </TouchableOpacity>

      <Text style={styles.bluehead}>About</Text>
      <TouchableOpacity style={{margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <Text style={styles.blackhead}>Linkedin Learning Version</Text>
      <Text style={styles.smalltext}>0.234.5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>Accessibility</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>User agreement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>End user agreement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>Additional terms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:20,}}>
      <Text style={styles.blackhead}>Sign out</Text>
      <Text style={styles.smalltext}>Signed in as Sai Charan Bandari</Text>
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
bluehead:{
  color:'#0077b5',
  fontSize:14,
  fontWeight:'500',
  marginLeft:20
},
blackhead:{
  fontSize:16,
  // fontWeight:'500'
},
underlined:{
  fontSize:14,
  color:'#0077b5',
  textDecorationLine:'underline'
},
smalltext:{
  // fontSize:12,
  color:'grey',

}

})