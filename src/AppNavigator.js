import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import Completed from './screens/Completed';
import CallAmb from './screens/CallAmb';
import Pending from './screens/Pending';

const stack = createStackNavigator();
const AppNavigator = () => {



    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen component={Splash} name='splash' options={{ headerShown: false }} />
                <stack.Screen component={Home} name='Home' options={{ headerShown: false }} />
                <stack.Screen component={BookAppointment} name='BookAppointment' options={{ headerShown: false }} />
                <stack.Screen component={Success} name='Success' options={{ headerShown: false }} />
                <stack.Screen component={Completed} name='Completed' options={{ headerShown: false }} />
                <stack.Screen component={Pending} name='Pending' options={{ headerShown: false }} />
                <stack.Screen component={CallAmb} name='CallAmb' options={{ headerShown: false }} />

            </stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})