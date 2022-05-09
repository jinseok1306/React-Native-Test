import React, {useState} from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Banner } from 'react-native-paper';

const BannerComponent = () => {

    const [visible, setVisible] = React.useState(true);

    return (
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" />             
            <Banner
                visible={visible}
                actions={[
                    {
                        label: 'Fix it',
                        onPress: () => setVisible(false),
                    },
                    {
                        label: 'Learn more',
                        onPress: () => setVisible(false),
                    },
                ]}
                icon={({size}) => (
                    <Image
                        source={{
                            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                    }}
                    style={{
                        width: size,
                        height: size,
                    }}
                    />
            )}>
                There was a problem processing a transaction on your credit card.
            </Banner>
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

export default BannerComponent;  