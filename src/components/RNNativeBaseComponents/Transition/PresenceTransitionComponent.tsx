import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Image, Center, Button, PresenceTransition, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBPresenceTransitionComponent = () => {        

    const [isOpen, setIsOpen] = React.useState(false);

    const [isOpen2, setIsOpen2] = React.useState(false);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Fade</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>             
                    <Center>
                        <Button onPress={() => setIsOpen(!isOpen)}>
                            {isOpen ? "Hide" : "Show"}
                        </Button>
                        <PresenceTransition visible={isOpen} initial={{
                            opacity: 0
                            }} animate={{
                            opacity: 1,
                            transition: {
                                duration: 250
                            }
                        }}>
                            <Center mt="7" bg="teal.500" rounded="md" w="200" h="100" _text={{
                            color: "white"
                        }}>
                            Fade
                            </Center>
                        </PresenceTransition>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>ScaleFade</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Button onPress={() => setIsOpen2(!isOpen2)}>
                            {isOpen2 ? "Hide" : "Show"}
                        </Button>
                        <PresenceTransition visible={isOpen2} initial={{
                            opacity: 0,
                            scale: 0
                            }} animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 250
                            }
                        }}>
                            <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
                                ScaleFade
                            </Center>
                        </PresenceTransition>
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


export default NBPresenceTransitionComponent;  