import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

const AvatarComponent = () => {

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
                  <Avatar.Icon size={40} icon="folder" /> 
                  <Avatar.Icon size={40} icon="folder" color='red'/> 
                  <Avatar.Icon size={30} icon="folder" /> 
                </View>         
                <Text>{"\n"}</Text>           
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 30,
                    }}                
                >
                    <Avatar.Text size={24} label="XD" />
                    <Avatar.Text size={30} label="XD" />
                    <Avatar.Text size={24} label="XD" color='red'/>
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

export default AvatarComponent;  