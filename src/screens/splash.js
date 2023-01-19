import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>

            <Image source={require("../images/appointment.png")} style={styles.logo} />
            <Text style={styles.tittle}>DOC24/7</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
    },

    logo: {
        width: 120,
        height: 120,
        tintColor: "#fff"
    },

    tittle: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 20,
        marginTop: 10,

    }
})