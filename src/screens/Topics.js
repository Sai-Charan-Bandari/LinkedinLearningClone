import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const TextBox=(props)=>
    <View style={styles.container}>
        <Image style={{width:25,height:25,margin:10}} source={{uri:`${props.icon}`}} />
        <View >
        <Text style={{fontSize:16,fontWeight:'500'}}>{props.name}</Text>
        <Text style={{fontSize:13,fontWeight:'400'}}>{props.desc}</Text>
        </View>
    </View>


const Topics = (props) => {
  if(props.navigation.isFocused) 
    props.route.params.setMenuItem('Topics')
  return (
    <View>
      <View >
      <Text style={{marginLeft:20,marginTop:10,fontSize:18,fontWeight:'500'}}>Browse</Text>
      <TextBox name='Business' icon='https://cdn-icons-png.flaticon.com/128/709/709861.png' desc='Business topics from Linkedin Learning' />
      <TextBox name='Creative' icon='https://cdn-icons-png.flaticon.com/128/5324/5324234.png' desc='Creative topics from Linkedin Learning' />
      <TextBox name='Technology' icon='https://cdn-icons-png.flaticon.com/128/5576/5576886.png' desc='Technology topics from Linkedin Learning' />
      <TextBox name='Certifications' icon='https://cdn-icons-png.flaticon.com/128/709/709576.png' desc='Certification prep from Linkedin Learning' />
      </View>
    </View>
  )
}

export default Topics

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        margin:10
    },
})