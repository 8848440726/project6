import React,{Component} from "react";
import {
    View,StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Register extends Component{
    render(){
        return(
            <View style={styles.container} >
              <Image source={require('../assets/clogo.png')}
            style={styles.image}></Image>
            <Image source={require('../assets/2logo.png')}
            style={styles.logo}></Image>
            <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginTop:20}}>Student details</Text>
            <View style={styles.bottomcontainer}>
           <TextInput style={styles.inputview}
           placeholder='Full name'>
           </TextInput>
           <TextInput style={styles.inputview}
           placeholder='Email'
           selectionColor={'green'}>
           </TextInput>
           <View style={styles.inputview}>
           <TextInput
           placeholder='Select state'>
           </TextInput>
           <View style={styles.icon}>
            <Icon name='expand-more' size={20}></Icon>
           </View>
           </View>
           <TextInput style={styles.inputview}
           placeholder='Pin code'>
           </TextInput>
           <TouchableHighlight style={styles.button}
           onPress={()=>this.props.navigation.navigate('School')}>
            <Text style={styles.buttontext}>Register</Text>
           </TouchableHighlight>
            </View>
            </View>
        )
    }
}
 const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:250,
        height:60,
        marginTop:40
    },
    logo:{
        height:150,
        width:150,
        marginBottom:50
    },
    bottomcontainer:{
        backgroundColor:'black',
        height:'50%',
        width:'100%',
        marginTop:20,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    inputview:{
        height:55,
        width:'90%',
        borderWidth:1,
        marginTop:5,
        paddingLeft:20,
        backgroundColor:'grey',
        marginLeft:5,
        borderRadius:8
    
      },
      button:{
        width:'78%',
        height:50,
        backgroundColor:'lime',
        borderRadius:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
      },
      buttontext:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    
      },
      icon:{
        marginLeft:200,
        marginTop:15
      }
 })