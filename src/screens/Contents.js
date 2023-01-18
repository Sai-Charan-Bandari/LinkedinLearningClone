import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const Chapter=({title,no,sectionsArr})=>
<View>
  {no!=0 && <Text style={{fontWeight:200}}>{no} {title}</Text>}
  {no==0 && <Text style={{fontWeight:200}}>{title}</Text>}
  <FlatList data={sectionsArr} renderItem={(ele)=>
  <View>
    {/* NEED TO PLACE CHECKBOXES HERE */}
    <Text>{ele.item}</Text>
  </View>
  }/>
</View>

// CHAPTER COMP IS NOT WORKING
const Contents = () => {
  return (
    <View>
      <Text>Contents</Text>
      <FlatList data={['2222ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={
            (ele)=>
            // <Chapter title={ele.item} no={ele.index} sectionsArr={['s1ghfjakfa','s2hdkfhajdfl','s3ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}/>
            <Text>{ele.item}</Text>
          }     
       />
    </View>
  )
}

export default Contents

const styles = StyleSheet.create({})