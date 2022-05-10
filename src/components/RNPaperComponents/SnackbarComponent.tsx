import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const SnackbarComponent = () => {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>            
            </ScrollView>       
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
            }}>
                Hey there! I'm a Snackbar.
            </Snackbar>                                  
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

export default SnackbarComponent;  