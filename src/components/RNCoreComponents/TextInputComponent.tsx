import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput, SafeAreaView } from 'react-native';


const UselessTextInput = (props : any) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
}

const TextInputComponent = () => {
    const [text, onChangeText] = React.useState<any>("Useless Text");
    const [number, onChangeNumber] = React.useState<any>(null);
    const [value, onChangeMultiText] = React.useState<any>('Useless Multiline Placeholder');    

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <ScrollView>
                <Text style={styles.subHeader}>TextInput</Text>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </SafeAreaView>
                <Text>{"\n"}</Text>
                <Text style={styles.subHeader}>MultiLine</Text>
                <View
                    style={{
                        backgroundColor: value,
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                    }}>
                    <UselessTextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={(text:any) => (onChangeMultiText(text))}
                        value={value}
                        style={{padding: 10}}
                    />
                </View>
            </ScrollView>                                                                           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },   
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10,        
    },  
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})


export default TextInputComponent;  