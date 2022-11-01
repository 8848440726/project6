import React,{Component} from "react";
import{
    View,StyleSheet,Text,TouchableHighlight
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Apptour extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardtext}>Image/Illustrations</Text>
            </View>
            <Text style={{fontSize:25,color:'black',fontWeight:'bold',marginTop:30}}>App tour title</Text>
            <Text>The app tour description goes here.</Text>
            <TouchableHighlight style={styles.button}
            onPress={()=>this.props.navigation.navigate('Mydrawer')}>
                <Icon name='arrow-forward' size={20} color={'white'}></Icon>
            </TouchableHighlight>
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
    card:{
        width:'90%',
        height:'70%',
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        
    },
    cardtext:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    button:{
        width:'25%',
        height:'10%',
        backgroundColor:'green',
        borderRadius:8,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    }
})