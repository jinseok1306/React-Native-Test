import React, {useState} from 'react'
import { ButtonGroup } from '@rneui/themed'
import { View, Text, StyleSheet, StatusBar} from 'react-native';


const ButtonGroupComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <View style={styles.contentView}>
                <Text style={styles.subHeader}>Using Strings</Text>     
                <ButtonGroup
                    buttons={['SIMPLE', 'BUTTON', 'GROUP']}
                    selectedIndex={selectedIndex}
                    onPress={(value) => {
                        setSelectedIndex(value);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                /> 
                <ButtonGroup
                    buttons={['Multiple', 'Select', 'Button', 'Group']}
                    selectMultiple
                    selectedIndexes={selectedIndexes}
                    onPress={(value) => {
                        setSelectedIndexes(value);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                />
                <Text style={styles.subHeader}>Using Components</Text>
            </View>                                   
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
      }
})

export default ButtonGroupComponent;  