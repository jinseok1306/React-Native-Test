import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { NavigationService } from '../../common'; 
import { Button } from '@rneui/themed';

const RNCoreMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />              
            <ScrollView>                                     
                <View style={styles.buttonsContainer}>                                  
                    <Button
                        title={'ActivityIndicator'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ActivityIndicatorComponent', {
                            screen: 'ActivityIndicatorComponent',
                            info: 'information',                            
                        })}
                    />         
                    <Button
                        title={'Button'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('CoreButtonComponent', {
                            screen: 'CoreButtonComponent',
                            info: 'information',                            
                        })}
                    />     
                    <Button
                        title={'FlatList'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('FlatListComponent', {
                            screen: 'FlatListComponent',
                            info: 'information',                            
                        })}
                    />             
                    <Button
                        title={'Image'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('CoreImageComponent', {
                            screen: 'CoreImageComponent',
                            info: 'information',                            
                        })}
                    />      
                    <Button
                        title={'ImageBackground'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ImageBackgroundComponent', {
                            screen: 'ImageBackgroundComponent',
                            info: 'information',                            
                        })}
                    />      
                    <Button
                        title={'KeyboardAvoidingView'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('KeyboardAvoidingViewComponent', {
                            screen: 'KeyboardAvoidingViewComponent',
                            info: 'information',                            
                        })}
                    />     
                    <Button
                        title={'Modal'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ModalComponent', {
                            screen: 'ModalComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Pressable'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PressableComponent', {
                            screen: 'PressableComponent',
                            info: 'information',                            
                        })}
                    />   
                    <Button
                        title={'RefreshControl'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('RefreshControlComponent', {
                            screen: 'RefreshControlComponent',
                            info: 'information',                            
                        })}
                    />   
                    <Button
                        title={'ScrollView'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ScrollViewComponent', {
                            screen: 'ScrollViewComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'SectionList'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('SectionListComponent', {
                            screen: 'SectionListComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'StatusBar'}
                        buttonStyle={{ backgroundColor: 'rgba(199, 43, 98, 1)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('StatusBarComponent', {
                            screen: 'StatusBarComponent',
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
        backgroundColor : "#282c34",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
});


export default RNCoreMenu;  