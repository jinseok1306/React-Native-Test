import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native';

const SQLiteAddScreen = () => {    
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
        justifyContent: "center"
    },            
})


export default SQLiteAddScreen;  