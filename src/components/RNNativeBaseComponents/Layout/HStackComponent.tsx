import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Container, Heading, Text, HStack } from 'native-base';

const NBHStackComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text>{"\n"}</Text>
                    <Center>
                        <HStack space={3} justifyContent="center">
                            <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
                            <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
                            <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
                        </HStack>
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


export default NBHStackComponent;  