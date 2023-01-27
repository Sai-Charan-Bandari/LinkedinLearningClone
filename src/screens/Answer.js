import { StyleSheet, Text, View,Switch,TouchableOpacity,Image,Modal ,Linking,FlatList, TextInput} from 'react-native'
import React, { useEffect } from 'react'
import QnA_Card from './QnA_Card'
import TopMenu from './TopMenu'

const Answer = (props) => {
  return (
    <View>
        <TopMenu name=''/>
             <QnA_Card item={props.route.params.item} enableNavigation={false} />
            <TextInput placeholder='Add your answer here'></TextInput>
         </View>
  )
}

export default Answer

const styles = StyleSheet.create({})