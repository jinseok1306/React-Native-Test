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
                    <Button
                        title={'Center'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBCenterComponent', {
                            screen: 'NBCenterComponent',
                            info: 'information',                            
                        })}
                    />             
                    <Button
                        title={'Container'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBContainerComponent', {
                            screen: 'NBContainerComponent',
                            info: 'information',                            
                        })}
                    />         
                    <Button
                        title={'Flex'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBFlexComponent', {
                            screen: 'NBFlexComponent',
                            info: 'information',                            
                        })}
                    />       
                    <Button
                        title={'HStack'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBHStackComponent', {
                            screen: 'NBHStackComponent',
                            info: 'information',                            
                        })}
                    />   
                    <Button
                        title={'Stack'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBStackComponent', {
                            screen: 'NBStackComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'VStack'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBVStackComponent', {
                            screen: 'NBVStackComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'ZStack'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBZStackComponent', {
                            screen: 'NBZStackComponent',
                            info: 'information',                            
                        })}
                    />                    
                </View>     
                <Text style={styles.subHeader}>FORMS</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                        title={'Button'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBButtonComponent', {
                            screen: 'NBButtonComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Pressable'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBPressableComponent', {
                            screen: 'NBPressableComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'CheckBox'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBCheckBoxComponent', {
                            screen: 'NBCheckBoxComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'IconButton'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBIconButtonComponent', {
                            screen: 'NBIconButtonComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Input'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBInputComponent', {
                            screen: 'NBInputComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Link'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBLinkComponent', {
                            screen: 'NBLinkComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Radio'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBRadioComponent', {
                            screen: 'NBRadioComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Select'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBSelectComponent', {
                            screen: 'NBSelectComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'Switch'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBSwitchComponent', {
                            screen: 'NBSwitchComponent',
                            info: 'information',                            
                        })}
                    />
                    <Button
                        title={'TextArea'}
                        buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                        containerStyle={{
                            width: 250,
                            marginHorizontal: 50,
                            marginVertical: 10,
                            borderRadius: 10,                            
                        }}
                        onPress={()=> NavigationService.navigate('NBTextAreaComponent', {
                            screen: 'NBTextAreaComponent',
                            info: 'information',                            
                        })}
                    />
                </View>       
                <Text style={styles.subHeader}>FEEDBACK</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'Alert'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBAlertComponent', {
                                screen: 'NBAlertComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Progress'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBProgressComponent', {
                                screen: 'NBProgressComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Skeleton'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBSkeletonComponent', {
                                screen: 'NBSkeletonComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Spinner'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBSpinnerComponent', {
                                screen: 'NBSpinnerComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Toast'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBToastComponent', {
                                screen: 'NBToastComponent',
                                info: 'information',                            
                            })}
                    />
                </View>        
                <Text style={styles.subHeader}>TYPOGRAPHY</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'Text'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBTextComponent', {
                                screen: 'NBTextComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Heading'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBHeadingComponent', {
                                screen: 'NBHeadingComponent',
                                info: 'information',                            
                            })}
                    />
                </View>         
                <Text style={styles.subHeader}>OVERLAY</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'AlertDialog'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBAlertDialogComponent', {
                                screen: 'NBAlertDialogComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Menu'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBMenuComponent', {
                                screen: 'NBMenuComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Modal'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBModalComponent', {
                                screen: 'NBModalComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Popover'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBPopoverComponent', {
                                screen: 'NBPopoverComponent',
                                info: 'information',                            
                            })}
                    />
                </View>    
                <Text style={styles.subHeader}>DISCLOSURE</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'ActionSheet'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBActionSheetComponent', {
                                screen: 'NBActionSheetComponent',
                                info: 'information',                            
                            })}
                    />                    
                </View>       
                <Text style={styles.subHeader}>MEDIA AND ICONS</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'Avatar'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBAvatarComponent', {
                                screen: 'NBAvatarComponent',
                                info: 'information',                            
                            })}
                    />
                    <Button
                            title={'Image'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBImageComponent', {
                                screen: 'NBImageComponent',
                                info: 'information',                            
                            })}
                    />                
                </View>                                                
                <Text style={styles.subHeader}>TRANSITION</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    <Button
                            title={'PresenceTransition'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBPresenceTransitionComponent', {
                                screen: 'NBPresenceTransitionComponent',
                                info: 'information',                            
                            })}
                    />  
                    <Button
                            title={'Slide'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBSlideComponent', {
                                screen: 'NBSlideComponent',
                                info: 'information',                            
                            })}
                    />     
                    <Button
                            title={'Stagger'}
                            buttonStyle={{ backgroundColor: 'rgb(29,36,102)' }}
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                borderRadius: 10,                            
                            }}
                            onPress={()=> NavigationService.navigate('NBStaggerComponent', {
                                screen: 'NBStaggerComponent',
                                info: 'information',                            
                            })}
                    />                       
                </View>
                <Text style={styles.subHeader}>OTHERS</Text>
                <Divider />  
                <View style={styles.buttonsContainer}>
                    
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