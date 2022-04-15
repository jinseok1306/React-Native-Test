import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from '@rneui/themed';

const IconComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />  
            <View
                style={{
                    alignItems: 'center',
                    paddingVertical: 5,
                    flexGrow: 1,
                }}
            >
                <Icon 
                    name='rowing' 
                />
                <Icon
                    name='g-translate'
                    color='#00aced' 
                />
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />
                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} 
                />
            </View>                                        
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

export default IconComponent;  