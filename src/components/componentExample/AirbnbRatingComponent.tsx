import React, {useState} from 'react'
import { AirbnbRating  } from '@rneui/themed'
import { View, Text, StyleSheet, StatusBar, Platform, ScrollView } from 'react-native';


const AirbnbRatingComponent = () => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
      };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView style={styles.viewContainer}>
                <View
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30,
                    }}
                >
                    <AirbnbRating />
                    <AirbnbRating isDisabled={true}/>
                    <AirbnbRating
                        count={11}
                        reviews={[
                            'Terrible',
                            'Bad',
                            'Meh',
                            'OK',
                            'Good',
                            'Hmm...',
                            'Very Good',
                            'Wow',
                            'Amazing',
                            'Unbelievable',
                            'Jesus',
                        ]}
                        defaultRating={11}
                        size={20}
                    />
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
    headingContainer: {
        paddingTop: 50,
      },
      titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
        color: '#27ae60',
      },
      subtitleText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
        color: '#34495e',
      },
      viewContainer: {
        flex: 1,
      },
      rating: {
        paddingVertical: 10,
      },
})

export default AirbnbRatingComponent;  