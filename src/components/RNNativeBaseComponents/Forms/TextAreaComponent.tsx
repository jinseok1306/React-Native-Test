import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, TextArea, Box, Stack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBTextAreaComponent = () => {     

    const [textAreaValue, setTextAreaValue] = useState("Value Controlled");

    const demoValueControlledTextArea = (e:any) => {
      setTextAreaValue(e.currentTarget.value);
    };

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Usage</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Invalid and Disabled TextArea</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Stack space={2.5} w="75%" maxW="300">
                            <Box>
                                <Text mb="4" bold fontSize="lg">
                                    Invalid TextArea
                                </Text>
                                <TextArea aria-label="t1" numberOfLines={4} placeholder="Invalid TextArea" isInvalid _dark={{
                                placeholderTextColor: "gray.300"
                                }} mb="5" />
                                <Divider />
                            </Box>
                            <Box>
                                <Text bold fontSize="lg" mb="4">
                                    Disabled TextArea
                                </Text>
                                <TextArea aria-label="t1Disabled" placeholder="Disabled TextArea" isDisabled />
                            </Box>
                        </Stack>
                    </Center> 
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Value Controlled TextArea</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <TextArea value={textAreaValue} onChange={demoValueControlledTextArea} w="75%" maxW="300" />
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


export default NBTextAreaComponent;  