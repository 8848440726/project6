import React,{Component} from "react";
import { View,StyleSheet,Text,Image,TouchableHighlight,ImageBackground}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';


export default class Home extends Component{
   
    render(){ 
        return(
            <ScrollView>
            <View style={styles.container} >
            <View style={styles.headercard}>
                    <TouchableHighlight style={styles.button}
                    onPress={()=>this.props.navigation.navigate('Mydrawer')}>
                        <Icon name='apps' size={35} color='green'></Icon>
                    </TouchableHighlight>
                    <Image source={require('../../assets/clogo.png')}
                    style={styles.logo}></Image>

                    <View style={styles.button2}>
                    <TouchableHighlight >
                        <Icon name='home' size={20} color='green'></Icon>
                    </TouchableHighlight>
                    <Text style={{color:'green',marginLeft:10}}>Classes</Text>
                    </View>
                </View>
                <View style={{marginLeft:35}}>
                    <Text style={{marginTop:30,color:'teal',fontWeight:'bold',fontSize:16}}>Good morning</Text>
                    <Text style={{color:'teal',fontWeight:'bold',fontSize:22}}>Aaron Taylor</Text>
                    </View>


                <View style={{height:'6%',width:'100%'}}>
                <ImageBackground style={styles.imagebackground}
                source={require('../../assets/image1.jpg')}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                        <View style={{marginRight:100}}>
                    <Text style={{color:'white',fontSize:15}}>Class</Text>
                    <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>Plus two science</Text>
                </View>
                   <View>
                    <Icon name='expand-more' color='white' size={20} ></Icon>
                    </View>
                    </View>
                    </ImageBackground>
                    </View>


                   
                    <View style={{flexDirection:'row',marginTop:10,height:'6%'}}>
                    <ScrollView horizontal={true} 
                    showsHorizontalScrollIndicator={false}>
                        <View style={{width:800,flexDirection:'row'}}>
                    <View style={styles.button3}>
                        <Icon name='circle' size={30} color='lime'></Icon>
                    <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Biology')}>
                        <Text style={styles.buttontext}>Biology</Text>
            </TouchableHighlight>
            </View>

            <View style={styles.button3}>
                        <Icon name='circle' size={30} color='lime'></Icon>
                    <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Biology')} >
                        <Text style={styles.buttontext}>Physics</Text>
            </TouchableHighlight>
            </View>

            <View style={styles.button3}>
                        <Icon name='circle' size={30} color='lime'></Icon>
                    <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Biology')}>
                        <Text style={styles.buttontext}>Chemistry</Text>
            </TouchableHighlight>
            </View>

            <View style={styles.button3}>
                        <Icon name='circle' size={30} color='lime'></Icon>
                    <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Biology')}>
                        <Text style={styles.buttontext}>Maths</Text>
            </TouchableHighlight>
            </View>
</View>
</ScrollView>
</View>


<View style={{height:'3%',marginLeft:10}}>
<Text style={{fontWeight:'bold',
marginTop:10,fontSize:18}}>Recent courses</Text>
</View>


<View style={{flexDirection:'row',height:'20%'}}>
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false} >
                        <View style={{width:1100,flexDirection:'row',height:'100%'}}>
<View style={styles.card1}>
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../assets/image3.jpg')}>
        <View style={{flexDirection:'row'}}>
        <Icon name='play-arrow' size={45} color='white' ></Icon>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Course Title</Text>
        </View>
    </ImageBackground>
</View>

<View style={styles.card1}>
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../assets/image3.jpg')}>
        <View style={{flexDirection:'row'}}>
        <Icon name='play-arrow' size={45} color='white' ></Icon>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Course Title</Text>
        </View>
    </ImageBackground>
</View>

<View style={styles.card1}>
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../assets/image3.jpg')}>
        <View style={{flexDirection:'row'}}>
        <Icon name='play-arrow' size={45} color='white' ></Icon>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Course Title</Text>
        </View>
    </ImageBackground>
</View>

<View style={styles.card1}>
    <ImageBackground style={{width:'100%',height:'100%'}}
    source={require('../../assets/image3.jpg')}>
        <View style={{flexDirection:'row'}}>
        <Icon name='play-arrow' size={45} color='white' ></Icon>
        <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Course Title</Text>
        </View>
    </ImageBackground>
</View>
</View>
</ScrollView>
</View>


<View style={{flexDirection:'row'}}>
                    <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false} >
                        <View style={{width:1200,flexDirection:'row'}}>

<View style={styles.card2}>
<View style={{marginLeft:20}}>
<View style={styles.circle}>
</View>
<Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>
    Target live classes 
</Text>
<Text style={{fontSize:17,color:'white',fontWeight:'bold'}}>
 Live classes by best teachers by learning hub to clear your doubts and provide individual attention.
</Text>
</View>
<TouchableHighlight style={styles.button4}>
<Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Book a free class
</Text>
</TouchableHighlight>
</View>

<View style={styles.card2}>
<View style={{marginLeft:20}}>
<View style={styles.circle}>
</View>
<Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>
    Target live classes 
</Text>
<Text style={{fontSize:17,color:'white',fontWeight:'bold'}}>
 Live classes by best teachers by learning hub to clear your doubts and provide individual attention.
</Text>
</View>
<TouchableHighlight style={styles.button4}>
<Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Book a free class
</Text>
</TouchableHighlight>
</View>

<View style={styles.card2}>
<View style={{marginLeft:20}}>
<View style={styles.circle}>
</View>
<Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>
    Target live classes 
</Text>
<Text style={{fontSize:17,color:'white',fontWeight:'bold'}}>
 Live classes by best teachers by learning hub to clear your doubts and provide individual attention.
</Text>
</View>
<TouchableHighlight style={styles.button4}>
<Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Book a free class
</Text>
</TouchableHighlight>
</View>

<View style={styles.card2}>
<View style={{marginLeft:20}}>
<View style={styles.circle}>
</View>
<Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>
    Target live classes 
</Text>
<Text style={{fontSize:17,color:'white',fontWeight:'bold'}}>
 Live classes by best teachers by learning hub to clear your doubts and provide individual attention.
</Text>
</View>
<TouchableHighlight style={styles.button4}>
<Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Book a free class
</Text>
</TouchableHighlight>
</View>

</View>
</ScrollView>
</View>




</View>
</ScrollView>

           
    )}
}
const styles=StyleSheet.create({
    container:{
      height:1200,
      width:'100%',
      backgroundColor:'white'
      
    },
    headercard:{
        height:'6%',
        width:'100%',
        flexDirection:'row',
        backgroundColor:'white',
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
     imagebackground:{
        height:'90%',
        width:'90%',
        marginLeft:30,
        marginTop:20,
        backgroundColor:'white',
        
     },
     button3:{
        marginTop:20,
        width:'20%',
        height:45,
        marginLeft:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
},
     buttontext:{
        fontSize:14,
        fontWeight:'800',
        color:'black'
     },
    card1:{
        height:'80%',
        width:'24%',
        backgroundColor:'red',
        marginLeft:20,
        marginTop:30
    },
    card2:{
        height:350,
        width:'22%',
        backgroundColor:'black',
        marginLeft:30,
        borderRadius:8,
        marginTop:30

    },
    circle:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'grey',
        marginTop:30,
        
    },
    button4:{
        
            width:'78%',
            height:50,
            backgroundColor:'lime',
            borderRadius:8,
            marginTop:30,
            alignItems:'center',
            justifyContent:'center',
            marginLeft:30
    }

})