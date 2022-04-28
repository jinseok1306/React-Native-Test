import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Alert, Box, VStack, HStack, IconButton, CloseIcon, Stack, Collapse } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBTextComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>ChangingFontSize</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <VStack space={1} alignItems="center">
                            <Text fontSize="xs">xs</Text>
                            <Text fontSize="sm">sm</Text>
                            <Text fontSize="md">md</Text>
                            <Text fontSize="lg">lg</Text>
                            <Text fontSize="xl">xl</Text>
                            <Text fontSize="2xl">2xl</Text>
                            <Text fontSize="3xl">3xl</Text>
                            <Text fontSize="4xl">4xl</Text>
                            <Text fontSize="5xl">5xl</Text>
                            <Text fontSize="6xl">6xl</Text>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Truncated</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Text isTruncated maxW="300" w="80%">
                            NativeBase gives you a contrasting color based on your theme. You can also
                            customise it using the useAccessibleColors hook.
                        </Text>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Nested</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Text italic>
                            <Text bold>Taj Mahal</Text> is in Agra.
                        </Text>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>OVerridden</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={2} alignItems="center">
                            <Text bold>Bold</Text>
                            <Text italic>Italic</Text>
                            <Text underline>Underline</Text>
                            <Text highlight _dark={{
                            color: "coolgray.800"
                            }}>
                                Highlighted
                            </Text>
                            <Text>
                                H<Text sub>2</Text>O
                            </Text>
                            <Text underline>Underline</Text>
                            <Text strikeThrough>StrikeThrough</Text>
                            <Text bold italic underline>
                                Bold, Italic & Underline
                            </Text>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text> 
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


export default NBTextComponent;  