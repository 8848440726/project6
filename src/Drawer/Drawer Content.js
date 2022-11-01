import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image
}from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { divide } from "react-native-reanimated";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.profilecontainer}>
                
              
                <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Home')}>
                 <Icon name='arrow-back' color={'white'} size={25}></Icon>
                </TouchableHighlight>
              
              

                <View style={styles.profileicon}>
                    <Image source={require('../../assets/gcat.png')}
                         style={styles.image}>
                         </Image>
                         </View>
                         <View style={{flexDirection:'column'}}>
                         <Text style={styles.nametext}>Aaron taylor</Text>
                         <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>ID=123556</Text>
                         </View>
                         </View>

                         <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Exam corner')}>Exam corner</Text>
                  <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Subscriptions')}>Subscriptions</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Analytics')}>Analytics</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Downloads')}>Downloads</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Notifications')}>Notifications</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Referrals')}>Referrals</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Shareapp')}>Shareapp</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>
                <Text style={styles.text}
                onPress={()=>this.props.navigation.navigate('Logout')}>Logout</Text>
                 <View 
                  style={{borderBottomColor:'black',
                  borderBottomWidth:1,
                  marginTop:20}}/>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    text:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        paddingLeft:20,
        marginTop:10
        

    },
    profilecontainer:{
        height:'30%',
        width:'100%',
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        },
        profileicon:{
            height:100,
            width:100,
            backgroundColor:'black',
            borderRadius:50,
            marginTop:60,
            marginRight:0
        },
        image:{
            height:'100%',
            width:'100%',
            
        },
        infoview:{
            marginleft:10,
            marginBottom:10
            
        },
        nametext:{
            color:'white',
            fontSize:25,
            marginRight:110,
            fontWeight:'bold',
            marginTop:70
     },
     button:{
        width:'60%',
        height:'25%',
        backgroundColor:'green',
        borderRadius:8,
        marginBottom:130,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:90
    
     },
    boxtext:{
        color:'white',
        fontSize:14,
        fontWeight:'bold'

    },
    bottombutton:{
        height:25,
            width:70,
            backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:9,
            borderColor:'yellow',
            borderWidth:2,
            marginTop:49,
            marginLeft:18
            
            
        },
        bottomtext:{
            fontSize:15,
            color:'white',
            marginLeft:70  
        },
        rightbottom:{
            marginTop:100
        }
})