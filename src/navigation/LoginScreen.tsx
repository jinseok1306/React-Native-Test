import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../../src/common';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View>
                <Text style={{fontSize:25, textAlign: 'center'}}>Login Screen</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={()=> NavigationService.navigate('HomeScreen', {
                        screen: 'HomeScreen',
                        info: 'information'
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgb(87,174,198)',
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 30,
                        width:220,
                        
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>로그인</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default LoginScreen;  