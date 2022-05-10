import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = () => {
    
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query : any) => setSearchQuery(query);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
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
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    },      
})

export default SearchbarComponent;  