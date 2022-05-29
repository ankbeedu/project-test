/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text,View,TextInput,Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { Appstack } from './stacks';


function App(){

  return(

    <NavigationContainer>

      <Appstack/>
 
    </NavigationContainer>
  )
}

export default App;
