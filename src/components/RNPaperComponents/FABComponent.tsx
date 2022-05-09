import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

const FABComponent = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({open}) => setState({ open });

    const { open } = state;

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                  
            <Provider>
            <Portal>
                <FAB.Group
                open={open}
                icon={open ? 'calendar-today' : 'plus'}
                actions={[
                    { icon: 'plus', onPress: () => console.log('Pressed add') },
                    {
                    icon: 'star',
                    label: 'Star',
                    onPress: () => console.log('Pressed star'),
                    },
                    {
                    icon: 'email',
                    label: 'Email',
                    onPress: () => console.log('Pressed email'),
                    },
                    {
                    icon: 'bell',
                    label: 'Remind',
                    onPress: () => console.log('Pressed notifications'),
                    small: false,
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                    // do something if the speed dial is open
                    }
                }}
                />
            </Portal>
        </Provider>                       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },    
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default FABComponent;  