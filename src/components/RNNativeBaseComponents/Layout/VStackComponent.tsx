import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Flex, Spacer, Text, Box, VStack, Heading } from 'native-base';

const NBVStackComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />   
                <ScrollView>
                    <Text>{"\n"}</Text>
                    <Center flex={1} px="3">
                        <VStack space={4} alignItems="center">
                            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
                            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
                            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        </VStack>
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


export default NBVStackComponent;  