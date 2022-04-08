import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import { IProps, actionCreators } from '../stores/ReduxScreen';

interface Props extends IProps {

}

interface States {
    
}

class ReduxScreen extends Component<Props, States>{
    constructor(props: Props){
        super(props);
    }

    _changeText = (text: string) => {
        this.props.changeText(text);
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={{fontSize: 20, textAlign: 'center'}}>{this.props.text}{"\n"}</Text>                
                <TextInput style={{borderWidth: 1, width: 220, alignSelf: 'center'}} onChangeText={this._changeText.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})

// props 로 넣어줄 스토어 상태값
const mapStateToProps = (state :any) => ({
    text: state.ReduxScreen.text,
});
  
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch : any) => ({
    changeText: (text: string) => dispatch(actionCreators.changeText(text)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxScreen);