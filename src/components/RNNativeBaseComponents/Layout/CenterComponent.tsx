import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Square, Circle, Text, HStack, Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBCenterComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <Center>
                        <Center bg="primary.400" _text={{
                        color: "white",
                        fontWeight: "bold"
                        }} height={200} width={{
                        base: 200,
                        lg: 250
                        }}>
                            This is the Center
                        </Center>
                    </Center>                     
                    <Text>{"\n"}</Text>   
                    <Divider />     
                    <Text style={styles.subHeader}>Icon frames</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <HStack space={1}>
                        <Center w="40px" h="40px" bg="primary.400">
                            <Icon name='heart-outline' color='white' size={30}/>    
                        </Center>
                        <Center w="40px" h="40px" bg="secondary.400">
                            <Box _text={{
                            fontWeight: "bold",
                            fontSize: "lg",
                            color: "white"
                        }}>
                            20
                            </Box>
                        </Center>
                    </HStack>      
                    <Text>{"\n"}</Text>   
                    <Divider />     
                    <Text style={styles.subHeader}>Square and Circle</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>      
                    <HStack space={1}>
                        <Circle size="40px" bg="secondary.400">
                            <Icon name='heart-outline' color='white' size={30}/>
                        </Circle>
                        <Center w="40px" h="40px" bg="primary.400">
                            <Box _text={{
                            fontWeight: "bold",
                            fontSize: "lg",
                            color: "white"
                        }}>
                            20
                            </Box>
                        </Center>
                    </HStack>   
                    <Text>{"\n"}</Text>   
                    <Divider />      
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


export default NBCenterComponent;  