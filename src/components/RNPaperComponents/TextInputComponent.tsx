import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputComponent = () => {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />            
            <ScrollView>
                <TextInput
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />        
                <Text>{"\n"}</Text>
                <TextInput
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon name="eye" />}
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
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },          
})

export default TextInputComponent;  