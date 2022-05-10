import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';

const SurfaceComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                <Surface style={styles.surface}>
                    <Text>Surface</Text>
                </Surface>
                <Text>{"\n"}</Text>
                <Surface style={styles.surface}>
                    <Text>Surface</Text>
                </Surface>
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
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
})

export default SurfaceComponent;  