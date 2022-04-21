import React, { useState } from 'react'
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const OverlayComponent = () => {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                <Button
                    title="Open Overlay"
                    onPress={toggleOverlay}
                    buttonStyle={styles.button}
                />
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={styles.textPrimary}>Hello!</Text>
                    <Text style={styles.textSecondary}>
                        Welcome to React Native Elements
                    </Text>
                    <Button
                        icon={
                        <Icon
                            name="wrench"
                            type="font-awesome"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 10 }}
                        />
                        }
                        title="Start Building"
                        onPress={toggleOverlay}
                    />
                </Overlay>
            </ScrollView>             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    contentView: {
        flex: 1,
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
})


export default OverlayComponent;  