import React, { useState } from 'react'
import { SocialIcon, SocialIconProps, SocialMediaType } from '@rneui/themed';
import { View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

type IconData = {
    type: SocialMediaType;
    iconType: string;
};

const _ = require("lodash");

const dataList: Partial<IconData>[] = [
    {
      type: 'facebook',
    },
    {
      type: 'twitter',
    },
    {
      type: 'google-plus-official',
    },
    {
      type: 'google',
    },
    {
      type: 'pinterest',
    },
    {
      type: 'linkedin',
    },
    {
      type: 'youtube',
    },
    {
      type: 'vimeo',
    },
    {
      type: 'tumblr',
    },
    {
      type: 'instagram',
    },
    {
      type: 'quora',
    },
    {
      type: 'flickr',
    },
    {
      type: 'foursquare',
    },
    {
      type: 'wordpress',
    },
    {
      type: 'stumbleupon',
    },
    {
      type: 'github',
    },
    {
      type: 'github-alt',
    },
    {
      type: 'twitch',
    },
    {
      type: 'medium',
    },
    {
      type: 'soundcloud',
    },
    {
      type: 'stack-overflow',
    },
    {
      type: 'gitlab',
    },
    {
      type: 'angellist',
    },
    {
      type: 'codepen',
    },
    {
      type: 'weibo',
    },
    {
      type: 'vk',
    },
    {
      type: 'facebook-messenger',
      iconType: 'material-community',
    },
    {
      type: 'whatsapp',
    },
];

const SocialIconComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" /> 
            <ScrollView>
                {_.chunk(dataList, 3).map(
                    (chunk: Partial<IconData>[], chunkIndex: React.Key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 10,
                            backgroundColor: '#4c4c4c',
                        }}
                        key={chunkIndex}
                    >
                        {chunk.map((l: Partial<IconData>, i: React.Key) => (
                        <SocialIcon
                            type={l.type}
                            iconType={l.iconType ? l.iconType : 'font-awesome'}
                            key={`${chunkIndex}-${i}`}
                        />
                        ))}
                    </View>
                    )
                )}
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
})


export default SocialIconComponent;  