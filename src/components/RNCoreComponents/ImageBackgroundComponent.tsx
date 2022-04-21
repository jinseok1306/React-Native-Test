import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, StatusBar, ScrollView} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const ImageBackgroundComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                             
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})


export default ImageBackgroundComponent;  