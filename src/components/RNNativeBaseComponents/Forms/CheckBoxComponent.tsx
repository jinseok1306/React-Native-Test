import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Center, Checkbox, Text, HStack, VStack, Stack, Heading, Box, Container, FormControl } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBCheckBoxComponent = () => {    

    const [groupValues, setGroupValues] = React.useState([]);
    const [groupValue, setGroupValue] = React.useState(["Photography", "Gardening"]);
    const [groupValue2, setGroupValue2] = React.useState(["Phone", "Email"]);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <HStack space={6}>
                            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
                        </HStack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Controlled</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                        <Checkbox value="one" my={2}>
                            UX Research
                        </Checkbox>
                        <Checkbox value="two">Software Development</Checkbox>
                    </Checkbox.Group>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Uncontrolled</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                    <Checkbox.Group accessibilityLabel="choose values">
                        <Checkbox value="one" my={2}>
                            UX Research
                        </Checkbox>
                        <Checkbox value="two">Software Development</Checkbox>
                        </Checkbox.Group>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Disabled</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <VStack space={2}>
                            <Checkbox isDisabled value="one">
                                UX Research
                            </Checkbox>
                            <Checkbox isDisabled defaultIsChecked value="two">
                                Software Development
                            </Checkbox>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Invalid</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <Checkbox isInvalid value="invalid">
                            Software Development
                        </Checkbox>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Custom Color</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <Stack direction={{
                            base: "column",
                            md: "row"
                        }} space={3} alignItems="flex-start">
                            <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
                                Danger
                            </Checkbox>
                            <Checkbox value="info" colorScheme="info" defaultIsChecked>
                                Info
                            </Checkbox>
                            <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
                                Orange
                            </Checkbox>
                            <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
                                Purple
                            </Checkbox>
                        </Stack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Custom Icon</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <Stack direction={{
                            base: "column",
                            md: "row"
                        }} space={3} alignItems="flex-start">
                            <Checkbox value="orange" colorScheme="orange" size="md" icon={<Icon name="caret-back-outline"/>} defaultIsChecked>
                                Darts
                            </Checkbox>
                            <Checkbox value="dark" colorScheme="dark" size="md" icon={<Icon name="caret-down-outline" />} defaultIsChecked>
                                Movie
                            </Checkbox>
                            <Checkbox colorScheme="red" value="red" size="md" icon={<Icon name="caret-forward-outline" />} defaultIsChecked>
                                Camping
                            </Checkbox>
                            <Checkbox value="blue" colorScheme="blue" size="md" icon={<Icon name="caret-up-outline" />} defaultIsChecked>
                                Chess
                            </Checkbox>
                        </Stack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Size</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <VStack space={3}>
                            <Checkbox value="red" size="sm" defaultIsChecked>
                                UX Research
                            </Checkbox>
                            <Checkbox size="md" defaultIsChecked value="green">
                                UX Research
                            </Checkbox>
                            <Checkbox value="yellow" size="lg" defaultIsChecked>
                                UX Research
                            </Checkbox>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Checkbox Group</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <VStack space={2}>
                            <HStack alignItems="baseline">
                                <Heading fontSize="lg">Hobbies</Heading>
                            </HStack>
                            <VStack>
                                <Box>
                                    <Text>Selected: ({groupValue.length})</Text>
                                </Box>
                            </VStack>
                            <Checkbox.Group colorScheme="green" defaultValue={groupValue} accessibilityLabel="pick an item" onChange={values => {
                                setGroupValue(values || []);
                            }}>
                                <Checkbox value="Photography" my="1">
                                    Photography
                                </Checkbox>
                                <Checkbox value="Writing" my="1">
                                    Writing
                                </Checkbox>
                                <Checkbox value="Gardening" my="1">
                                    Gardening
                                </Checkbox>
                                <Checkbox value="Cooking" my="1">
                                    Cooking
                                </Checkbox>
                            </Checkbox.Group>
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>
                    <Text style={styles.subHeader}>Form Controlled</Text>
                    <Divider /> 
                    <Text>{"\n"}</Text>
                    <Center>
                        <Container>
                            <FormControl isInvalid>
                                <FormControl.Label _text={{
                                    fontSize: "lg",
                                    bold: true
                                }}>
                                    Preferred contact method
                                </FormControl.Label>
                                <Text fontSize="md">Selected Values: </Text>
                                <Checkbox.Group mt="2" colorScheme="green" defaultValue={groupValue2} accessibilityLabel="choose multiple items" onChange={values => {
                                    setGroupValue2(values || []);
                                }} alignItems="flex-start">
                                    <Checkbox value="Phone" my="1">
                                    Phone
                                    </Checkbox>
                                    <Checkbox value="Email" my="1">
                                    Email
                                    </Checkbox>
                                    <Checkbox value="Message" my="1">
                                    Message
                                    </Checkbox>
                                    <Checkbox value="Fax" my="1">
                                    Fax
                                    </Checkbox>
                                </Checkbox.Group>
                                <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} />}>
                                    You must select at least three methods
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </Container>
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


export default NBCheckBoxComponent;  