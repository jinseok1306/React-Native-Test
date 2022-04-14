import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

//React Native Elements 예제
const BottomSheet = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <View style={{alignItems: 'center'}}>
                <Text>여기는 BottomSheet 예제 화면이에요</Text>
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

export default BottomSheet;  