import React,{Component} from "react";
import { View,StyleSheet,TouchableHighlight,Text,ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Videos extends Component{
    render(){
        return(
            <ScrollView>
             <View style={styles.container}>

                <View style={styles.card}>
                    <ImageBackground style={{width:'100%',height:'80%',marginTop:30}}
                    source={require('../../assets/image4.jpg')}>

                    <TouchableHighlight>
                        <Text></Text>
                    </TouchableHighlight>
                    </ImageBackground>

                    <View style={{marginBottom:0}}>
                    <TouchableHighlight 
                    underlayColor={'transparent'}
                    onPress={()=>this.props.navigation.navigate('Videosin')}>
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row',marginBottom:60}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
                </View>
            
                <View style={styles.card}>
                    <ImageBackground style={{width:'100%',height:'80%',marginTop:30}}
                    source={require('../../assets/image4.jpg')}>

                    <TouchableHighlight>
                        <Text></Text>
                    </TouchableHighlight>
                    </ImageBackground>

                    <View style={{marginBottom:0}}>
                    <TouchableHighlight >
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row',marginBottom:60}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
                </View>
                </View>
                </View>
            
                <View style={styles.card}>
                    <ImageBackground style={{width:'100%',height:'80%',marginTop:30}}
                    source={require('../../assets/image4.jpg')}>

                    <TouchableHighlight>
                        <Text></Text>
                    </TouchableHighlight>
                    </ImageBackground>

                    <View style={{marginBottom:0}}>
                    <TouchableHighlight >
        <Text style={styles.text}>Long chapter name can be shown here.</Text>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row',marginBottom:60}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>Chapter 1</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:0}}>
                    <Icon name='radio-button-checked' size={15} color={'grey'} ></Icon>
                    <Text style={{fontSize:11,color:'grey',fontWeight:'bold'}}>3 Parts</Text>
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
        backgroundColor:'white',
    
    },
    card:{
        width:'85%',
        height:'30%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
        marginTop:30,
        elevation:9,
        borderRadius:8
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        marginLeft:5
    }
})