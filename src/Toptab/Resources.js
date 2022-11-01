import React,{Component} from "react";
import{
    View,StyleSheet,Text}from 'react-native'

export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Resources</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
})