 import React, {useState,useEffect} from 'react';
 import {Text,View,TextInput,Button,Image, ScrollView,Linking,PermissionsAndroid} from 'react-native';
 import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
 function Prod({navigation}){
   const [num,setNum]=useState('')
   const [otp,setOtp]=useState('')
   const [confirm, setConfirm] = useState(null);
   const [dta,setDta] =useState([''])
   const [tot,setTot]=useState()
   const [loc,setLoc]=useState()


console.log('dta',dta.length)

async function getprod(){
await axios('https://fakestoreapi.com/products')
.then((rst)=>{
    console.log(rst.data)
  // const abc1 = rst
   setDta(rst.data)
   
})
.catch((err)=>{
    console.log(err)
})

   }
function CalPrc(){
    var prc1 = 0 
for(var i=0; i<dta.length;i++){
    console.log('pr',dta[i].price)
    prc1=prc1+dta[i].price
}
console.log('prc1',prc1)
setTot(prc1)

}
async function Gtloc(){
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App Needs Location Permission',
        message: 'App Needs Location Permission',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
     console.log('granted')
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('position')
          console.log(position);
          const abc = [position.coords.latitude,position.coords.longitude]          
          setLoc(abc)
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            if(error.code === 1 ||error.code === 2 ||error.code === 3||error.code === 4||error.code === 5){
                Alert.alert('Turn On GPS or Location')
            }
          },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 }
    );
    } else {
      // Permission Denied
      Alert.alert('Allow Permission for device location');
     
    }


}



function Gotoloc(){
    const scheme =  'geo:0,0?q='
    const abcgeo = `${loc[0]},${loc[1]}`
    Linking.openURL(`geo:${scheme}${abcgeo})`)
}

useEffect(()=>{
    getprod()
    Gtloc()
},[])
   return(
 
     <View>
         <Button title='Add New Product' onPress={()=>navigation.navigate('AdProd')}></Button>
         <Button title='Calculate Total' onPress={()=>CalPrc()}></Button>
       <Text style={{fontSize:25}}>Total price:{tot}</Text>
       {/* <Button title='GetLoc' onPress={()=>Gtloc()}></Button>
       <Button title='GoToLoc' onPress={()=>Gotoloc()}></Button> */}
       {dta.length >0 &&
       <ScrollView style={{height:'85%'}}>
           {
               dta.map((itm)=><View key={itm.id} style={{padding:5}}>
                   <View style={{borderColor:'grey', borderWidth:2}}>
                    <TouchableOpacity onPress={()=>Gotoloc()}>
                   <Text>Title:{itm.title}</Text>
                   <Text>Price:{itm.price}</Text>
                   <Text>Description:{itm.description}</Text>
                   <Image style={{height:40,width:40}} source={{uri:itm.image}}></Image>
                   <Text>Category: {itm.category}</Text>
                   </TouchableOpacity>
                   </View>
               </View>)

           }


       </ScrollView>
 }
     </View>
   )
 }
 
 export default Prod;
 