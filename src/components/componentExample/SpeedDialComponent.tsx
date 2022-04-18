import React, { useState } from 'react'
import { SpeedDial, PricingCard } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const SpeedDialComponent = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
            <PricingCard
                    color={'blue'}
                    title="Free"
                    price="$0"
                    info={['1 User', 'Basic Support', 'All Core Features']}
                    button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
                />
                <PricingCard
                    color={'blue'}
                    title="Starter"
                    price="$19"
                    info={['10 Users', 'Basic Support', 'All Core Features']}
                    button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
                />
                <PricingCard
                    color={'blue'}
                    title="Enterprise"
                    price="$49"
                    info={['100 Users', 'One on One Support', 'All Core Features']}
                    button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
                /> 
            </ScrollView>                       
            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>                        
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
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },    
})


export default SpeedDialComponent;  