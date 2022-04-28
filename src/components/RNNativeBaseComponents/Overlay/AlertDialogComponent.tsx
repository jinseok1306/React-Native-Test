import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from '@rneui/themed';
import { NativeBaseProvider, Text, Button, Center, AlertDialog, Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NBAlertDialogComponent = () => {        

    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

    return (  
        <NativeBaseProvider>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />     
                <ScrollView>
                    <Text style={styles.subHeader}>Basic</Text>
                    <Divider />            
                    <Text>{"\n"}</Text>    
                    <Center>
                        <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
                            Delete Customer
                        </Button>
                        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                            <AlertDialog.Content>
                            <AlertDialog.CloseButton />
                            <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                            <AlertDialog.Body>
                                This will remove all data relating to Alex. This action cannot be
                                reversed. Deleted data can not be recovered.
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                                    Cancel
                                </Button>
                                <Button colorScheme="danger" onPress={onClose}>
                                    Delete
                                </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                            </AlertDialog.Content>
                        </AlertDialog>
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


export default NBAlertDialogComponent;  