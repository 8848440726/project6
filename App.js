import React from 'react'
import { View,StyleSheet,Text,TouchableHighlight,ImageBackground,Image } from 'react-native'
import{ NavigationContainer}from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './src/Login'
import Flexbox from './src/Flexbox'
import Register from './src/Register'
import School from './src/School'
import Apptour from './src/Apptour'
import Home from './src/Bottomtab/Home'
import Recent from './src/Bottomtab/Recent'
import Exams from './src/Bottomtab/Exams'
import Profile from './src/Bottomtab/Profile'
import Container from './src/Bottomtab/Container'
import Examcorner from './src/Drawer/Examcorner'
import Subscriptions from './src/Drawer/Subscriptions'
import Analytics from './src/Drawer/Analytics'
import Downloads from './src/Drawer/Downloads'
import Notifications from './src/Drawer/Notifications'
import Referrals from './src/Drawer/Referrals'
import Shareapp from './src/Drawer/Shareapp'
import Logout from './src/Drawer/Logout'
import DrawerContent from './src/Drawer/Drawer Content'
import Videos from './src/Toptab/Videos'
import Biology from './src/Biology'
import Videosin from './src/Toptab/Videosin'
import Chaptertest from './src/Toptab/Chaptertest'
import Resources from './src/Toptab/Resources'
import QNbank from './src/Toptab/QNbank'





const stack=createStackNavigator()
const bottomtab=createBottomTabNavigator()
const drawer = createDrawerNavigator()
const toptab = createMaterialTopTabNavigator()

function Mystack(){
    return(
    <stack.Navigator
    initialRouteName='Home'
    options={{headerShown:false}}>
    <stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Flexbox'
        component={Flexbox}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}}/>
        <stack.Screen
        name='School'
        component={School}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Apptour'
        component={Apptour}
        options={{headerShown:false}}/>
         
        <stack.Screen
        name='Mydrawer'
        component={Mydrawer}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Biology'
        component={Biology}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Mytab'
        component={Mytab}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Videosin'
        component={Videosin}
        options={{headerShown:false}}/>
    </stack.Navigator>
    )
}
 function Mybottomtab(){
    return(
    <bottomtab.Navigator>
            <bottomtab.Screen
            name='Home'
            component={Home}
            options={{
              headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='home' size={24} color='green'/>:
                <Icon name='home' size={24} color='grey'/>
              }}/>
            <bottomtab.Screen
            name='Recent'
            component={Recent}
            options={{
              headerShown:false,

                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='play-arrow' size={24} color='green'/>:
                <Icon name='play-arrow' size={24} color='grey'/>
              }}/>
            <bottomtab.Screen
            name='Exams'
            component={Exams}
            options={{
              headerShown:false,

                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='note' size={24} color='green'/>:
                <Icon name='note' size={24} color='grey'/>
              }}/>
            <bottomtab.Screen
            name='Profile'
            component={Profile}
            options={{
              headerShown:false,

                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='person' size={24} color='green'/>:
                <Icon name='person' size={24} color='grey'/>
              }}/>
            <bottomtab.Screen
            name='Contact'
            component={Container}
            options={{
              headerShown:false,

                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> focused ?<Icon name='mail' size={24} color='green'/>:
                <Icon name='mail' size={24} color='grey'/>
              }}/>
              </bottomtab.Navigator>
        )
        }
        
    function Mydrawer(){
       return( 
        <drawer.Navigator
       drawerContent={(props)=><DrawerContent{...props}/>}
       screenOptions={{
    
        drawerStyle:'100%',
        overlayColor:'transparent',
        
      headerStyle:{height:50}
       }}
       >
        <drawer.Screen
        name='Home'
        component={Mybottomtab}/>
          <drawer.Screen
          name='Exam corner'
          component={Examcorner}/>
          <drawer.Screen
          name='Subscriptions'
          component={Subscriptions}/>
          <drawer.Screen
          name='Analytics'
          component={Analytics}/>
          <drawer.Screen
          name='Downloads'
          component={Downloads}/>
          <drawer.Screen
          name='Notifications'
          component={Notifications}/>
          <drawer.Screen
          name='Referrals'
          component={Referrals}/>
          <drawer.Screen
          name='Share app'
          component={Shareapp}/>
          <drawer.Screen
          name='Logout'
          component={Logout}/>
        </drawer.Navigator>
        
 
    )
            }
function Mytab(){
  return(
       <View style={{width:'100%',height:'100%'}}> 
       <View style={{width:'100%',height:'30%'}}>  
        <ImageBackground style={styles.imagebackground}
                source={require('./assets/image1.jpg')}>
                    <TouchableHighlight style={styles.button}
                    underlayColor='transparent'
                    >
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
            </ImageBackground>  
            </View>     
    <toptab.Navigator
     options={{
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'grey'
    }}>
      <toptab.Screen
      name='Videos'
      component={Videos}/>
      <toptab.Screen
      name='Chapter Test'
      component={Chaptertest}/>
      <toptab.Screen
      name='Resources'
      component={Resources}/>
      <toptab.Screen
      name='QN Bank'
      component={QNbank}/>
    </toptab.Navigator>
    </View> 
  )
}
const styles=StyleSheet.create({
  imagebackground:{
    width:'100%',
    height:'100%',
},
button:{
    width:'14%',
    height:'20%',
    backgroundColor:'green',
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:20
}, 
headercard:{
  height:'6%',
  width:'100%',
  flexDirection:'row',
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
},
button1:{
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
})

export default function App(){
    return(
      <NavigationContainer>
        <Mystack/>
      </NavigationContainer>
    )
  }
