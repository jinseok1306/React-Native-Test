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
                    <Button
                        title={'Checkbox'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperCheckboxComponent', {
                            screen: 'PaperCheckboxComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Chip'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperChipComponent', {
                            screen: 'PaperChipComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'DataTable'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperDataTableComponent', {
                            screen: 'PaperDataTableComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Dialog'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperDialogComponent', {
                            screen: 'PaperDialogComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Divider'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperDividerComponent', {
                            screen: 'PaperDividerComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'Drawer'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperDrawerComponent', {
                            screen: 'PaperDrawerComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'FAB'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperFABComponent', {
                            screen: 'PaperFABComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'HelperText'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperHelperTextComponent', {
                            screen: 'PaperHelperTextComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'IconButton'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperIconButtonComponent', {
                            screen: 'PaperIconButtonComponent',
                            info: 'information',                            
                        })}
                    />  
                    <Button
                        title={'List'}
                        buttonStyle={{ backgroundColor: 'rgb(98,0,238)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('PaperListComponent', {
                            screen: 'PaperListComponent',
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