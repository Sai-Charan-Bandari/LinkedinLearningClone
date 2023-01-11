import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBox=(props)=>
    <View style={styles.container}>
        {/* Icon */}
        <View >
        <Text>{props.name}</Text>
        <Text>{props.desc}</Text>
        </View>
    </View>


const Topics = () => {
  return (
    <View>
      <Text>Browse</Text>
      <TextBox name='Business' icon='' desc='Business topics from Linkedin Learning' />
      <TextBox name='Creative' icon='' desc='Creative topics from Linkedin Learning' />
      <TextBox name='Technology' icon='' desc='Technology topics from Linkedin Learning' />
      <TextBox name='Certifications' icon='' desc='Certification prep from Linkedin Learning' />
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
    },
})