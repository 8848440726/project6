import React,{Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native'
export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        
          <Image source={require('../assets/clogo.png')}
          style={styles.logo}></Image>
          <View style={styles.textview}>
          <Text style={styles.text}>Enter your mobile number</Text>
          <Text style={{fontSize:16,fontWeight:'bold'}}>We will send you an OTP to verify.</Text>
          </View>
    <View style={styles.bottomcontainer}>
        <View style={styles.bottombox}>
        <TextInput style={styles.smallbox}
        placeholder='91+'
        placeholderTextColor={'white'}
        fontSize={18}
        paddingLeft={10}></TextInput>
        <TextInput style={styles.inputview}
         placeholder='Mobilenumber'
        fontSize={18}
        ></TextInput>

        </View>
        <TouchableHighlight style={styles.button}
        underlayColor='transparent'
        onPress={()=>this.props.navigation.navigate('Flexbox')}>
            <Text style={styles.buttontext}>continue</Text>
        </TouchableHighlight>
    </View>
      </View>
    )
  }
}


const styles= StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    height:100,
    width:355,
    marginTop:197
    
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    color:'black',

    
  },
  inputview:{
    height:55,
    width:'70%',
    borderWidth:1,
    marginTop:40,
    paddingLeft:20,
    backgroundColor:'grey',
    marginLeft:5,
    borderRadius:8

  },
  button:{
    width:'78%',
    height:50,
    backgroundColor:'green',
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
  bottomcontainer:{
    backgroundColor:'black',
    height:'25%',
    width:'100%',
    marginTop:20,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'

  },
  smallbox:{
    height:55,
    width:'15%',
    backgroundColor:'grey',
    marginTop:40,
    borderRadius:8
    
  },
  bottombox:{
    flexDirection:'row',
    paddingLeft:20
  },
  textview:{
    marginTop:170
  }
  
})
