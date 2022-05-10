import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtonComponent = () => {

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                              
            <ScrollView>
                <View>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
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
})

export default RadioButtonComponent;  