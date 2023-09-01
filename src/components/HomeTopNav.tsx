import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const HomeTopNav = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:"35%",margin:2,height:"10%",alignItems:'center'}}>
      <Text style={{textAlign:'center',fontSize:22,color:"blue"}}>Mega Mall</Text>
      <View style={{flexDirection:'row',width:"25%"}}>
      <Ionicons name={"notifications-outline"} size={25}/>
      <Ionicons name={"cart-outline"} size={25}/>
      </View>
    </View>
  )
}

export default HomeTopNav