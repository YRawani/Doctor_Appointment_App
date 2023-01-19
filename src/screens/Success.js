import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/checked.png')} style={styles.checked}/>
      <Text style ={styles.txt}>{'Your Appointment Successfully Booked'}</Text>
      <TouchableOpacity style={styles.gotohome} onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    checked:{
        height:100,
        width:100,
    },
    txt:{
        fontSize:16,
        fontWeight:'700',
        marginTop:20,
    },
    gotohome:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:0.5,
        marginTop:20,
    }
})