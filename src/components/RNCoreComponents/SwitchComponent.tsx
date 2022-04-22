import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';

const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <View style={styles.mainContainer}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>                                                                            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },   
    mainContainer: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})


export default SwitchComponent;  