import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const CheckBoxComponent = () => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />                                             
            <View style={styles.contentView}>
                <CheckBox
                    center
                    title="Click Here"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
                <CheckBox
                    center
                    title="Click Here"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={check2}
                    onPress={() => setCheck2(!check2)}
                />
                <CheckBox
                    center
                    title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
                    iconRight
                    iconType="material"
                    checkedIcon="clear"
                    uncheckedIcon="add"
                    checkedColor="red"
                    checked={check3}
                    onPress={() => setCheck3(!check3)}
                />
                <CheckBox
                    center
                    checkedIcon={
                        <Icon
                        name="radio-button-checked"
                        type="material"
                        color="green"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                        />
                    }
                    uncheckedIcon={
                        <Icon
                        name="radio-button-unchecked"
                        type="material"
                        color="grey"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                        />
                    }
                    checked={check4}
                    onPress={() => setCheck4(!check4)}
                />
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
    button: {
        margin: 10,
    },
})

export default CheckBoxComponent;  