import React,{Component} from "react";
import {View,StyleSheet,Image,BackgroundImage,TouchableHighlight,Text, ImageBackground}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                 <View style={{ width:'100%',height:'100%'}}>
                 <ImageBackground style={{marginTop:160,width:'100%',height:'100%'}}
                 source={require('../../assets/image1.jpg')}>
                 </ImageBackground>
                 
                 </View>
                 
                  <View style={styles.headercard}>

                    <View style={styles.profilecontainer}>
                    <Image source={require('../../assets/gcat.png')}
                    style={styles.profileicon}></Image>
                    <View style={{marginLeft:10}}>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>Aaron Taylor </Text>
                    <Text>ID:1234567</Text>
                    </View>
                  </View>
                     
                    <Text style={{color:'black',fontSize:18,fontWeight:'500',marginLeft:10,marginTop:10}}>Personal Info</Text>
                    <View style={{marginTop:15}}>
                    <View style={styles.itemcontainer}>
                     <Text>Account Settings </Text>
                     <Text style={{marginLeft:20,fontWeight:'500',color:'black'}}>Aaron Taylor</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                     <Text>Email </Text>
                     <Text style={{marginLeft:95,fontWeight:'500',color:'black'}}>reactnative@gmail.com</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                     <Text>Number </Text>
                     <Text style={{marginLeft:79,fontWeight:'500',color:'black'}}>+91999999</Text>
                    </View>

                    <View style={styles.itemcontainer1}>
                     <Text style={{marginLeft:10,fontWeight:'500',color:'black',marginTop:13,fontSize:18}}>Course Info </Text>
                    </View>
                    
                    <View style={styles.itemcontainer}>
                     <Text>Center </Text>
                     <Text style={{marginLeft:79,fontWeight:'500',color:'black'}}>Inmakes edu</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                     <Text>Course </Text>
                     <Text style={{marginLeft:79,fontWeight:'500',color:'black'}}>Plus Two Science</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                     <Text>Payment Status </Text>
                     <Text style={{marginLeft:25,fontWeight:'500',color:'black'}}>Free</Text>
                    </View>
                    <View style={styles.itemcontainer}>
                     <Text>Expiry Date </Text>
                     <Text style={{marginLeft:57,fontWeight:'500',color:'black'}}>Not Applicable</Text>
                    </View>
                    </View>
                    <View style={styles.button}>
                    <Icon name='web' color='white' size={21} ></Icon>
                <TouchableHighlight>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',}}>Custom Payment</Text>
                </TouchableHighlight>
                <View style={{marginLeft:40}}>
                <Icon name='chevron-right' size={21} color='white'></Icon>
                </View>
            </View>
                </View>
        
            </View>
   ) }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        
    },
    headercard:{
        width:'85%',
        height:'70%',
        elevation:8,
        backgroundColor:'white',
        borderRadius:8,
        marginBottom:700
        
    },
    button:{
        width:'78%',
        height:55,
        backgroundColor:'green',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginLeft:30,
        marginTop:10
        
      },
      itemcontainer:{
        width:'100%',
        height:45,
        padding:10,
        backgroundColor:'white',
        elevation:5,
        flexDirection:'row'
      },
      itemcontainer1:{
        width:'100%',
        height:70,
        padding:10,
        backgroundColor:'white',
        elevation:5,
        
      },
      profilecontainer:{
        height:'15%',
        width:'100%',
        flexDirection:'row',
        },
      profileicon:{
        height:60,
        width:60,
        backgroundColor:'black',
        borderRadius:50,
        marginTop:10,
        marginLeft:10
      },
      image1:{
        width:'100%',
        height:'45%',
    
      },
      backgroundimage:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
      },
      backcard:{
        width:'100%',
        height:'45%',
        elevation:10,
        marginTop:620,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
      }
})