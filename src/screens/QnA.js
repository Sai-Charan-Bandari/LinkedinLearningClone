import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal ,Linking,FlatList, TextInput} from 'react-native'
// import React, { useState } from 'react'
import QnA_Array from '../data/QnA_Array'
import QnA_Card from './QnA_Card'

const Qmodal=({setShowQModal})=>{
    return(
        <Modal animationType='fade' transparent={true}>
            {/* <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={}> */}
            <TouchableOpacity  onPress={setShowQModal(false)}>
                <View style={{backgroundColor:'white'}}>
                    <TouchableOpacity style={styles.container}>
                    <Image style={{height:30,width:30}} source={{uri:'https://cdn-icons-png.flaticon.com/128/2814/2814368.png'}}></Image>
                    <Text>Report question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}>
                    <Image style={{height:30,width:30}} source={{uri:'https://cdn-icons-png.flaticon.com/128/54/54702.png'}}></Image>
                    <Text>Copy link to question</Text>
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