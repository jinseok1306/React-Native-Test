import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const ModalComponent = () => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                              
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
                <Button style={{marginTop: 30}} onPress={showModal}>
                    Show
                </Button>
            </Provider>          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },    
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default ModalComponent;  