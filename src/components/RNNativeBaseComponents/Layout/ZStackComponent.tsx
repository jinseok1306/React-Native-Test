import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, ZStack, Spacer, Text, Box, VStack, Heading } from 'native-base';

const NBZStackComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />   
                <ScrollView>                                        
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />                                
                    <Center h="40">
                        <Box mt="-32">
                            <ZStack mt="3" ml={-50}>
                            <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                            <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
                            <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
                            </ZStack>
                        </Box>
                    </Center>  
                    <Divider />                                
                    <Text style={styles.subHeader}>Item Centered</Text>
                    <Divider />                                
                    <Center h="96">
                        <ZStack alignItems="center" justifyContent="center">
                            <Box bg="indigo.700" size="64" rounded="lg" />
                            <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
                            <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
                        </ZStack>
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


export default NBZStackComponent;  