import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const DividerComponent = () => {
    
    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />      
            <ScrollView>
                <Text>Lemon</Text>
                <Divider />
                <Text>Mango</Text>
                <Divider />       
                <Text>Banana</Text>                                        
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

export default DividerComponent;  