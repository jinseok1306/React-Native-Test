import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, Link, Box, HStack, Flex, Badge, Spacer } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBLinkComponent = () => {     

    const [state, setState] = React.useState(false);

    const toggleState = () => {
      setState(!state);
    };

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Link href="https://nativebase.io">
                            Click here to open documentation.
                        </Link>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>External Link</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Text mx="16">
                            NativeBase is a component library that enables devs to build universal
                            design systems. It is built on top of React Native, allowing you to
                            develop apps for Android, iOS and the Web.{" "}
                            <Link href="https://nativebase.io" isExternal _text={{
                            color: "blue.400"
                        }} mt={-0.5} _web={{
                            mb: -2
                        }}>
                            Read More
                            </Link>
                        </Text>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Link with Underline</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Link _text={{
                            fontSize: "xl",
                            _light: {
                                color: "cyan.500"
                        },
                        color: "cyan.300"
                        }} href="https://nativebase.io" isUnderlined _hover={{
                        _text: {
                            _light: {
                            color: "cyan.600"
                            },
                            color: "cyan.400"
                        }
                        }}>
                            Click me to open NativeBase website.
                        </Link>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Link custom onPress</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Box h="100" w="100" bg={state ? "emerald.500" : "indigo.500"} />
                        <Link onPress={toggleState} mt="8">
                            <Box px="3" py="2" bg="primary.400" rounded="sm" _text={{
                            color: "white",
                            fontWeight: "medium"
                        }}>
                            Change Color
                            </Box>
                        </Link>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Link around containers</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Link href="https://nativebase.io" isExternal>
                            <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                                <HStack alignItems="center">
                                    <Badge colorScheme="darkBlue" _text={{
                                    color: "white"
                                }} variant="solid" rounded="4">
                                    Open Source
                                    </Badge>
                                    <Spacer />
                                    <Text fontSize={10} color="coolGray.800">
                                        2020
                                    </Text>
                                </HStack>
                                <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                    NativeBase v3
                                </Text>
                                <Text mt="2" fontSize="sm" color="coolGray.700">
                                    NativeBase is a component library that enables devs to build
                                    universal design systems.
                                </Text>
                                <Flex>
                                    <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                    Read More
                                    </Text>
                                </Flex>
                            </Box>
                        </Link>
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


export default NBLinkComponent;  