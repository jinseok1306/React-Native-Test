import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { NavigationService } from '../../common'; 
import { Button } from '@rneui/themed';

const CoreMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />              
            <ScrollView>                         
                <View style={styles.buttonsContainer}>                
                    <Button
                        title={'AirbnbRating'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('AirbnbRatingComponent', {
                            screen: 'AirbnbRatingComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Avatar'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('AvatarComponent', {
                            screen: 'AvatarComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Badge'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('BadgeComponent', {
                            screen: 'BadgeComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'BottomSheet'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('BottomSheetComponent', {
                            screen: 'BottomSheetComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Button'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ButtonComponent', {
                            screen: 'ButtonComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'ButtonGroup'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ButtonGroupComponent', {
                            screen: 'ButtonGroupComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Card'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('CardComponent', {
                            screen: 'CardComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'CheckBox'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('CheckBoxComponent', {
                            screen: 'CheckBoxComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Chip'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('ChipComponent', {
                            screen: 'ChipComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Dialog'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('DialogComponent', {
                            screen: 'DialogComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Divider'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('DividerComponent', {
                            screen: 'DividerComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'FAB'}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('FABComponent', {
                            screen: 'FABComponent',
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
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
});


export default CoreMenu;  