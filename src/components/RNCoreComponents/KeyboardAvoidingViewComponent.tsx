import React, { useState } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, StatusBar, ScrollView, TextInput,
    Platform, TouchableWithoutFeedback, Button, Keyboard, Text } from 'react-native';

const KeyboardAvoidingViewComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                            
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                        <Text style={styles.header}>Header</Text>
                        <TextInput placeholder="Username" style={styles.textInput} />
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={() => null} />
                        </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>                                                                                       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }, 
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      },
      header: {
        fontSize: 36,
        marginBottom: 48
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
      },
      btnContainer: {
        backgroundColor: "white",
        marginTop: 12
      }   
})


export default KeyboardAvoidingViewComponent;  