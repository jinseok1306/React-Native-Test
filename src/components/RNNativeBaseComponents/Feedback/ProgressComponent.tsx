import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Progress, Center, Box, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBProgressComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Box w="90%" maxW="400">
                            <Progress value={45} mx="4" />
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Progress colorScheme</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <Center>
                        <Box w="90%" maxW="400">
                            <VStack space="md">
                                <VStack mx="4" space="md">
                                    <Progress colorScheme="primary" value={35} />
                                    <Progress colorScheme="secondary" value={45} />
                                    <Progress colorScheme="emerald" value={55} />
                                    <Progress colorScheme="warning" value={65} />
                                    <Progress colorScheme="light" value={75} />
                                </VStack>
                            </VStack>
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Box w="90%" maxW="400">
                            <VStack space="md">
                                <VStack mx="4" space="md">
                                    <Progress size="xs" mb={4} value={25} />
                                    <Progress size="sm" mb={4} value={35} />
                                    <Progress size="md" mb={4} value={45} />
                                    <Progress size="lg" mb={4} value={55} />
                                    <Progress size="xl" mb={4} value={65} />
                                    <Progress size="2xl" mb={4} value={75} />
                                </VStack>
                            </VStack>
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Flat Progress</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Box w="90%" maxW="400">
                            <Progress rounded="0" value={65} mx="4" />
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>   
                    <Text style={styles.subHeader}>Custom Track Color</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Box w="90%" maxW="400">
                            <Progress bg="coolGray.100" _filledTrack={{
                            bg: "lime.500"
                        }} value={75} mx="4" />
                        </Box>
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


export default NBProgressComponent;  