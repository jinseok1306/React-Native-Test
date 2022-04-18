import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const SearchBarComponent = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search : any) => {
        setSearch(search);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
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


export default SearchBarComponent;  