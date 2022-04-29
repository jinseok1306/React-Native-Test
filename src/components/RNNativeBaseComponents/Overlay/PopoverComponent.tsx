import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, Popover, FormControl, Input, VStack, Select, CheckIcon } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBPopoverComponent = () => {        

    const initialFocusRef = React.useRef(null);

    const [position, setPosition] = useState("auto");
    const [isOpen, setIsOpen] = useState(false);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>                           
                    <Center>
                        <Popover trigger={triggerProps => {
                            return <Button {...triggerProps} colorScheme="danger">
                                        Delete Customer
                                    </Button>;
                        }}>
                            <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                                <Popover.Arrow />
                                <Popover.CloseButton />
                                <Popover.Header>Delete Customer</Popover.Header>
                                <Popover.Body>
                                    This will remove all data relating to Alex. This action cannot be
                                    reversed. Deleted data can not be recovered.
                                </Popover.Body>
                                <Popover.Footer justifyContent="flex-end">
                                    <Button.Group space={2}>
                                        <Button colorScheme="coolGray" variant="ghost">
                                            Cancel
                                        </Button>
                                        <Button colorScheme="danger">Delete</Button>
                                    </Button.Group>
                                </Popover.Footer>
                            </Popover.Content>
                        </Popover>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>initialFocusRef</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <Popover initialFocusRef={initialFocusRef} trigger={triggerProps => {
                            return <Button {...triggerProps}>Edit Info</Button>;
                        }}>
                            <Popover.Content width="56">
                                <Popover.Arrow />
                                <Popover.CloseButton />
                                <Popover.Header>Personal Details</Popover.Header>
                                <Popover.Body>
                                    <FormControl>
                                    <FormControl.Label _text={{
                                        fontSize: "xs",
                                        fontWeight: "medium"
                                    }}>
                                        First Name
                                    </FormControl.Label>
                                    <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
                                    </FormControl>
                                    <FormControl mt="3">
                                    <FormControl.Label _text={{
                                        fontSize: "xs",
                                        fontWeight: "medium"
                                    }}>
                                        Last Name
                                    </FormControl.Label>
                                    <Input rounded="sm" fontSize="xs" />
                                    </FormControl>
                                </Popover.Body>
                                <Popover.Footer>
                                    <Button.Group>
                                    <Button colorScheme="coolGray" variant="ghost">
                                        Cancel
                                    </Button>
                                    <Button>Save</Button>
                                    </Button.Group>
                                </Popover.Footer>
                            </Popover.Content>
                        </Popover>
                    </Center>
                    <Text>{"\n"}</Text> 
                    <Text style={styles.subHeader}>Positions</Text>
                    <Divider />            
                    <Text>{"\n"}</Text> 
                    <Center>
                        <VStack space={6} alignSelf="flex-start" w="100%">
                            <Popover // @ts-ignore
                        placement={position === "auto" ? undefined : position} trigger={triggerProps => {
                            return <Button colorScheme="danger" alignSelf="center" {...triggerProps} onPress={() => setIsOpen(true)}>
                                    Delete Customer
                                </Button>;
                        }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                            <Popover.Content w="56">
                                <Popover.Arrow />
                                <Popover.CloseButton onPress={() => setIsOpen(false)} />
                                <Popover.Header>Delete Customer</Popover.Header>
                                <Popover.Body>
                                    This will remove all data relating to Alex. This action cannot be
                                    reversed. Deleted data can not be recovered.
                                </Popover.Body>
                                <Popover.Footer justifyContent="flex-end">
                                <Button.Group space={2}>
                                    <Button colorScheme="coolGray" variant="ghost" onPress={() => setIsOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="danger" onPress={() => setIsOpen(false)}>
                                        Delete
                                    </Button>
                                </Button.Group>
                                </Popover.Footer>
                            </Popover.Content>
                            </Popover>

                            <Select selectedValue={position} mx={{
                                base: 0,
                                md: "auto"
                            }} accessibilityLabel="Select a position for Popover" onValueChange={nextValue => setPosition(nextValue)} _selectedItem={{
                                bg: "cyan.600",
                                endIcon: <CheckIcon size={4} />
                            }}>
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


export default NBPopoverComponent;  