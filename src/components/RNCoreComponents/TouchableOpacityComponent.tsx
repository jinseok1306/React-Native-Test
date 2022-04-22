import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

const TouchableOpacityComponent = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                        
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Press Here</Text>
            </TouchableOpacity>                                                                                  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },    
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
})


export default TouchableOpacityComponent;  