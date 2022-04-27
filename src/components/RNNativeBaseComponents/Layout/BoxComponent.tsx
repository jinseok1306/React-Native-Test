import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { Box, NativeBaseProvider, Center, HStack, Stack, Heading, AspectRatio, Image, Text } from 'native-base';

const NBBoxComponent = () => {
    const myRef = React.useRef({});
    React.useEffect(() => {
        const styleObj = {
            borderWidth: 4,
            borderRadius: 4,
            borderColor: "#22D3EE"
        };
        myRef.current.setNativeProps({
        style: styleObj
        });
    }, [myRef]);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                        <Divider />            
                        <Text>{"\n"}</Text>        
                        <Center>
                            <Box>
                                <Box alignSelf="center" bg="primary.500" _text={{
                                    fontSize: "md",
                                    fontWeight: "medium",
                                    color: "warmGray.50",
                                    letterSpacing: "lg",                                
                                }}>
                                    This is a Box
                                </Box>
                            </Box>
                        </Center>      
                        <Text>{"\n"}</Text>  
                        <Divider />    
                        <Text style={styles.subHeader}>Composition</Text>
                        <Divider />            
                        <Text>{"\n"}</Text>    
                        <Center>
                        <Box alignItems="center">
                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                                }} _web={{
                                shadow: 2,
                                borderWidth: 0
                                }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={{
                                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                        }} alt="image" />
                                    </AspectRatio>
                                    <Center bg="violet.500" _dark={{
                                            bg: "violet.400"
                                        }} _text={{
                                            color: "warmGray.50",
                                            fontWeight: "700",
                                            fontSize: "xs"
                                        }} position="absolute" bottom="0" px="3" py="1.5">
                                        PHOTOS
                                    </Center>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            The Garden City
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="-1">
                                        The Silicon Valley of India.
                                        </Text>
                                    </Stack>
                                    <Text fontWeight="400">
                                        Bengaluru (also called Bangalore) is the center of India's high-tech
                                        industry. The city is also known for its parks and nightlife.
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                            <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                            }} fontWeight="400">
                                                6 mins ago
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Box>
                    </Center>  
                    <Text>{"\n"}</Text>  
                    <Divider />                              
                    <Text>{"\n"}</Text>      
                    <Text style={styles.subHeader}>Basic(With Ref)</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center flex={1} px="3">
                        <Box width="100%" bg="primary.500" p="4" shadow={2} _text={{
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white"
                        }} ref={myRef}>
                            This is a Box
                        </Box>
                    </Center>   
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



export default NBBoxComponent;  