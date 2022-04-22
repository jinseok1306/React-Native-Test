import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback } from 'react-native';

const TouchableWithoutFeedbackComponent = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
      setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />               
            <View style={styles.countContainer}>
                <Text style={styles.countText}>Count: {count}</Text>
            </View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableWithoutFeedback>                                                                                                   
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
    },
    countText: {
        color: "#FF00FF"
    }
})


export default TouchableWithoutFeedbackComponent;  