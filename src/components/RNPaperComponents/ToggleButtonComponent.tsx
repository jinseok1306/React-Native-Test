import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { ToggleButton } from 'react-native-paper';

const ToggleButtonComponent = () => {
    const [status, setStatus] = React.useState('checked');

    const onButtonToggle = (value : string) => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />            
            <View style={styles.ToggleContainer}>
                <ToggleButton
                    icon="bluetooth"
                    value="bluetooth"
                    status={status}
                    onPress={onButtonToggle}
                />
            </View>                        
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
    ToggleContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }         
})

export default ToggleButtonComponent;  