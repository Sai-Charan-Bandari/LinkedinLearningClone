import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image,Modal,Pressable,Alert } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React,{useState} from  'react'

const MyModal=({modalVisible,setModalVisible,modalData})=>{
    const [save,setSave]=useState(false)
    const navigation=useNavigation()
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            //when we press the back button in the mobile/ swipe to go back ... then this func is executed
            setModalVisible(!modalVisible);
          }}>
        <TouchableOpacity style={styles.centeredView} onPress={()=>
                    navigation.navigate('Course',{data:modalData})}>
          <View style={styles.modalView}>
          <Image style={{height:200,width:310,alignSelf:'center'}} source={{uri:modalData.image}}></Image>
            <View style={{marginLeft:20,width:290}} >
            <Text style={{fontWeight:'300',fontSize:12}}>COURSE</Text>
            <Text style={{fontWeight:'500',fontSize:16,width:'90%'}}>{modalData.name}</Text>
            <Text style={{fontWeight:'300',fontSize:12}}>By: {modalData.creator}</Text>

            {/* it seems that modalData.description sometimes became undefined...so ensure that it is not undefined inorder to use substring method */}
            <Text style={{fontWeight:'300',fontSize:12}}>{modalData.description &&  modalData.description.substring(0,200)}</Text>
            <View style={styles.container}>
            <Text style={{fontWeight:'300',fontSize:12}}>{modalData.learnersCount} learners</Text>
            <TouchableOpacity style={{marginLeft:'auto',marginRight:10}} onPress={()=>setSave(!save)}>
        {save ? <View style={styles.container}><Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/892/892337.png"}} /><Text style={{color:'blue'}}>Saved</Text></View>
              : <View style={styles.container}><Image style={{marginLeft:10,width:20,height:20,alignSelf:'center'}} source={{uri:"https://cdn-icons-png.flaticon.com/128/709/709496.png"}} /><Text style={{color:'blue'}}>Save</Text></View>}
        </TouchableOpacity>
            </View>
              </View>

            {/* close button */}
            <Pressable style={{position:'absolute',top:0,left:0,backgroundColor:'white',width:20}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text >X</Text>
        </Pressable>
          </View>
        </TouchableOpacity>
      </Modal>
    )
}


const List = (props) => {
    //props will contain showSeeAll,arr,heading
    
    const navigtion = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({});
  return (
      <View style={styles.list}>
        <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} modalData={modalData} />
       

      <View style={styles.container}>
            <Text style={styles.heading}>{props.heading}</Text>
            {props.showSeeAll && 
            <TouchableOpacity style={styles.seeall}>
            <Text style={{color:'blue'}}>SEE ALL ({props.arr.length})</Text>
            </TouchableOpacity>}
      </View>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={props.arr} renderItem={(ele)=>
            <TouchableOpacity style={{margin:20,height:150,width:250}}  onPress={()=>{
                if(props.showSeeAll){ //implies it is MyLearning page
                    // here we can also use props.navigation.navigate
                    navigtion.navigate('Course',{data:ele.item})
                }else{ //implies it is Home page
                    setModalData(ele.item)
                    setModalVisible(!modalVisible)
                }
            }
        }>
                <Image style={{height:'100%',width:'100%'}} source={{uri:ele.item.image}}></Image>
                <Text>COURSE</Text>
                <Text style={{width:'100%'}}>{ele.item.name}</Text>
            </TouchableOpacity>
        }></FlatList>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
list:{
    // this style is used in the root View tag to check the boundaries of each List component
    // borderColor:'black', 
    // borderWidth:2,
    height:300
},
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
seeall:{
    
    marginLeft:'auto',
    // borderColor:'black',
    // borderWidth:2
    
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
}
})