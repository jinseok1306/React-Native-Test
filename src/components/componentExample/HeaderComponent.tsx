import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle, 
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type HeaderComponentProps = {
    title: string;
    view?: string;
};
    
type ParamList = {
    Detail: {
      openDrawer: void;
    };
};

const HeaderComponent = () => {

    const docsNavigate = () => {
        Linking.openURL(`https://google.com/`);
    };

    const playgroundNavigate = () => {
        Linking.openURL(`https://www.naver.com/`);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />  
            <SafeAreaProvider>
                <HeaderRNE
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                    }}
                    rightComponent={
                        <View style={styles.headerRight}>
                            <TouchableOpacity onPress={docsNavigate}>
                                <Icon name="description" color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 10 }}
                                onPress={playgroundNavigate}
                            >
                                <Icon type="antdesign" name="rocket1" color="white" />
                            </TouchableOpacity>
                        </View>
                    }
                    centerComponent={{ text: 'Header', style: styles.heading }}
                />
            </SafeAreaProvider>                                         
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
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default HeaderComponent;  