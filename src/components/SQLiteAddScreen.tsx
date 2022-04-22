import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed';
import ValidationComponent from 'react-native-form-validator';

const SQLiteAddScreen = () => {    
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [link, setLink] = React.useState("");

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                
            <ScrollView>     
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <Text>{"\n"}</Text>                 
                    <Input
                        placeholder='이름을 입력해주세요. '
                        leftIcon={
                            <Icon
                                name='person-circle-outline'
                                size={24}
                                color='gray'
                            />
                        }
                        onChangeText={name => setName(name)}
                        value={name}
                    />
                    <Input
                        placeholder='이메일 주소를 입력해주세요. '
                        leftIcon={
                            <Icon
                                name='mail-outline'
                                size={24}
                                color='gray'
                            />
                        }
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <Input
                        placeholder='이미지 주소를 입력해주세요. '
                        leftIcon={
                            <Icon
                                name='image-outline'
                                size={24}
                                color='gray'
                            />
                        }
                        onChangeText={link => setLink(link)}
                        value={link}
                    />    
                </KeyboardAvoidingView>                 
                <View style={styles.buttonContainer}>
                    <Button
                        title="Save"
                        buttonStyle={{
                            backgroundColor: 'rgba(78, 116, 289, 1)',
                            borderRadius: 10,
                        }}
                        containerStyle={{
                            width: 150,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },    
    buttonContainer: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }     
})


export default SQLiteAddScreen;  