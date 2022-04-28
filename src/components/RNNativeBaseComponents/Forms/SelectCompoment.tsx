import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, Box, Select, CheckIcon, FormControl } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBSelectComponent = () => {     
    
    let [service, setService] = React.useState("");

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Box w="3/4" maxW="300">
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="UX Research" value="ux" />
                                <Select.Item label="Web Development" value="web" />
                                <Select.Item label="Cross Platform Development" value="cross" />
                                <Select.Item label="UI Designing" value="ui" />
                                <Select.Item label="Backend Development" value="backend" />
                            </Select>
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>FormControlled</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <FormControl w="3/4" maxW="300" isRequired isInvalid>
                            <FormControl.Label>Choose service</FormControl.Label>
                            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={5} />
                            }} mt="1">
                                <Select.Item label="UX Research" value="ux" />
                                <Select.Item label="Web Development" value="web" />
                                <Select.Item label="Cross Platform Development" value="cross" />
                                <Select.Item label="UI Designing" value="ui" />
                                <Select.Item label="Backend Development" value="backend" />
                            </Select>
                            <FormControl.ErrorMessage leftIcon={<Icon name={"alert-circle-outline"} size={15} />}>
                                Please make a selection!
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


export default NBSelectComponent;  