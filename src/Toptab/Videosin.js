import React,{Component} from "react";
import { View,StyleSheet,TouchableHighlight,Text,ImageBackground, ScrollView ,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Videosin extends Component{
    render(){
        return(
            <ScrollView>
             <View style={styles.container}>
            <View style={{width:'100%',height:'20%'}}>
            
            <ImageBackground style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}
            source={require('../../assets/image4.jpg')}>
            <Icon name='play-arrow' size={90} color='white'></Icon>
            </ImageBackground>
            </View>

           <View style={{height:'9%',width:'100%'}}>
            <View style={{flexDirection:'row'}}>
                <View  style={{height:'100%',width:'100%',flexDirection:'row'}}>
            <View style={styles.card1}>
                
                <Text style={styles.text}>Long chapter name can be shown here</Text>
            
            </View>
            
            <View  style={{height:'100%',width:'100%'}}>
            <View style={styles.card2}>
            <Icon name='file-download' size={30} color='white'></Icon>
            <Text style={{color:'white'}}>Download</Text>
            </View>
            </View>
            </View>
            </View>
            <View  style={{height:'50%',width:'100%'}}>
            <View style={styles.card3}>
                <View style={{flexDirection:'row',}}>
                <View style={{flexDirection:'row'}} >
                    <Icon name='chevron-left' size={20} color='white'></Icon>
                    <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Videos')}>
                <Text style={{color:'white'}}>Previous</Text>
                </TouchableHighlight>
                </View>
                <View style={{flexDirection:'row',marginLeft:60}} >
                    <Icon name='radio-button-checked' size={20} color='lime'></Icon>
                <Text style={{color:'lime'}}>Part1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:60}} >
                <Text style={{color:'white',}}>Next</Text>
                <Icon name='chevron-right' size={20} color='white'></Icon>
                </View>   
                </View>
            </View>
            </View>
            <View style={{width:'100%',height:'100%',marginTop:50}}>
             <View style={{height:'100%',width:'100%',marginTop:10,marginLeft:20}}>
            <View style={styles.card4}>
                <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={styles.text1}>your sample question can be shown here no matter how long</Text>
            <Image style={styles.image}
            source={require('../../assets/gcat.png')}></Image>
            </View>
            </View>
            </View>
            
            <View style={{height:'100%',width:'100%',marginLeft:20}}>
            <View style={styles.card5}>
                <View style={{flexDirection:'row'}}>
                 <TextInput
                 placeholder='Ask a question?'
                 placeholderTextColor='black'
                 >
                 </TextInput>
                 <TouchableHighlight style={styles.button}>
                    <Text style={{color:'black'}}>Post</Text>
                 </TouchableHighlight>
                    </View>
                    </View>
                </View>
            <View style={styles.button1}>
                <Icon name='call' size={20} color='lime'></Icon>
                <TouchableHighlight >
                    <Text style={styles.text}>Chat Now</Text>
                </TouchableHighlight>
            </View>
            </View>
            </View>
            </View>
            
        </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:950,
        backgroundColor:'black',
        flexWrap:'wrap'
    },
    card:{
        width:'100%',
        height:'25%',
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        borderRadius:8,
        
    },
    card1:{
        width:'80%',
        height:'100%',
        backgroundColor:'charcoal',
        alignItems:'center',
        justifyContent:'center',
        elevation:7,
        

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:15,
        
    },
    card2:{
        width:'20%',
        height:'100%',
        backgroundColor:'gunmetal',
        alignItems:'center',
        justifyContent:'center',
        elevation:9,
        

    },
    card3:{
        width:'100%',
        height:'100%',
        backgroundColor:'gunmetal',
        alignItems:'center',
        justifyContent:'center',
        elevation:9,
        
    },
    card4:{
        width:'90%',
        height:'70%',
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        elevation:9,
        marginTop:70,
        borderRadius:8
     },
     image:{
        height:50,
        width:50,
        marginRight:40
     },
     text1:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        marginLeft:50,
        
     },
     card5:{
        width:'90%',
        height:'70%',
        backgroundColor:'silver',
        alignItems:'center',
        justifyContent:'center',
        elevation:9,
        marginTop:70,
        borderRadius:8
     },
     button:{
        width:'18%',
        height:'70%',
        backgroundColor:'white',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:150,
        marginTop:10
    }, 
    button1:{
        width:'90%',
        height:'50%',
        borderWidth:2,
        borderColor:'lime',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:60,
        flexDirection:'row',
        marginLeft:20
    }
})