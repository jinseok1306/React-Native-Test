import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const BottomSheetComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                        
            <SafeAreaProvider>
                <Button
                    title="Open Bottom Sheet"
                    onPress={() => setIsVisible(true)}
                    buttonStyle={styles.button}
                />
                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    {list.map((l, i) => (
                        <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                        >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>
            </SafeAreaProvider>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
    },
})

export default BottomSheetComponent;  