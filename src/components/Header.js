import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({title, icon}) => {
    return (
        <View style={styles.Header}>
            <TouchableOpacity style={styles.backbtn} underLaycolor="#f2f2f2">
                <Image source={icon} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>{title} </Text>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        
        height: 70,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: "#fff",
        elevation: 5,
        alignItems: 'center',
        paddingLeft: 15,
    },
    back: {
        width: 30,
        height: 28,
        
        

    },
    backbtn: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },

    title : {
        height : 35,
        width : 200,
        fontWeight:'600',
        marginLeft:10,
        marginTop:10,
        fontSize:15,
        


    }


})