import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Stack, Button, Text, Box, VStack, Heading } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBButtonComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />   
                <ScrollView>                                        
                    <Text style={styles.subHeader}>Loading</Text>
                    <Divider />         
                    <Text>{"\n"}</Text>                                           
                    <Stack direction={{
                        base: "column",
                        md: "row"
                    }} space={2} alignItems={{
                        base: "center",
                        md: "flex-start"
                    }}>
                        <Button isLoading>Button</Button>
                        <Button isLoading isLoadingText="Submitting">
                            Button
                        </Button>
                        <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
                            Button
                        </Button>
                        <Button isLoading _loading={{
                        bg: "amber.400:alpha.70",
                        _text: {
                            color: "coolGray.700"
                        }
                        }} _spinner={{
                        color: "white"
                        }} isLoadingText="Submitting">
                            Button
                        </Button>
                        <Button isLoading isLoadingText="Submitting" variant="outline">
                            Button
                        </Button>
                    </Stack>     
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Icons</Text>
                    <Divider />        
                    <Text>{"\n"}</Text>  
                    <Center flex={1} px="3">
                        <Stack direction={{
                            base: "column",
                            md: "row"
                        }} space={4}>
                            <Button leftIcon={<Icon  name="cloud-upload-outline" size={12} />}>
                                Upload
                            </Button>
                            <Button variant="subtle" endIcon={<Icon name="cloud-download-outline" size={12} />}>
                                Download
                            </Button>
                        </Stack>
                    </Center>  
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Button Group</Text>
                    <Divider />        
                    <Text>{"\n"}</Text>    
                    <Center flex={1} px="3">
                        <Button.Group isAttached colorScheme="blue" mx={{
                            base: "auto",
                            md: 0
                        }} size="sm">
                            <Button>Edit</Button>
                            <Button variant="outline">Save</Button>
                        </Button.Group>
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


export default NBButtonComponent;  