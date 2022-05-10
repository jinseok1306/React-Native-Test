import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const TouchableRippleComponent = () => {
    
    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />    
            <View style={styles.TouchContainer}>
                <TouchableRipple
                    onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <Text>Press anywhere</Text>
                </TouchableRipple>  
            </View>                                                         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },    
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },   
    TouchContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    }  
})

export default TouchableRippleComponent;  