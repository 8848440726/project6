import React,{Component} from "react";
import {View,StyleSheet,Image,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component{
    
    render(){
        return(
        
                 <View style={styles.container} >
            
                    <TouchableHighlight style={styles.button}
                    >
                        <Icon name='apps' size={35} color='green'></Icon>
                    </TouchableHighlight>
                    <Image source={require('../assets/clogo.png')}
                    style={styles.logo}></Image>

                    <View style={styles.button2}>
                    <TouchableHighlight >
                        <Icon name='apps' size={20} color='green'></Icon>
                    </TouchableHighlight>
                    <Text style={{color:'green',marginLeft:10}}>Classes</Text>
                    </View>
                </View>
            
        )
    }
}

styles=StyleSheet.create({
    container:{
      height:'100%',
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },

    button:{
        width:'14%',
        height:'66%',
        elevation:10,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
     },
     logo:{
        width:180,
        height:50,
        marginRight:50,
        marginLeft:5
        
     },
     button2:{
        width:'25%',
        height:'66%',
        elevation:10,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
     },
})
