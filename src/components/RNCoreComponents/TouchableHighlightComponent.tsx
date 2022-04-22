import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableHighlight } from 'react-native';

const TouchableHighlightComponent = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <ScrollView>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.button}>
                    <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>
                    {count || null}
                    </Text>
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


export default TouchableHighlightComponent;  