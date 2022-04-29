import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Box, Actionsheet, useDisclose, Path } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBActionSheetComponent = () => {        

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Usage</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>                           
                    <Center>
                        <Button onPress={onOpen}>Actionsheet</Button>
                        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                            <Actionsheet.Content>
                            <Box w="100%" h={60} px={4} justifyContent="center">
                                <Text fontSize="16" color="gray.500" _dark={{
                                color: "gray.300"
                            }}>
                                Albums
                                </Text>
                            </Box>
                            <Actionsheet.Item startIcon={<Icon color="trueGray.400" size={6} name="trash-outline" />}>
                                Delete
                            </Actionsheet.Item>
                            <Actionsheet.Item startIcon={<Icon color="trueGray.400" size={6} name="share-social-outline" />}>
                                Share
                            </Actionsheet.Item>
                            <Actionsheet.Item startIcon={<Icon color="trueGray.400" size={6} name="play-circle-outline" />}>
                                Play
                            </Actionsheet.Item>
                            <Actionsheet.Item startIcon={<Icon color="trueGray.400" size={6} name="heart-outline" />}>
                                Favourite
                            </Actionsheet.Item>
                            <Actionsheet.Item p={3} startIcon={<Icon color="trueGray.400" size={6} name="close-outline" />}>                                                                    
                                Cancel
                            </Actionsheet.Item>
                            </Actionsheet.Content>
                        </Actionsheet>
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


export default NBActionSheetComponent;  