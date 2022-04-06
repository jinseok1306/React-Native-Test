import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize:25}}>Home Screen</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text>여기는 홈 화면이에요</Text>
            </View>
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

export default HomeScreen;  