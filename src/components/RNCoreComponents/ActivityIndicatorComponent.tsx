import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet, StatusBar, ScrollView} from 'react-native';

const ActivityIndicatorComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />             
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator />
                <ActivityIndicator size="large" />
                <ActivityIndicator size="small" color="#0000ff" />
                <ActivityIndicator size="large" color="#00ff00" />
            </View>                                                                                      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      } 
})


export default ActivityIndicatorComponent;  