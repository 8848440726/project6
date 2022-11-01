import React,{Component} from "react";
import { View,StyleSheet,Text,Image,ImageBackground, TouchableHighlight}from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Biology extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <ImageBackground style={styles.imagebackground}
                source={require('../assets/image1.jpg')}>
                    <TouchableHighlight style={styles.button}
                    onPress={()=>this.props.navigation.navigate('Mydrawer')}>
                    <Icon name='arrow-back' color='white' size={20} ></Icon>
                    </TouchableHighlight>
                    
                <Text style={{color:'white',fontSize:25,fontWeight:'bold',marginTop:60,marginLeft:30}}>Biology</Text>
                <View style={{flexDirection:'row',}}>
                <View style={{flexDirection:'row',marginLeft:30,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'lime'} ></Icon>
                    <Text style={{fontSize:11,color:'lime',fontWeight:'bold'}}>12 Chapters</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'lime'} ></Icon>
                    <Text style={{fontSize:11,color:'lime',fontWeight:'bold'}}>12 Chapters</Text>
                </View>
                </View>
            
                <View style={styles.card}>
                <TouchableHighlight
                underlayColor={'transparent'}
                onPress={()=>this.props.navigation.navigate('Mytab')}>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
                    <View style={{flexDirection:'row',marginTop:12}}>
                <View style={{flexDirection:'row',marginLeft:7,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
            </View>
             
            <View style={styles.card1}>
                <TouchableHighlight>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
                    <View style={{flexDirection:'row',marginTop:12}}>
                <View style={{flexDirection:'row',marginLeft:7,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
            </View>

            <View style={styles.card1}>
            
            <TouchableHighlight>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
        
                    <View style={{flexDirection:'row',marginTop:12}}>
                <View style={{flexDirection:'row',marginLeft:7,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
            </View>

            <View style={styles.card1}>
            <TouchableHighlight>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
                    <View style={{flexDirection:'row',marginTop:12}}>
                <View style={{flexDirection:'row',marginLeft:7,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
            </View>

            <View style={styles.card1}>
            <TouchableHighlight>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
                    <View style={{flexDirection:'row',marginTop:12}}>
                <View style={{flexDirection:'row',marginLeft:0,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:7}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
            </View>

                </ImageBackground>
            </View>
            </ScrollView>
        )
    }
}
 const styles=StyleSheet.create({

    container:{
        width:'100%',
        height:950,
        backgroundColor:'white'
    },
imagebackground:{
    width:'100%',
    height:'50%',
},
button:{
    width:'14%',
    height:'12%',
    backgroundColor:'green',
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:20
}, 
card:{
    width:'85%',
    height:'27%',
    backgroundColor:'white',
    marginTop:25,
    marginLeft:28,
    elevation:8,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
    
},
scrollview:{
    height:800,
    
},
text:{
    fontSize:22,
    fontWeight:'bold',
    color:'black',
    marginLeft:3,
    marginTop:18
},
card1:{
    width:'85%',
    height:'27%',
    backgroundColor:'white',
    marginTop:10,
    marginLeft:28,
    elevation:8,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
    
},

})