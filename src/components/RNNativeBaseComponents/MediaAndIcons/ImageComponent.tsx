import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Image, Center, HStack, Heading, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBImageComponent = () => {        

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>             
                    <Center>
                        <Image source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }} alt="Alternate Text" size="xl" 
                        />
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Sizes</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>  
                    <Center>                        
                        <VStack space={2} justifyContent="center" alignItems="center" safeAreaTop // my={6}
                            mb={6}>
                                {["xs", "sm", "md", "lg", "xl", "2xl"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }} alt={"Alternate Text " + size} />)}
                        </VStack>
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Border Radius</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                    <Image size={150} resizeMode={"contain"} borderRadius={100} source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }} alt="Alternate Text" />
                    </Center>
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Fallback</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                    <Image size={150} alt="fallback text" borderRadius={100} source={{
                        uri: "https://-page-icon.png"
                    }} fallbackSource={{
                        uri: "https://www.w3schools.com/css/img_lights.jpg"
                    }} />
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


export default NBImageComponent;  