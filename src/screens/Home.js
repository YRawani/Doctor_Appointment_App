import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';



const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Header title={"DOC24/7"} icon={require('../images/logo.png')} />
                    <Image source={require("../images/banner.jpg")} style={styles.banner} />
                    <Text style={styles.heading}>Select Catergory</Text>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <FlatList data={[1, 1, 1, 1, 1, 1, 1]} horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity>
                                        <LinearGradient colors={['#009FFD', '#2A2A72']}
                                            style={styles.linearGradient}>
                                            <Text style={styles.catName}>{'Catergory' + index + 1}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                );
                            }} />
                    </View>
                    <Text style={styles.heading}>Top Rated Doctors</Text>
                    <View style={{ marginTop: 20 }}>
                        <FlatList numColumns={2}
                            data={[1, 1, 1, 1, 1, 1]}

                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.docItem}>
                                        <Image source={require('../images/doctor.png')} style={styles.docImg} />
                                        <Text style={styles.docName}> Doctor {index + 1}</Text>
                                        <Text style={styles.docSpl}> Skin Specialist</Text>
                                        <Text
                                            style={[styles.status, {
                                                color: index / 2 == 0 ? 'green' : 'red',
                                                opacity: index / 2 == 0 ? 1 : 0.4,
                                            },
                                            ]}>
                                            {index / 2 == 0 ? 'Available' : 'Busy'}</Text>
                                        <CommonBtn w={150} h={40} txt={'Book Appointment'}
                                            status={index / 2 == 0 ? true : false}
                                            onClick={() => {
                                                if (index / 2 == 0) {
                                                    navigation.navigate('BookAppointment');
                                                }
                                            }} />
                                    </View>
                                );


                            }} />
                    </View>

                </View>

            </ScrollView>
            <View style={styles.bottomview}>
                <TouchableOpacity onPress={() => {
                            navigation.navigate('Completed');
                        }}>
                    <Image source={require('../images/completed.png')}
                        style={styles.bottomIcon}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                            navigation.navigate('Pending');
                        }}>
                    <Image source={require('../images/pending.png')}
                        style={styles.bottomIcon} onPress={() => {
                            navigation.navigate('Pending');
                        }} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                            navigation.navigate('CallAmb');
                        }}>
                    <Image source={require('../images/ambulance.png')}
                        style={styles.bottomIcon} />
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    banner: {
        width: '100%',
        height: 185,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    heading: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 15,
        marginLeft: 15,
    },

    linearGradient: {
        width: 120,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    catName: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },

    docItem: {
        width: '45%',

        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 0.2,
        margin: 10,

    },
    docImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20,
    },
    docName: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 10,
    },
    docSpl: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        color: 'green',
        marginTop: 5,
    },
    status: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 5,
    },

    bottomview: {
        width: '90%',
        height: 60,
        borderRadius: 10,
        elevation: 5,
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',

    },
    bottomIcon: {
        width: 30,
        height: 30,
    }
});