import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { List } from 'react-native-paper';

const ListComponent = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />                  
            <ScrollView>
                <List.Section title="Accordions">
                    <List.Accordion
                        title="Uncontrolled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Controlled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>
                </List.Section>
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

export default ListComponent;  