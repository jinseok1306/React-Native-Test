import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, Input, Stack, InputGroup, InputLeftAddon, InputRightAddon, Button, FormControl } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBInputComponent = () => { 
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [value, setValue] = React.useState("");
    
    const handleClick = () => setShow2(!show2);
    const handleChange = (text : string) => setValue(text);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Input mx="3" placeholder="Input" w="75%" maxWidth="300px" />
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Input Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Stack mt={3} space={4} w="75%" maxW="300px">
                            <Input size="xs" placeholder="xs Input" />
                            <Input size="sm" placeholder="sm Input" />
                            <Input size="md" placeholder="md Input" />
                            <Input size="lg" placeholder="lg Input" />
                            <Input size="xl" placeholder="xl Input" />
                            <Input size="2xl" placeholder="2xl Input" />
                        </Stack> 
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Input Variants</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>   
                    <Center>
                        <Input variant="outline" placeholder="Outline" />
                        <Input variant="filled" placeholder="Filled" />
                        <Input variant="underlined" placeholder="Underlined" />
                        <Input variant="unstyled" placeholder="Unstyled" />
                        <Input variant="rounded" placeholder="Round" />
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Input Addons</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Stack alignItems="center">
                            <InputGroup w={{
                                base: "70%",
                                md: "285"
                            }}>
                                <InputLeftAddon children={"https://"} />
                                <Input w={{
                                    base: "70%",
                                    md: "100%"
                                }} placeholder="nativebase" />
                                <InputRightAddon children={".io"} />
                            </InputGroup>
                        </Stack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Input Elements</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Stack space={4} w="100%" alignItems="center">
                            <Input w={{
                                base: "75%",
                                md: "25%"
                            }} InputLeftElement={<Icon name="person-outline"  size={25} color="muted.400" />} placeholder="Name" />
                            <Input w={{
                                base: "75%",
                                md: "25%"
                            }} type={show ? "text" : "password"} InputRightElement={<Icon name={show ? "eye-outline" : "eye-off-outline"} size={25} color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
                        </Stack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Password Input</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Input type={show2 ? "text" : "password"} 
                                w="75%" maxW="300px" py="0" 
                                InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                            {show2 ? "Hide" : "Show"}
                        </Button>} placeholder="Password" />
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Controlled Input</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                        <Input value={value} w="75%" maxW="300px" onChangeText={handleChange} placeholder="Value Controlled Input" />
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Form Controlled</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>
                    <Center>
                    <FormControl isInvalid w="75%" maxW="300px">
                        <FormControl.Label>Password</FormControl.Label>
                        <Input placeholder="Enter password" />
                        <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} size={15} />}>
                            Try different from previous passwords.
                        </FormControl.ErrorMessage>
                    </FormControl>
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


export default NBInputComponent;  