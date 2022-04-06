import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const Menu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('MapList', {
                        screen: 'MapList',
                        info: 'information',                            
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(87,174,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 30,
                        width:220,
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Map List 예제</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('SplashScreen', {
                        screen: 'SplashScreen',
                        info: 'information',                            
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(87,174,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 30,
                        width:220,
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>로그인 예제</Text>
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

export default Menu;  