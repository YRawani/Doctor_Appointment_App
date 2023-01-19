import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler'

const Completed = () => {
  return (
    <View style={styles.container}>
        <Header icon={require('../images/back.png')} title={'Appointments'} />
        <View>
            <FlatList data={[1,1,1,1,1]} renderItem ={({item, index})=>{
                return(
                    <View style={styles.itemView}>
                        <Image source={require('../images/doctor.png')} style={styles.docImg}/>
                        <View>
                        <Text style={styles.docName}> {'Doctor Yash'} </Text>
                        <Text style={styles.timing}> {'08.10PM'} </Text>
                        </View>
                        <Text style={styles.status}>{'Completed'}</Text>
                    </View>
                )
            }}/>
        </View>
    </View>
  )
}

export default Completed

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
     itemView:{
        width:'94%',
        height:100,
        borderRadius:10,
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',

     },
     docImg:{
        height:60,
        width:60,
        borderRadius:10,
        marginLeft:10,
        
     },
     docName:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:20,
     },
     timing:{
        fontSize:16,
        fontWeight:'300',
        marginLeft:20,
        marginTop:5,
     },

     status:{
        marginLeft:20,
        borderRadius:10,
        backgroundColor:"#f2f2f2",
        borderWidth:.2,
        padding:5,
        color:'green'
     }
})