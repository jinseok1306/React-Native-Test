import React, { useState } from 'react'
import { Switch } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const SwitchComponent = () => {
    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked(!checked);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>        
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)}
                />    
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
    contentView: {
        flex: 1,
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },    
})


export default SwitchComponent;  