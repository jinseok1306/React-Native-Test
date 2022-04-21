import React, { useState } from 'react'
import { PricingCard } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const PricingCardComponent = () => {

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


export default PricingCardComponent;  