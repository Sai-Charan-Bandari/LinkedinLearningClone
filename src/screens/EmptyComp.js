import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import TopMenu from './TopMenu'

const EmptyComp = ({route:{params:{name}}}) => {
  return (
    <View>
        <TopMenu name={name}/>
        <View style={{marginTop:200}}>
        <ActivityIndicator size={100} />
        </View>
      {/* <Text>{name}</Text> */}
    </View>
  )
}

export default EmptyComp

const styles = StyleSheet.create({})