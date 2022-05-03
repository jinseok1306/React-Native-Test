import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Box, Center, Button, Stagger, Alert,
         useDisclose, IconButton, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBStaggerComponent = () => {        

    const {
        isOpen,
        onToggle
    } = useDisclose();

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Example</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>             
                    <Center>
                        <Box alignItems="center" minH="220">
                        <Stagger visible={isOpen} initial={{
                            opacity: 0,
                            scale: 0,
                            translateY: 34
                        }} animate={{
                            translateY: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            mass: 0.8,
                            stagger: {
                                offset: 30,
                                reverse: true
                            }
                            }
                        }} exit={{
                            translateY: 34,
                            scale: 0.5,
                            opacity: 0,
                            transition: {
                            duration: 100,
                            stagger: {
                                offset: 30,
                                reverse: true
                            }
                            }
                        }}>
                        <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon name="location-outline" color="warmGray.50" />} />
                        <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon name="mic-outline" color="warmGray.50" />} />
                        <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon name="videocam-outline" color="warmGray.50" />} />
                        <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon name="images-outline" color="warmGray.50" />} />
                        </Stagger>
                    </Box>
                    <HStack alignItems="center">
                        <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon name="ellipsis-horizontal-outline" color="warmGray.50" />} />
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


export default NBStaggerComponent;  