import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Flex, Spacer, Text, Box, VStack, Heading } from 'native-base';

const NBFlexComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />   
                <ScrollView>
                    <Text>{"\n"}</Text>
                    <Center flex={1} px="3">
                        <Box flex="1" safeAreaTop>                        
                            <VStack space={2.5} w="100%" px="3">                                
                                <Heading size="md">row</Heading>
                                <Flex direction="row" mb="2.5" mt="1.5">
                                    <Center size="16" bg="primary.100" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        100
                                    </Center>
                                    <Center size="16" bg="primary.200" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        200
                                    </Center>
                                    <Center bg="primary.300" size="16" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        300
                                    </Center>
                                    <Center size="16" bg="primary.400" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        400
                                    </Center>
                                </Flex>
                                <Divider />          
                                <Heading size="md">column</Heading>
                                <Flex direction="column" mb="2.5" mt="1.5">
                                    <Center size="16" bg="primary.100" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        100
                                    </Center>
                                    <Center size="16" bg="primary.200" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        200
                                    </Center>
                                    <Center bg="primary.300" size="16" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        300
                                    </Center>
                                    <Center size="16" bg="primary.400" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        400
                                    </Center>
                                </Flex>
                                <Divider />          
                                <Heading size="md">row-reverse</Heading>
                                <Flex direction="row-reverse" mb="2.5" mt="1.5">
                                    <Center size="16" bg="primary.100" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        100
                                    </Center>
                                    <Center size="16" bg="primary.200" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        200
                                    </Center>
                                    <Center bg="primary.300" size="16" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        300
                                    </Center>
                                    <Center size="16" bg="primary.400" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        400
                                    </Center>
                                </Flex>
                                <Divider />          
                                <Heading size="md">column-reverse</Heading>
                                <Flex direction="column-reverse" mb="2.5" mt="1.5">
                                    <Center size="16" bg="primary.100" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        100
                                    </Center>
                                    <Center size="16" bg="primary.200" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        200
                                    </Center>
                                    <Center bg="primary.300" size="16" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        300
                                    </Center>
                                    <Center size="16" bg="primary.400" _text={{
                                        color: "coolGray.800"
                                    }}>
                                        400
                                    </Center>
                                </Flex>
                                <Divider />
                            </VStack>                        
                        </Box>
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


export default NBFlexComponent;  