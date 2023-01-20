import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React from 'react'

const Notifications = (props) => {
  if(props.navigation.isFocused) 
  props.route.params.setMenuItem('Notifications')
  return (
    <View>
      <Text>Notifications</Text>
      <ActivityIndicator></ActivityIndicator>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})