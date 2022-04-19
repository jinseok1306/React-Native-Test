import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const SQLiteScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default SQLiteScreen;  