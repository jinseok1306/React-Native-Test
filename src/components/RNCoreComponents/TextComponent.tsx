import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';

const TextComponent = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = "This is not really a bird nest.";

    const onPressTitle = () => {
        setTitleText("Bird's Nest [pressed]");
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />            
            <ScrollView>
                <Text style={styles.subHeader}>Text</Text>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={onPressTitle}>
                        {titleText}
                        {"\n"}
                        {"\n"}
                    </Text>
                    <Text numberOfLines={5}>{bodyText}</Text>
                </Text>
                <Text>{"\n"}</Text>
                <Text style={styles.subHeader}>Nested Text</Text>
                <Text style={styles.baseText}>
                    I am bold
                    <Text style={styles.innerText}> and red</Text>
                </Text>
            </ScrollView>                                                                           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }, 
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10,        
    },
    innerText: {
        color: 'red',
        fontWeight: 'bold'
    }
})


export default TextComponent;  