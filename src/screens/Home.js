import { StyleSheet, Text, View ,ScrollView,FlatList,TouchableOpacity,Image,ImageBackground} from 'react-native'
import React from 'react'
import List from './List'

const Slider=(props)=>
<View style={{backgroundColor:'lightblue'}}>
<FlatList horizontal data={props.arr} renderItem={(ele)=>
            <TouchableOpacity style={styles.container} >
                <ImageBackground style={{height:'100%',width:'100%',borderRadius:10,}} source={{uri:ele.item.image}}>
                <View style={{padding:5,backgroundColor:'white',width:'20%',borderRadius:5}}><Text style={{fontSize:10}}>New</Text></View>
                <Text style={styles.heading}>{ele.item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        }/>
</View>

const Home = () => {
    let topPicksArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let bcozOfSkillsUFollowArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let thisWeeksTopCoursesArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let newReleasesArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let popularOnLinkedinLearningArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let mostLikedOnLinkedinLearningArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    let relatedCoursesArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
    
    //this arr is for top component (Slider)
    let newCoursesArr=[{image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'React'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'JavaScript js jsx labodibo labodibo'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE7yPsVhHzrfLmZu3AkmmR4O7axiuNsllxQ&usqp=CAU' , name:'Angular'}]
  return (
    <View>
      <ScrollView >
      <Slider arr={newCoursesArr} />
      <List arr={topPicksArr} showSeeAll={false} heading={'Top Picks for BSC'}></List>
      <List arr={bcozOfSkillsUFollowArr} showSeeAll={false} heading={'Because of skills you follow'}></List>
      <List arr={thisWeeksTopCoursesArr} showSeeAll={false} heading={"This week's top courses"}></List>
      <List arr={newReleasesArr} showSeeAll={false} heading={'New releases'}></List>
      <List arr={popularOnLinkedinLearningArr} showSeeAll={false} heading={'Popular on Linkedin Learning'}></List>
      <List arr={mostLikedOnLinkedinLearningArr} showSeeAll={false} heading={'Most liked on Linkedin Learning'}></List>
      <List arr={relatedCoursesArr} showSeeAll={false} heading={'Related Courses'}></List>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        // borderColor:'black',
        // borderWidth:2,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        margin:20,height:150,width:250,paddingBottom:10,paddingTop:10,borderRadius:10
    },
    heading:{
        // fontSize:20,
        // borderColor:'black',
        // borderWidth:2,
    },
})