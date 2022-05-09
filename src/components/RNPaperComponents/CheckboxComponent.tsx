import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxComponent = () => {

    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />      
            <ScrollView>                
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}                    
                />
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}     
                    color={'red'}               
                />
                <Checkbox
                    status={'unchecked'}   
                    disabled={true}
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

export default CheckboxComponent;  