import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native';

const ViewComponent = () => {    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />     
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20
                    }}
                >
                    <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                    <View style={{ backgroundColor: "red", flex: 0.5 }} />
                    <Text>Hello World!</Text>
                </View>
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


export default ViewComponent;  