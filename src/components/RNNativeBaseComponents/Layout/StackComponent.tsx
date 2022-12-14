import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Container, Heading, Text, VStack, Stack } from 'native-base';

const NBStackComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>                    
                    <VStack space="2.5" mt="4" px="8">
                        <Heading size="md">row</Heading>
                        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                            <Center size="16" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 1
                            </Center>
                            <Center bg="primary.500" size="16" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 2
                            </Center>
                            <Center size="16" bg="primary.700" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 3
                            </Center>
                        </Stack>
                        <Divider />
                        <Heading size="md">column</Heading>
                        <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                            <Center size="16" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 1
                            </Center>
                            <Center bg="primary.500" size="16" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 2
                            </Center>
                            <Center size="16" bg="primary.700" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 3
                            </Center>
                        </Stack>
                        <Divider />
                        <Heading size="md">row-reverse</Heading>
                        <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
                            <Center size="16" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 1
                            </Center>
                            <Center bg="primary.500" size="16" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 2
                            </Center>
                            <Center size="16" bg="primary.700" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 3
                            </Center>
                        </Stack>
                        <Divider />
                        <Heading size="md">column-reverse</Heading>
                        <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
                            <Center size="16" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 1
                            </Center>
                            <Center bg="primary.500" size="16" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 2
                            </Center>
                            <Center size="16" bg="primary.700" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                            }} shadow={"3"}>
                                Box 3
                            </Center>
                        </Stack>
                        <Divider />
                    </VStack>
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


export default NBStackComponent;  