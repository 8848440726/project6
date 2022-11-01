import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    

}from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons'

    export default class Flexbox extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Image source={require('../assets/clogo.png')}
            style={styles.image}></Image>
            <Image source={require('../assets/2logo.png')}
            style={styles.logo}></Image>
            <Text style={styles.text}>Verification code</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Please type the verification code sent to</Text>
            <View style={styles.bottomcontainer}>
                <View style={styles.blockview}>
            <TextInput style={styles.inputview}>
            </TextInput>
            <TextInput style={styles.inputview}>
            </TextInput>
            <TextInput style={styles.inputview}>
            </TextInput>
            <TextInput style={styles.inputview}>
            </TextInput>
            <TextInput style={styles.inputview}>
            </TextInput><TextInput style={styles.inputview}>
            </TextInput>
            </View>
            <TouchableHighlight style={styles.button}
            onPress={()=>this.props.navigation.navigate('Register')}>
                <Text style={styles.buttontext}>Resend OTP</Text>
            </TouchableHighlight>
            <Text style={{fontSize:15,color:'grey',marginTop:5}}>Resend after 28s</Text>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Icon name='call' color={'lime'} size={22} ></Icon>
                <Text style={{fontSize:20,color:'lime',fontWeight:'bold',marginLeft:5}}>Contact Us</Text>

            </View>

            </View>
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
    image:{
        width:355,
        height:100,
        marginTop:30
    },
    logo:{
        height:200,
        width:200,
        marginBottom:50
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        marginTop:20
    },
    bottomcontainer:{
        backgroundColor:'black',
        height:'29%',
        width:'100%',
        marginTop:20,
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center',
        marginTop:90
    },
    inputview:{
        width:'15%',
        height:'100%',
        backgroundColor:'grey',
        borderRadius:6,
        borderWidth:1
    },
    blockview:{
        flexDirection:'row'
    },
    button:{
        width:'78%',
        height:50,
        backgroundColor:'green',
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
      contenttext:{
        fontSize:40,
        color:'pink',
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:40
    }
})