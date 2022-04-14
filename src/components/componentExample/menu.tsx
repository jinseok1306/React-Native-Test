import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../../common'; 

const CoreMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('BottomSheetComponent', {
                        screen: 'BottomSheetComponent',
                        info: 'information',                            
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(10,204,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        width:250,
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>BottomSheet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('ButtonComponent', {
                        screen: 'ButtonComponent',
                        info: 'information',                            
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(10,204,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        width:250,
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('ButtonGroupComponent', {
                        screen: 'ButtonGroupComponent',
                        info: 'information',                            
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(10,204,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        width:250,
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>ButtonGroup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    }
})

export default CoreMenu;  