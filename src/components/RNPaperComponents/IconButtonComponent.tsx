import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const IconButtonComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                  
            <ScrollView>
                <IconButton
                    icon="camera"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="music"
                    color={Colors.blue600}
                    size={40}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="star"
                    color={Colors.red500}
                    size={30}
                    disabled={true}
                />
            </ScrollView>                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },    
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default IconButtonComponent;  