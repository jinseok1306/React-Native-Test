import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Heading, Center, VStack, Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBHeadingComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Heading>I'm a Heading</Heading>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                    <VStack space={1} alignItems="center">
                        <Heading size="xs">xs</Heading>
                        <Heading size="sm">sm</Heading>
                        <Heading size="md">md</Heading>
                        <Heading size="lg">lg</Heading>
                        <Heading size="xl">xl</Heading>
                        <Heading size="2xl">2xl</Heading>
                        <Heading size="3xl">3xl</Heading>
                        <Heading size="4xl">4xl</Heading>
                    </VStack>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Truncate</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <Heading isTruncated>
                            NativeBase is a simple, modular and accessible component library that
                            gives you building blocks to build you React applications.
                        </Heading>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Override</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <Heading size="lg" fontSize={50} bold>
                            How are you?
                        </Heading>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Composition</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Box>
                            <Heading size="xl" mb="4">
                                Heading
                            </Heading>
                            <Text fontSize="xl">
                                Headings are used for rendering headlines. Heading composes Text so you
                                can use all the style props.
                            </Text>
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


export default NBHeadingComponent;  