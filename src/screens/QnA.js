import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal ,Linking,FlatList, TextInput} from 'react-native'
// import React, { useState } from 'react'
import QnA_Array from '../data/QnA_Array'
import QnA_Card from './QnA_Card'

const Qmodal=({setShowQModal})=>{
    return(
        <Modal animationType='fade' transparent={true}>
            <TouchableOpacity style={{width:'100%',height:'100%'}}  onPress={()=>setShowQModal(false)}>
                <View style={{backgroundColor:'white',position:'absolute',top:410,left:160,padding:10}}>
                    <TouchableOpacity style={[{padding:5},styles.container]}>
                    <Image style={{height:25,width:25,marginRight:7}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2814/2814368.png'}}></Image>
                    <Text style={{fontSize:14}}>Report question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{padding:5},styles.container]}>
                    <Image style={{height:25,width:25,marginRight:7}} source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54702.png'}}></Image>
                    <Text style={{fontSize:14}}>Copy link to question</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}



const QnA = () => {
  return (
    <FlatList style={{height:460}} data={QnA_Array}
          renderItem={(ele)=>
          <QnA_Card item={ele.item} enableNavigation={true}  />
    }/>
  )
}

export default QnA
export {Qmodal}
const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-around'
    },
})