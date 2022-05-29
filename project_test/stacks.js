import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Appone from './Appone';
import Prod from './Products';
import Addprod from './AddProd';

const Stack = createStackNavigator();

export const Appstack = () =>{

    return <Stack.Navigator initialRouteName='App1'>
          <Stack.Screen name="App1" component={Appone}  options={{headerShown:false}} />
          <Stack.Screen name="Prod" component={Prod}  options={{headerShown:false}} />
          <Stack.Screen name="AdProd" component={Addprod}  options={{headerShown:false}} />
        
        </Stack.Navigator> 
  }