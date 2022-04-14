import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../../common'; 

const CoreMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />  
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('AirbnbRatingComponent', {
                        screen: 'AirbnbRatingComponent',
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
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>AirbnbRating</Text>
            </TouchableOpacity>  
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('AvatarComponent', {
                        screen: 'AvatarComponent',
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
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Avatar</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('BadgeComponent', {
                        screen: 'BadgeComponent',
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
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Badge</Text>
            </TouchableOpacity>            
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
            <TouchableOpacity
                    onPress={()=> NavigationService.navigate('CardComponent', {
                        screen: 'CardComponent',
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
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Card</Text>
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