import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import CommonBtn from '../components/CommonBtn'

let dayList = [];
const BookAppointment = ({navigation}) => {
    const [selectedSlot, setSelectedSlot] = useState(0);
    const [selectedGender, setSelectedGender] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    useEffect(() => {
      
      for(let i=1;i<=getDays(new Date().getMonth()+1);i++){
        dayList.push({day:i, selected :false});
      }
    }, []);
    const getDays =(month)=>{
        let days = 0;
        if(month==1){
            days=31;
        }else if(month==2){
            days=28;
        }else if(month==3){
            days=31;
        }else if(month==4){
            days=30;
        }else if(month==5){
            days=31;
        }else if(month==6){
            days=30;
        }else if(month==7){
            days=31;
        }else if(month==8){
            days=30;
        }else if(month==9){
            days=31;
        }else if(month==10){
            days=30;
        }else if(month==11){
            days=31;
        }else if(month==12){
            days=30;
        }
        return days;
        
    };
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
            <Header icon={require('../images/back.png')} title={'Book Appointment'} />
            <Image source={require('../images/doctor.png')} style={styles.docImg} />
            <Text style={styles.name}>Doctor Yash</Text>
            <Text style={styles.spcl}>Skin Specialist</Text>
            <Text style={styles.heading}>Select Date</Text>
            <View style={{marginTop:20}}>
                <FlatList horizontal showsVerticalScrollIndicator={false}
                data={dayList} renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={{height:70,width:60,borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:selectedDay==index ?'blue': 'white',
                        borderWidth:selectedDay==index ? 0:1,
                        marginLeft:10,
                        
                        }} onPress ={()=>{
                            setSelectedDay (index);
                        }}>
                        <Text style={{color:selectedDay==index ?'#fff':'blue'}}>{item.day}</Text>
                        </TouchableOpacity>
                    )
                }}/>
            </View>
            <Text style={styles.heading}>Available Slots</Text>
            <View>
                <FlatList
                    numColumns={2}
                    data={[
                        '10:00AM-12:00PM',
                        '12:00PM-02:00PM',
                        '02:00PM-04:00PM',
                        '04:00PM-06:00PM',
                        '06:00PM-08:00PM',
                        '08:00PM-10:00PM']}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[styles.timeSlot, { borderColor: selectedSlot == index ? 'blue' : 'black' }]}
                                onPress={() => {
                                    setSelectedSlot(index);
                                }
                                }>
                                <Text style={{ color: selectedSlot == index ? 'blue' : 'black' }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            <Text style={styles.heading}>Patient Name</Text>
            <TextInput style={styles.nameInput} placeholder={'Enter Name'} />
            <Text style={styles.heading}>Gender</Text>
            <View style={styles.genderView}>
                    <TouchableOpacity style={[styles.gender,{borderWidth:0.5,borderColor:selectedGender==0?'blue':'black'}]}
                    onPress={()=>{
                        setSelectedGender(0)
                    }}>
                    <Image source={require('../images/male.png')} 
                    style={{height:30,width:30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.gender,{borderWidth:0.5,borderColor:selectedGender==1?'blue':'black'}]}
                    onPress={()=>{
                        setSelectedGender(1)
                    }}>
                    <Image source={require('../images/female.png')} 
                    style={{height:30,width:30}}/>
                    </TouchableOpacity>
            </View>
            <View style={{marginTop:20,marginBottom:20}}>
            <CommonBtn w={200} h={45} txt={'Book Now'} status={true} onClick={()=>{
                navigation.navigate('Success');
            }} />
            </View>
            
        </View>
        </ScrollView>
    )
}

export default BookAppointment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    docImg: {
        width: 100,
        height: 100,
        marginTop: 30,
        alignSelf: 'center'
    },

    name: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 10,
    },

    spcl: {
        fontSize: 16,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 7,
        color: 'green',
        backgroundColor: '#f2f2f2',
        padding: 5,
        borderRadius: 10,
    },
    heading: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15,
        marginLeft: 15,
    },
    timeSlot: {
        height: 40,
        width: "42%",
        borderRadius: 10,
        borderWidth: 0.5,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    nameInput: {
        borderRadius: 10,
        marginTop: 15,
        width: '94%',
        height: 45,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 20,
    },
    genderView:{
        marginTop:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
    gender:{
        borderRadius:10,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
    },

})