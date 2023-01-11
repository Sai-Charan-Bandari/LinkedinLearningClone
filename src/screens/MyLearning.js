import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import List from './List'

const MyLearning = (props) => {

      let downloadsArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let inProgressArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let savedArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let learningHistoryArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]

    return (
    <View>
      <ScrollView>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')} style={styles.top}> 
            {/* icon profile */}
            <Image style={{height:50,width:50}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU'}}></Image>
            <View>
                <Text>BSC</Text>
                <Text>7 skills</Text>
            </View>
                {/* icon */}
                <Text> ]]] </Text>
            </TouchableOpacity>
       
            <View style={styles.container}>
            <Text style={styles.heading}>Weekly Goal</Text>
            <TouchableOpacity style={styles.seeall}>
            <Text style={{color:'blue'}}>EDIT</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {/* Circular progress bar */}
                <View>
                    <Text>Jan 9 to Jan 15</Text>
                    <Text>You've got this! Start learning to reach your goal.</Text>
                    <Text>Last week: 74 minutes</Text>
                </View>
            </View>

      <List arr={downloadsArr} showSeeAll={true} heading={'Downloaded'}></List>
      <List arr={inProgressArr} showSeeAll={true} heading={'In Progress'}></List>
      <List arr={savedArr} showSeeAll={true} heading={'Saved'}></List>
      <List arr={learningHistoryArr} showSeeAll={true} heading={'Learning History'}></List>
      </ScrollView>
    </View>
  )

}

export default MyLearning

const styles = StyleSheet.create({
    list:{
        
    },
    top:{
        display:'flex',
        flexDirection:'row',

    },
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
    },
    heading:{
        marginLeft:10,
        fontSize:20,
        // borderColor:'black',
        // borderWidth:2,
    },
    seeall:{
        marginLeft:180,
        // borderColor:'black',
        // borderWidth:2
        
    }
})