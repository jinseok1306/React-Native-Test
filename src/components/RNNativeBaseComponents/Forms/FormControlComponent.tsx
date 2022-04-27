import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Stack, FormControl, Text, Box, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBFormControlComponent = () => {    

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />   
                <ScrollView>                                        
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />         
                    <Text>{"\n"}</Text>                                           
                    <Center>
                        <Box w="100%" maxWidth="300px">
                            <FormControl isRequired>
                                <Stack mx="4">
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input type="password" defaultValue="12345" placeholder="password" />
                                    <FormControl.HelperText>
                                        Must be atleast 6 characters.
                                    </FormControl.HelperText>
                                    <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} />}>
                                        Atleast 6 characters are required.
                                    </FormControl.ErrorMessage>
                                </Stack>
                            </FormControl>
                        </Box>
                    </Center> 
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Custom Style</Text>
                    <Divider />         
                    <Text>{"\n"}</Text>        
                    <Center>
                        <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
                            base: "100%",
                            md: "25%"
                        }}>
                            <Box>
                                <Text bold fontSize="xl" mb="4">
                                    Default
                                </Text>
                                <FormControl mb="5">
                                    <FormControl.Label>Project Title</FormControl.Label>
                                    <Input />
                                    <FormControl.HelperText>
                                    Give your project a title.
                                    </FormControl.HelperText>
                                </FormControl>
                                <Divider />
                            </Box>
                            <Box>
                                <Text bold fontSize="xl" mb="4">
                                    Disabled
                                </Text>
                                <FormControl isDisabled mb="5">
                                    <FormControl.Label _disabled={{
                                        _text: {
                                        color: "gray.400",
                                        fontWeight: "bold"
                                        }
                                    }}>
                                        Project Title
                                    </FormControl.Label>
                                    <Input placeholder="Title" />
                                    <FormControl.HelperText>
                                    Give your project a title.
                                    </FormControl.HelperText>
                                </FormControl>
                                <Divider />
                            </Box>
                        <Box>
          <Text bold fontSize="xl" mb="4">
            Invalid
          </Text>
          <FormControl isInvalid>
            <FormControl.Label>Project Title</FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} />}>
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </Stack>
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


export default NBFormControlComponent;  