import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Chip } from 'react-native-paper';

const ChipComponent = () => {
    
    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />      
            <ScrollView>           
                <Text>{"\n"}</Text>     
                <Chip >Example Chip</Chip>
                <Text>{"\n"}</Text>                     
                <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
                <Text>{"\n"}</Text>     
                <Chip mode='outlined'>Example Chip</Chip>
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

export default ChipComponent;  