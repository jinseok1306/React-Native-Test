import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Button, LinearProgress } from '@rneui/themed';

const LinearProgressComponent = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        let subs = true;
        if (progress < 1 && progress !== 0) {
          setTimeout(() => {
            if (subs) {
              setProgress(progress + 0.1);
            }
          }, 100);
        }
        return () => {
          subs = false;
        };
    }, [progress]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />  
            <ScrollView>
                <Text>Indeterminate Variant </Text>
                <LinearProgress style={{ marginVertical: 10 }} />
                <Text>Indeterminate Variant with color</Text>
                <LinearProgress style={{ marginVertical: 10 }} color="red" />
                <Text>Determinate Variant</Text>
                <LinearProgress
                    style={{ marginVertical: 10 }}
                    value={progress}
                    variant="determinate"
                />
                <Button
                    disabled={progress > 0}
                    onPress={() => {
                    setProgress(0.00001);
                    }}
                    title={'Start Progress'}
                    containerStyle={{ margin: 10 }}
                />
                <Button
                    disabled={progress === 0}
                    onPress={() => {
                    setProgress(0);
                    }}
                    title={'Restart'}
                    containerStyle={{ margin: 10 }}
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
    contentView: {
        flex: 1,
    },
})

export default LinearProgressComponent;  