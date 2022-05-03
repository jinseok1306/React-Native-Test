import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Box, Center, Button, Slide, Alert,
         useColorModeValue, VStack, HStack, CheckIcon, Heading, Input, 
         Spacer, WarningIcon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBSlideComponent = () => {        

    const [isOpenTop, setIsOpenTop] = React.useState(false);
    const str = `${isOpenTop ? "Hide" : "Check Internet Connection"}`;

    const [isOpen, setIsOpen] = React.useState(false);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Slide</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>             
                    <Center>
                        <Box h="32" w="300">
                            <Slide in={isOpenTop} placement="top">
                                <Alert justifyContent="center" status="error">
                                <Alert.Icon />
                                <Text color="error.600" fontWeight="medium">
                                    No Internet Connection
                                </Text>
                                </Alert>
                            </Slide>
                            <Button mt="auto" onPress={() => setIsOpenTop(!isOpenTop)} variant="unstyled" bg="coolGray.700:alpha.30" _text={{
                                color: useColorModeValue("darkText", "lightText")
                            }}>
                                {str}
                            </Button>
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>     
                    <Text style={styles.subHeader}>Slide wrapped inside parent</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>     
                    <Center>
                        <Box w="300" justifyContent="center">
                            <VStack space={3}>
                            <HStack alignItems="flex-end">
                                <Heading>Order</Heading>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Sub Total</Text>
                                <Text color="blueGray.400">$298.77</Text>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Tax</Text>
                                <Text color="blueGray.400">$38.84</Text>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text fontWeight="medium">Total Amount</Text>
                                <Text color="emerald.600">$337.61</Text>
                            </HStack>
                            <VStack space={2} mt="2">
                                <Text bold>Promo Code</Text>
                                <HStack space={3}>
                                <Input flex="1" />
                                <Button variant="outline">Apply</Button>
                                </HStack>
                            </VStack>
                            <Button my="2" onPress={() => setIsOpen(!isOpen)}>
                                Place Order
                            </Button>
                            </VStack>
                            <Slide in={isOpen} placement="top">
                            <Box w="100%" position="absolute" p="2" borderRadius="xs" bg="emerald.100" alignItems="center" justifyContent="center" _dark={{
                                bg: "emerald.200"
                            }}>
                                <HStack space={2}>
                                <CheckIcon size="4" color="emerald.600" mt="1" _dark={{
                                    color: "emerald.700"
                                }} />
                                <Text color="emerald.600" textAlign="center" _dark={{
                                    color: "emerald.700"
                                }} fontWeight="medium">
                                    Order Placed Successfully.
                                </Text>
                                </HStack>
                            </Box>
                            </Slide>
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


export default NBSlideComponent;  