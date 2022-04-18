import React, { useState } from 'react'
import { Slider, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

const SliderComponent = () => {
    const [value, setValue] = useState(0);
    const [vertValue, setVertValue] = useState(0);

    const interpolate = (start: number, end: number) => {
        let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
        return Math.ceil((1 - k) * start + k * end) % 256;
    };

    const color = () => {
        let r = interpolate(255, 0);
        let g = interpolate(0, 255);
        let b = interpolate(0, 0);
        return `rgb(${r},${g},${b})`;
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                <Text style={styles.subHeader}>Horizontal Slider</Text>
                <View style={[styles.contentView]}>
                    <Slider
                        value={value}
                        onValueChange={setValue}
                        maximumValue={10}
                        minimumValue={0}
                        step={1}
                        allowTouchTrack
                        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                        thumbProps={{
                        children: (
                            <Icon
                                name="heartbeat"
                                type="font-awesome"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color={color()}
                            />
                        ),
                        }}
                    />
                    <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
                </View>
                <Text style={styles.subHeader}>Vertical Slider</Text>
                <View style={styles.verticalContent}>
                    <Slider
                        value={vertValue}
                        onValueChange={setVertValue}
                        maximumValue={40}
                        minimumValue={20}
                        step={1}
                        orientation="vertical"
                        thumbStyle={{ height: 18, width: 16, backgroundColor: 'transparent' }}
                        thumbProps={{
                        children: (
                            <Icon
                                name="heartbeat"
                                type="font-awesome"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="#f50"
                            />
                        ),
                        }}
                    />
                </View>
                <Text style={{ paddingLeft: 25 }}>Value: {vertValue}</Text>
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
    contentView: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    verticalContent: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        height: 400,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
})


export default SliderComponent;  