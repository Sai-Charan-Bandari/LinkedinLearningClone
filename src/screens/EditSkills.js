import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'

const EditSkills = (props) => {
    
    return (
        <View style={styles.container}>
            <Button title="go back" onPress={() => { props.setEditPage(false) }}></Button>
            <TouchableOpacity style={{ borderColor: 'lightgrey', borderBottomWidth: 1 }} onPress={() =>{}}>
                    <Text>ADD MORE SKILLS</Text>
                </TouchableOpacity>

            <FlatList data={props.skillsArr} renderItem={(ele) =>
                <TouchableOpacity style={{ borderColor: 'lightgrey', borderBottomWidth: 1 }} onPress={() =>
                    {
                        const k=props.skillsArr.filter((item,index) => index != ele.index)
                        console.log(k)
                        props.setSkillsArr(k)        
                    }
                            }>
                    <Text>{ele.item}</Text>
                    <Image style={{ width: 20, height: 20, alignSelf: 'flex-end', marginRight: 20 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/334/334047.png" }} />
                </TouchableOpacity>
            }></FlatList>
        </View>
    )
}

export default EditSkills

const styles = StyleSheet.create({
    container:{
       alignItems:'center'
    },
})