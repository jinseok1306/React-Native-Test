import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView, Alert  } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, IconButton, Text, Center, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBIconButtonComponent = () => {    
    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                    <IconButton icon={<Icon name="happy-outline" size={30}/>} borderRadius="full" _icon={{
                        color: "orange.500",
                        size: "md"
                    }} _hover={{
                        bg: "orange.600:alpha.20"
                    }} _pressed={{
                        bg: "orange.600:alpha.20",
                        _icon: {
                            name: "emoji-flirt"
                        },
                        _ios: {
                            _icon: {
                            size: "2xl"
                            }
                        }
                    }} _ios={{
                        _icon: {
                            size: "2xl"
                        }
                    }} />
                    </Center>   
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>
                        <VStack space={4} alignItems="center">
                            {["xs", "sm", "md", "lg"].map(size => <IconButton size={size} variant="solid" icon={<Icon name="menu-outline" size={30}/>} />)}
                        </VStack>
                    </Center>       
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Varients</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>     
                    <Center>
                        <VStack space={4} alignItems="center">
                            {["outline", "solid", "ghost"].map(variant => <IconButton colorScheme="indigo" key={variant} variant={variant} icon={<Icon name="search-outline" size={30}/>} />)}
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


export default NBIconButtonComponent;  