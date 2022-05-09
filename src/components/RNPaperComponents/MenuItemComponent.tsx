import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image, Text } from 'react-native';
import { Menu } from 'react-native-paper';

const MenuItemComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                  
            <ScrollView>
                <Text>{"\n"}</Text>
                <View style={{ flex: 1 }}>
                    <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
                    <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
                    <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
                    <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
                    <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
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
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default MenuItemComponent;  