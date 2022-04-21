import React, { useState } from 'react'
import { View, Image, StyleSheet, StatusBar, ScrollView} from 'react-native';

const ImageComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <ScrollView>        
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />   
            </ScrollView>                                                                                 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
     logo: {
        width: 66,
        height: 58,
    },
})


export default ImageComponent;  