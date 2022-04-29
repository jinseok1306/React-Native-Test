import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Menu, Box, Pressable, HamburgerIcon, VStack, Select, CheckIcon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBMenuComponent = () => {        

    const [shouldOverlapWithTrigger] = React.useState(false);
    const [position, setPosition] = React.useState("auto");

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>                           
                    <Box h="5%" w="90%" alignItems="flex-start" paddingLeft={5}>
                        <Menu w="190" trigger={triggerProps => {
                            return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <HamburgerIcon />
                                    </Pressable>;
                        }}>
                            <Menu.Item>Arial</Menu.Item>
                            <Menu.Item>Nunito Sans</Menu.Item>
                            <Menu.Item>Roboto</Menu.Item>
                            <Menu.Item>Poppins</Menu.Item>
                            <Menu.Item>SF Pro</Menu.Item>
                            <Menu.Item>Helvetica</Menu.Item>
                            <Menu.Item isDisabled>Sofia</Menu.Item>
                            <Menu.Item>Cookie</Menu.Item>
                        </Menu>
                    </Box>                         
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Group</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Box h="5%" w="90%" alignItems="flex-start" paddingLeft={5}>
                        <Menu w="190" trigger={triggerProps => {
                        return <Pressable {...triggerProps}>
                                <HamburgerIcon />
                                </Pressable>;
                        }}>
                            <Menu.Group title="Free">
                            <Menu.Item>Arial</Menu.Item>
                            <Menu.Item>Nunito Sans</Menu.Item>
                            <Menu.Item>Roboto</Menu.Item>
                            </Menu.Group>
                            <Divider/>
                            <Menu.Group title="Paid">
                            <Menu.Item>SF Pro</Menu.Item>
                            <Menu.Item>Helvetica</Menu.Item>
                            </Menu.Group>
                        </Menu>
                    </Box>      
                    <Text>{"\n"}</Text>  
                    <Text style={styles.subHeader}>Menu Placement</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={6} alignSelf="flex-start" w="100%">
                            <Menu w="160" shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
                                placement={position == "auto" ? undefined : position} trigger={triggerProps => {
                                return <Button alignSelf="center" variant="solid" {...triggerProps}>
                                        Menu
                                        </Button>;
                            }}>
                                <Menu.Item>Arial</Menu.Item>
                                <Menu.Item>Nunito Sans</Menu.Item>
                                <Menu.Item>Roboto</Menu.Item>
                            </Menu>

                            <Select selectedValue={position} h={20} mx={{
                                base: 0,
                                md: "auto"
                            }} onValueChange={nextValue => setPosition(nextValue)} _selectedItem={{
                            bg: "cyan.600",
                            endIcon: <CheckIcon size={4} />
                            }} accessibilityLabel="Select a position for Menu">
                                <Select.Item label="auto" value="auto" />
                                <Select.Item label="Top Left" value="top left" />
                                <Select.Item label="Top" value="top" />
                                <Select.Item label="Top Right" value="top right" />
                                <Select.Item label="Right Top" value="right top" />
                                <Select.Item label="Right" value="right" />
                                <Select.Item label="Right Bottom" value="right bottom" />
                                <Select.Item label="Bottom Left" value="bottom left" />
                                <Select.Item label="Bottom" value="bottom" />
                                <Select.Item label="Bottom Right" value="bottom right" />
                                <Select.Item label="Left Top" value="left top" />
                                <Select.Item label="Left" value="left" />
                                <Select.Item label="Left Bottom" value="left bottom" />
                            </Select>
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


export default NBMenuComponent;  