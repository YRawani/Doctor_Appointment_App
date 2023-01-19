import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';

const CommonBtn = ({ w, h, txt, onClick , status }) => {
    return (
        <TouchableOpacity onPress={() => {
            onClick();
        }} style={{ alignSelf: 'center', marginTop: 10, marginBottom: 10, }}>
            {status ? (<LinearGradient colors={['#009FFD', '#2A2A72',]}
                style={{ height: h, width: w, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 12 }} >{txt}</Text>
            </LinearGradient>):
            (<LinearGradient colors={['#8e8e8e', '#8e8e8e',]}
            style={{ height: h, width: w, justifyContent: 'center', alignItems: 'center', borderRadius: 10 ,opacity:0.5}}>
            <Text style={{ color: '#fff', fontSize: 12 }} >{txt}</Text>
        </LinearGradient>)}
            

        </TouchableOpacity>
    )
}

export default CommonBtn

const styles = StyleSheet.create({})