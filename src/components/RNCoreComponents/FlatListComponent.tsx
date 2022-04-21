import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

const Item = ({ title } : { title:any }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const TouchItem = ({ item, onPress, backgroundColor, textColor } : { item:any, onPress:any, backgroundColor:any, textColor:any}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const FlatListComponent = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item } : { item:any }) => (
        <Item title={item.title} />
      );

    const TouchrenderItem = ({ item } : { item:any }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <TouchItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />             
            <ScrollView>
                <Text style={styles.subHeader}>FlatList</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />                    
                </SafeAreaView>
                <Text style={styles.subHeader}>FlatList-selectable</Text>
                <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={TouchrenderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
                </SafeAreaView>
            </ScrollView>                                                                                    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10,        
      }
})


export default FlatListComponent;  