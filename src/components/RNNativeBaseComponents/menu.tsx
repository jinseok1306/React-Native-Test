import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { NavigationService } from '../../common'; 
import { Button, Divider } from '@rneui/themed';

const RNNativeBaseMenu = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />              
            <ScrollView>                                     
            <Text style={styles.subHeader}>LAYOUT</Text>
            <Divider />
                <View style={styles.buttonsContainer}>                                                   
                    <Button
                        title={'Box'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBBoxComponent', {
                            screen: 'NBBoxComponent',
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
        marginVertical: 5,
    },
    subHeader: {        
        color : "#1D2466",
        textAlign : "center",
        paddingVertical : 5,      
        marginTop : 10,  
        fontWeight : "bold",
    }
});


export default RNNativeBaseMenu;  