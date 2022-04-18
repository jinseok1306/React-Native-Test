import React, { useState } from 'react';
import { Chip, withTheme } from '@rneui/themed';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { color } from '@rneui/base';

const ChipComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                   
            <ScrollView>
                <View style={styles.contentView}>
                    <View style={{ alignItems: 'center' }}>
                        <Chip title="Solid Chip" containerStyle={{ marginVertical: 15 }} />
                        <Chip
                            title="Disabled Chip"
                            disabled
                            containerStyle={{ marginVertical: 15 }}
                        />
                         <Chip
                            title="Outlined Chip"
                            type="outline"
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Outlined & Disabled"
                            type="outline"
                            disabled
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Left Icon Chip"
                            icon={{
                            name: 'bluetooth',
                            type: 'font-awesome',
                            size: 20,
                            color: 'white',
                            }}
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Right Icon Chip"
                            icon={{
                            name: 'close',
                            type: 'font-awesome',
                            size: 20,
                            color: 'white',
                            }}
                            iconRight
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Pressable Icon Chip"
                            icon={{
                            name: 'bluetooth',
                            type: 'font-awesome',
                            size: 20,
                            color: 'blue',
                            }}
                            onPress={() => console.log('Icon chip was pressed!')}
                            type="outline"
                            containerStyle={{ marginVertical: 15 }}
                        />
                        <Chip
                            title="Pressable Icon Chip"
                            icon={{
                            name: 'close',
                            type: 'font-awesome',
                            size: 20,
                            color: 'blue',
                            }}
                            onPress={() => console.log('Icon chip was pressed!')}
                            iconRight
                            type="outline"
                            containerStyle={{ marginVertical: 15 }}
                        />
                    </View>
                </View>
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
    button: {
        margin: 10,
    },
})

export default ChipComponent;  