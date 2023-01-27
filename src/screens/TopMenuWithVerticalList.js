import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import TopMenu from './TopMenu'
import VerticalList from './VerticalList'

const TopMenuWithVerticalList = ({route:{params:{name,coursesType,showFilter,courseArr,showPopular,setShowMenu}}}) => {

    useEffect(()=>{
        setShowMenu(false);
      },[])

      useEffect(()=>{
        //we know that this comp is called by List comp ...which is present in   MyLearning screen which contains menubars //maybe in Home also
        //hence we must set back the menubars to true on destroy
          return ()=>{
          setShowMenu(true)
          }  
      },[])

  return (
    <View>
        <TopMenu name={name}/>
        <VerticalList coursesType={coursesType} showFilter={showFilter} courseArr={courseArr} showPopular={showPopular}/>
    </View>
  )
}

export default TopMenuWithVerticalList

const styles = StyleSheet.create({})