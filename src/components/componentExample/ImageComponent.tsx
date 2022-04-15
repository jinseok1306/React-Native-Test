import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
import { Image } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/random?sig=';

const ImageComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />  
            <SafeAreaView>
                <FlatList
                    data={[...new Array(10)].map((_, i) => i.toString())}
                    style={styles.list}
                    numColumns={2}
                    keyExtractor={(e) => e}
                    renderItem={({ item }) => (
                    <Image
                        source={{ uri: BASE_URI + item }}
                        containerStyle={styles.item}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    )}
                />
            </SafeAreaView>                                       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },     
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    }, 
})

export default ImageComponent;  