import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Input, Icon } from '@rneui/themed';

const InputComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />    
            <View style={styles.contentView}>
                <Input
                    placeholder='BASIC INPUT'
                />
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder="Comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => this.setState({ comment: value })}
                />
                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                />
                <Input placeholder="Password" secureTextEntry={true} />
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
})

export default InputComponent;  