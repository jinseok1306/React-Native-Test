import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const HelperTextComponent = () => {
    const [text, setText] = React.useState('');

    const onChangeText = (text : string) => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };


    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                  
            <View>
                <TextInput label="Email" value={text} onChangeText={onChangeText} />
                <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                </HelperText>
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
})

export default HelperTextComponent;  