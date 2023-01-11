import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const Course = (props) => {
  
    const [menu,setMenu]=useState(1)
    // 1:// overview
    // 2:// contents
    // 3:// q+a
    
    const data=props.route.params.data
    console.log(data)
  return (
    <View>
        {/* Video */}

      <Text>{data.name}</Text>
      <View>
        {/* <CheckBox></CheckBox> */}
        <TouchableOpacity >
            <Text>Download course</Text>
            {/* icon */}
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* in the backgroundColor attr of TouchableOpacity i had to use string literals `${}` bcoz normal braces {} do not work there */}
      <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==1) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(1)}}>
            <Text style={{backgroundColor:'white'}}>OVERVIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==2) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(2)}}>
            <Text style={{backgroundColor:'white'}}>CONTENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingBottom:'1%',backgroundColor:`${(menu==3) ? 'blue' : 'white'}`}} onPress={()=>{setMenu(3)}}>
            <Text style={{backgroundColor:'white'}}>Q+A [41]</Text>
        </TouchableOpacity>
      </View>

         {menu==1 && <FlatList data={['1111ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}   
         {menu==2 && <FlatList data={['2222ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}   
         {menu==3 && <FlatList data={['3333ghfjakfa','hdkfhajdfl','ajkhfakfa','ajhfakjhfka','akjflakfjak','akfkaljla','akdja']}
          renderItem={(ele)=><Text>{ele.item}</Text>
    }     />}     
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
})