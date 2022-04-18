import React, { useState } from 'react'
import { Tab, Text, TabView } from '@rneui/themed';
import { View, StyleSheet, StatusBar, ScrollView} from 'react-native';

const TabComponent = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Recent"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="favorite"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                    title="cart"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                    <Text h1>Recent</Text>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                    <Text h1>Favorite</Text>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                    <Text h1>Cart</Text>
                </TabView.Item>
            </TabView>                                                      
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


export default TabComponent;  