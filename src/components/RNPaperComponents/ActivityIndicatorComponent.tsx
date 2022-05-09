import React, {useState} from 'react'
import { Avatar   } from '@rneui/themed'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const ActivityIndicatorComponent = () => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />             
            <ActivityIndicator animating={true} color={Colors.red800} size={'small'}/>                                      
            <Text>{"\n"}</Text>
            <ActivityIndicator animating={true} color={Colors.blue800} size={'large'}/>                                      
            <Text>{"\n"}</Text>
            <ActivityIndicator animating={true} color={Colors.lightGreenA700} size={50}/>                                      
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
    }
})

export default ActivityIndicatorComponent;  