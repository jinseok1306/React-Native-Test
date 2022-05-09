import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />      
            <ScrollView>
                <View style={styles.buttonsContainer}>
                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>                        
                </View>  
                <View style={styles.buttonsContainer}>
                    <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>                        
                </View>  
                <View style={styles.buttonsContainer}>
                    <Button icon="camera" mode="text" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>                        
                </View> 
                <View style={styles.buttonsContainer}>
                    <Button icon="camera" mode="text" onPress={() => console.log('Pressed')} loading={true}>
                        Press me
                    </Button>                        
                </View> 
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
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    }, 
})

export default ButtonComponent;  