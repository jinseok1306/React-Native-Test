import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';

const SwitchComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                 
            <View style={styles.switchContainer}>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
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
    switchContainer : {
        flex : 1, 
        justifyContent: 'center',
        alignItems : "center",
    }
})

export default SwitchComponent;  