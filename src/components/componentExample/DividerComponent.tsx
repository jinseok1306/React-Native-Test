import React, { useState } from 'react';
import { Text, Divider, useTheme } from '@rneui/themed';
import { View, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';

const DividerComponent = () => {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />    
            <ScrollView>
                <Text style={styles.subHeader}>Horizontal Dividers</Text>
                <View style={styles.horizontal}>
                <Text style={styles.horizontalText}>Horizontal Divider</Text>
                <Divider />
                <Text style={styles.horizontalText}>
                Horizontal Divider with width and color
                </Text>
                <Divider width={5} color={theme?.colors?.primary} />
                <Text style={styles.subHeader}>Horizontal Divider with Inset</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>
                    Horizontal Divider with left inset
                    </Text>
                    <Divider inset={true} />
                    <Text style={styles.horizontalText}>
                    Horizontal Divider with right inset
                    </Text>
                    <Divider inset={true} insetType="right" />
                    <Text style={styles.horizontalText}>
                    Horizontal Divider with middle inset
                    </Text>
                    <Divider inset={true} insetType="middle" />
                    <Text style={styles.horizontalText}>Welcome to RNE App</Text>                    
                </View>
                <Text style={styles.subHeader}>Vertical Dividers</Text>
                <View style={styles.vertical}>
                    <Text>Left text</Text>
                    <Divider orientation="vertical" />
                    <Text>Right text</Text>
                </View>
                <View style={styles.vertical}>
                    <Text>Left text</Text>
                    <Divider orientation="vertical" width={5} />
                    <Text>Right text</Text>
                </View>
                <Text style={styles.subHeader}>Dividers with SubHeader</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>Left text</Text>
                    <Divider
                        subHeader="Divider"
                        inset={true}
                        subHeaderStyle={{ color: theme?.colors?.primary }}
                    />
                    <Text style={styles.horizontalText}>Right text</Text>
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
    button: {
        margin: 10,
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
      },
      horizontal: {
        marginBottom: 10,
      },
      horizontalText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
      },
      vertical: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
})

export default DividerComponent;  