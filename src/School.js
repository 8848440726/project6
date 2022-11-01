import React,{Component} from "react";
import {
    View,StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class School extends Component{
    render(){
        return(
            <View style={styles.container} >
              <Image source={require('../assets/clogo.png')}
            style={styles.image}></Image>
            <Image source={require('../assets/2logo.png')}
            style={styles.logo}></Image>
            <Text style={{fontSize:23,color:'black',fontWeight:'bold',marginTop:140}}>
                Select your school board
            </Text>
            <View style={styles.bottomcontainer}>

                <View style={styles.inputcontainer}>
           <TextInput
           placeholder='Select board'> 
           </TextInput>
           <View style={styles.inputview}>
           <Icon name ='expand-more' size={20}></Icon>
           </View>
           </View>

           <View style={styles.inputcontainer}>
           <TextInput
           placeholder='Select class'> 
           </TextInput>
           <View style={styles.inputview}>
           <Icon name ='expand-more' size={20}></Icon>
           </View>
           </View>

           <TouchableHighlight style={styles.button}
           onPress={()=>this.props.navigation.navigate('Apptour')}>
            <Text style={styles.buttontext}>Continue</Text>
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
        marginTop:90
    },
    logo:{
        height:150,
        width:150,
        marginBottom:10
    },
    bottomcontainer:{
        backgroundColor:'black',
        height:'30%',
        width:'100%',
        marginTop:20,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40
    },
    inputview:{
        marginLeft:200,
        marginTop:15
    
      },
      button:{
        width:'78%',
        height:50,
        backgroundColor:'lime',
        borderRadius:8,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
      },
      buttontext:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    
      },
      inputcontainer:{
        flexDirection:'row',
        height:55,
        width:'90%',
        borderWidth:1,
        marginTop:5,
        paddingLeft:20,
        backgroundColor:'grey',
        marginLeft:5,
        borderRadius:8
      }
 })