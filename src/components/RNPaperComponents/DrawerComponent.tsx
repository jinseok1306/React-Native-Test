import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Drawer } from 'react-native-paper';

const DrawerComponent = () => {
    
    const [active, setActive] = React.useState('');

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />      
            <ScrollView>
            <Drawer.Section title="Some title">
                <Drawer.Item
                    label="First Item"
                    active={active === 'first'}
                    onPress={() => setActive('first')}
                />
                <Drawer.Item
                    label="Second Item"
                    active={active === 'second'}
                    onPress={() => setActive('second')}
                />
                <Drawer.Item
                    style={{ backgroundColor: '#64ffda' }}
                    icon="star"
                    label="First Item"
                />
            </Drawer.Section>    
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
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default DrawerComponent;  