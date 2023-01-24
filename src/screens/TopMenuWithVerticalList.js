import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopMenu from './TopMenu'
import VerticalList from './VerticalList'

const TopMenuWithVerticalList = ({name,coursesType,showFilter,courseArr,showPopular}) => {
  return (
    <View>
        <TopMenu name={name}/>
        <VerticalList coursesType={coursesType} showFilter={showFilter} courseArr={courseArr} showPopular={showPopular}/>
    </View>
  )
}

export default TopMenuWithVerticalList

const styles = StyleSheet.create({})