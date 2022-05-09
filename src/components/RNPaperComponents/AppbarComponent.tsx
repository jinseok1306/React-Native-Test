import React, {useState} from 'react'
import { Avatar   } from '@rneui/themed'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppbarComponent = () => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />             
            <Appbar style={styles.bottom}>
                <Appbar.Action
                    icon="archive"
                    onPress={() => console.log('Pressed archive')}
                />
                <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action
                    icon="delete"
                    onPress={() => console.log('Pressed delete')}
                />
            </Appbar>                              
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
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default AppbarComponent;  