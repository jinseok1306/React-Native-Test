import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Center, HStack, Switch, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBSwitchComponent = () => {     
    
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
                        <HStack alignItems="center" space={4}>
                            <Text>Bluetooth</Text>
                            <Switch size="sm" />
                        </HStack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <VStack space={4} alignItems="center">
                            <Switch size="sm" />
                            <Switch size="md" />
                            <Switch size="lg" />
                        </VStack>
                    </Center>  
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Track & Thumb Color</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={4} alignItems="center">
                            <Switch />
                            <Switch offTrackColor="orange.100" onTrackColor="orange.200" onThumbColor="orange.500" offThumbColor="orange.50" />
                            <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>    
                    <Text style={styles.subHeader}>Color Schemes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={4} alignItems="center">
                            <Switch defaultIsChecked colorScheme="primary" />
                            <Switch defaultIsChecked colorScheme="secondary" />
                            <Switch defaultIsChecked colorScheme="emerald" />
                        </VStack>
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


export default NBSwitchComponent;  