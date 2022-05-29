/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {Text,View,TextInput,Button,Alert} from 'react-native';
 import auth from '@react-native-firebase/auth';
 import Prod from './Products';

 
 
 
 function Appone({navigation}){
   const [num,setNum]=useState('')
   const [otp,setOtp]=useState('')
   const [snt,setSnt]=useState(false)
   const [confirm, setConfirm] = useState(null);
 
   console.log('num',num)
 
   
 
   async function SignInPh() {
       if(num.length ===10){
 
     console.log('inside')
     const confirmation = await auth().signInWithPhoneNumber(`+91${num}`);
     console.log(confirmation)
     setConfirm(confirmation);
     setSnt(true)
   }else{
       Alert.alert('Enter 10 digit phone number')
   }
}
 
   async function confirmCode() {
     try {
       await confirm.confirm(otp);
       navigation.navigate('Prod')
 
       //console.log('verify')
     } catch (error) {
       Alert.alert('Invalid OTP.');
     }
   }
   
   // if (!confirm) {
   // console.log('confirmed')
   // }
 
 
 
   return(
 
   
     <View>
        <Text style={{fontSize:30}}>SIgn-in Using Phone Number</Text>
       <Text>Enter Phone Number</Text>
       <TextInput  style={{borderWidth:0.5}}
       onChangeText={(a)=>setNum(a)}
       keyboardType={'numeric'}
       //maxLength={10}
       ></TextInput>
       <View>
       <Button onPress={()=>SignInPh()} title='Recieve OTP'></Button>
       </View>
{snt &&
       <View>
       
       <Text>Enter OTP</Text>
       <TextInput  style={{borderWidth:0.5}}
       onChangeText={(a)=>setOtp(a)}
       keyboardType={'numeric'}
       //maxLength={10}
       ></TextInput>
       
       <Button onPress={()=>confirmCode()} title='Verify OTP'></Button>

       </View>
 }
       {/* <Button onPress={()=> navigation.navigate('Prod')} title='Prd'></Button> */}

     </View>
  
   )
 }
 
 export default Appone;
 