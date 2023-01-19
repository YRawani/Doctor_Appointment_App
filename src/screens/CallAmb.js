import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { TextInput } from 'react-native-gesture-handler'
import CommonBtn from '../components/CommonBtn'

const CallAmb = () => {
    return (
        <View style={styles.container}>
            <Header icon={require('../images/back.png')} title={'Call Ambulance'} />
            <TextInput placeholder='Location' style={styles.address} />
            <CommonBtn w={200} h={50} txt={"Call Now"} status={true} />
        </View>
    )
}

export default CallAmb

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    address: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 10,
        paddingLeft: 20,
    }
})