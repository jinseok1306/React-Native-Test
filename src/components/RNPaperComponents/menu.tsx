import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { NavigationService } from '../../common'; 
import { Button } from '@rneui/themed';

const RNPaperMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />              
            <ScrollView>                                     
                <View style={styles.buttonsContainer}>                                  
                    <Button
                        title={'ActivityIndicator'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperActivityIndicatorComponent', {
                            screen: 'PaperActivityIndicatorComponent',
                            info: 'information',                            
                        })}
                    />      
                    <Button
                        title={'Appbar'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperAppbarComponent', {
                            screen: 'PaperAppbarComponent',
                            info: 'information',                            
                        })}
                    />      
                    <Button
                        title={'Avatar'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperAvatarComponent', {
                            screen: 'PaperAvatarComponent',
                            info: 'information',                            
                        })}
                    />           
                    <Button
                        title={'Badge'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperBadgeComponent', {
                            screen: 'PaperBadgeComponent',
                            info: 'information',                            
                        })}
                    />    
                    <Button
                        title={'Banner'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperBannerComponent', {
                            screen: 'PaperBannerComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'BottomNavigation'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperBottomNavigationComponent', {
                            screen: 'PaperBottomNavigationComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Button'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperButtonComponent', {
                            screen: 'PaperButtonComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Card'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperCardComponent', {
                            screen: 'PaperCardComponent',
                            info: 'information',                            
                        })}
                    />  
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
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,        
    },
    subHeader: {
        backgroundColor : "#6200EE",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
});


export default RNPaperMenu;  