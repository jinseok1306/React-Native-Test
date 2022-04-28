import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, HStack, Center, Spinner, Heading } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBSpinnerComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <HStack space={2} justifyContent="center">
                            <Spinner accessibilityLabel="Loading posts" />
                            <Heading color="primary.500" fontSize="md">
                                Loading
                            </Heading>
                        </HStack>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Colors</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <Center>
                        <HStack space={8} justifyContent="center">
                            <Spinner color="emerald.500" />
                            <Spinner color="warning.500" />
                            <Spinner color="indigo.500" />
                            <Spinner color="cyan.500" />
                        </HStack>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <Center>
                        <HStack space={8} justifyContent="center" alignItems="center">
                            <Spinner size="sm" />
                            <Spinner size="lg" />
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


export default NBSpinnerComponent;  