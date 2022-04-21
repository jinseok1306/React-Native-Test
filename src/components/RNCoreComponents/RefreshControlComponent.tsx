import React, { useState } from 'react'
import { View, Text, RefreshControl, SafeAreaView, StyleSheet, StatusBar, ScrollView} from 'react-native';

const wait = (timeout : any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const RefreshControlComponent = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />   
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                    }
                >
                    <Text>Pull down to see RefreshControl indicator</Text>
                </ScrollView>
            </SafeAreaView>                                                                                                     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },    
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default RefreshControlComponent;  