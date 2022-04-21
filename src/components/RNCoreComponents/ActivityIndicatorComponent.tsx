import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const ActivityIndicatorComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>                          
            </ScrollView>                                                       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    contentView: {
        flex: 1,
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },    
})


export default ActivityIndicatorComponent;  