import React, {useState} from 'react';
import {Text,View,TextInput,Button,Modal, Image} from 'react-native';
import axios from 'axios'

function Addprod(){
    const [id,setId] = useState()
    const [tit,setTit]=useState('')
    const [prc,setPrc]=useState('')
    const [des,setDes]=useState('')
    const [img,setImg]=useState('')
    const [cat,setCat]=useState('')
    const [modlVis, setModlVis] = useState(false);
    const [data1, setData1] = useState(false);

    const Prodetai = {

       // id:id,
        title:tit,
        price:prc,
        description:des,
        category:cat,
        image:img
    }

    async function addpro (){
        setData1(Prodetai)
            await axios.post('https://fakestoreapi.com/products',Prodetai)
            .then((rst)=>{
                console.log(rst.data)
                setModlVis(true)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    



    return(

        <View>
            <Text style={{fontSize:20}}>Add Product</Text>
            {/* <Text>Enter ID</Text>
        <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setId(a)}
       ></TextInput> */}
            <Text>Enter Title</Text>
        <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setTit(a)}
       ></TextInput>
       <Text>Enter Price</Text>
       <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setPrc(a)}
       ></TextInput>
       <Text>Enter Description</Text>
       <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setDes(a)}
       ></TextInput>
       <Text>Enter Image</Text>
        <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setImg(a)}
       ></TextInput>
       <Text>Enter Category</Text>
       <TextInput style={{borderWidth:1}}
       onChangeText={(a)=>setCat(a)}
       ></TextInput>

       <Button title='Add' onPress={()=>addpro()}></Button>

     
       <Modal
        visible={modlVis}>
        <View > 
            <Text style={{fontSize:35}}>Product Added</Text>
                    <Text>Title:{data1.title}</Text>
                   <Text>Price:{data1.price}</Text>
                   <Text>Description:{data1.description}</Text>
                   <Image style={{height:40,width:40}} source={{uri:data1.image}}></Image>
                   <Text>Category: {data1.category}</Text>
            <Button onPress={() => setModlVis(false)} title={'Close'}>
            </Button>
        </View>
      </Modal>  
    </View>
    )
}
export default Addprod