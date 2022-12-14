import React, {useState, useEffect, Component} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationService } from '../common';

const SplashScreen = () => {   
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            AsyncStorage.getItem('user_id').then((value) =>      
            NavigationService.navigate(value === null ? 'LoginScreen' : 'HomeScreen', {
                screen: value === null ? 'LoginScreen' : 'HomeScreen',
                info: 'information',                            
            }),
            );
        }, 2000);
    }, []);   

    return (
        <View style={styles.container}>
            <Image
            source={require('../../Image/background.jpeg')}
            style={{width: '100%', resizeMode: 'contain', margin: 30}}
            />       
            <ActivityIndicator
                //animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />       
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },

  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});