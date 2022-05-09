import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Badge } from 'react-native-paper';

const BadgeComponent = () => {

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />             
            <ScrollView>    
                <Text>{"\n"}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 30,
                    }}                
                >
                    <Badge>3</Badge>
                    <Badge size={30}></Badge>
                    <Badge></Badge>
                </View>
                
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

export default BadgeComponent;  