import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, Radio, Stack, Container, FormControl } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBRadioComponent = () => {     

    const [value, setValue] = React.useState("one");

    const [groupValue, setGroupValue] = React.useState("1");
    
    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Controlled</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                            <Radio value="one" my={1}>
                                One
                            </Radio>
                            <Radio value="two" my={1}>
                                Two
                            </Radio>
                        </Radio.Group>
                    </Center>       
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Uncontrolled</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>           
                    <Center>
                        <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
                            <Radio value="1" my={1}>
                                First
                            </Radio>
                            <Radio value="2" my={1}>
                                Second
                            </Radio>
                            <Radio value="3" my={1}>
                                Third
                            </Radio>
                        </Radio.Group>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Disabled</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <Radio.Group defaultValue="2" name="exampleGroup" accessibilityLabel="select prize">
                            <Radio value="1" my={1} isDisabled>
                                First
                            </Radio>
                            <Radio value="2" my={1}>
                                Second
                            </Radio>
                            <Radio value="3" my={1}>
                                Third
                            </Radio>
                        </Radio.Group>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Invalid</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Radio.Group name="exampleGroup" accessibilityLabel="select an option">
                            <Radio value="test" isInvalid>
                                Others
                            </Radio>
                        </Radio.Group>
                    </Center> 
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Size</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                            <Stack direction={{
                                base: "column",
                                md: "row"
                            }} alignItems={{
                                base: "flex-start",
                                md: "center"
                            }} space={4} w="75%" maxW="300px">
                                <Radio value="1" colorScheme="red" size="sm" my={1}>
                                    Small
                                </Radio>
                                <Radio value="2" colorScheme="green" size="md" my={1}>
                                    Medium
                                </Radio>
                                <Radio value="3" colorScheme="yellow" size="lg" my={1}>
                                    Large
                                </Radio>
                            </Stack>
                        </Radio.Group>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Custom Color</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
                            <Radio colorScheme="emerald" value="1" my={1}>
                                emerald
                            </Radio>
                            <Radio colorScheme="secondary" value="2" my={1}>
                                secondary
                            </Radio>
                            <Radio colorScheme="warning" value="3" my={1}>
                                warning
                            </Radio>
                        </Radio.Group>
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
                                Select Prize
                                </FormControl.Label>
                                <Radio.Group name="exampleGroup" accessibilityLabel="select prize" defaultValue={groupValue} onChange={value => {
                                setGroupValue(value || "");
                            }}>
                                <Radio value="1" my="1">
                                    First
                                </Radio>
                                <Radio value="2" my="1">
                                    Second
                                </Radio>
                                <Radio value="3" my="1">
                                    Third
                                </Radio>
                                </Radio.Group>
                                <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} size={15} />}>
                                    You must select a Prize.
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


export default NBRadioComponent;  