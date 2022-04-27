import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Container, Heading, Text } from 'native-base';

const NBContainerComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text>{"\n"}</Text>
                    <Center>
                        <Container>
                            <Heading>
                            A component library for the
                            <Text color="emerald.500"> React Ecosystem</Text>
                            </Heading>
                            <Text mt="3" fontWeight="medium">
                            NativeBase is a simple, modular and accessible component library that
                            gives you building blocks to build you React applications.
                            </Text>
                        </Container>
                    </Center>
                </ScrollView>                                                         
            </SafeAreaView>   
        </NativeBaseProvider>                                                                                                                      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },  
    subHeader: {        
        color : "#1D2466",
        textAlign : "center",
        paddingVertical : 5,      
        marginTop : 10,  
        marginBottom : 10,
        fontWeight : "bold",        
    }    
})


export default NBContainerComponent;  