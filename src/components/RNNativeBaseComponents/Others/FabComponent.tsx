import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Fab, Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBFabComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Box height="200" w="400" shadow="2" rounded="lg" _dark={{
                            bg: "coolGray.200:alpha.20"
                        }} _light={{
                            bg: "coolGray.200:alpha.20"
                        }}>
                            <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" name="add-outline" size={20} />} />
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Placement</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Box height="200" w="400" shadow="2" rounded="lg" _dark={{
                            bg: "coolGray.200:alpha.20"
                        }} _light={{
                            bg: "coolGray.200:alpha.20"
                        }}>
                            <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" name="bulb-outline" />} label="Quick Start" />
                        </Box>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Custom Position</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Box height="200" w="400" shadow="2" rounded="lg" _dark={{
                            bg: "coolGray.200:alpha.20"
                        }} _light={{
                            bg: "coolGray.200:alpha.20"
                        }}>
                            <Fab renderInPortal={false} shadow={2} right={70} bottom={50} size="sm" icon={<Icon color="white" name="add-outline" size={20} />} />
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


export default NBFabComponent;  