import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const ProgressBarComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                              
            <ScrollView>
                <Text>{"\n"}</Text>
                <ProgressBar progress={0.5} color={Colors.red800} />
                <Text>{"\n"}</Text>
                <ProgressBar progress={0.7} color={Colors.blue800} />
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

export default ProgressBarComponent;  