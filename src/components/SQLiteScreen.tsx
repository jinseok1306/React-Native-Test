import React, { useEffect, useState } from 'react';
import { SpeedDial, PricingCard } from '@rneui/themed';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { NavigationService } from '../common';
import {    
    ListItem,
    Avatar,
    Icon,
    Badge,
    ListItemProps,
    Button,
    Switch    
} from '@rneui/themed';


let db: SQLite.SQLiteDatabase;
let users: any[] = [];

const SQLiteScreen = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dataSearch();
    }, [])
            
    //로컬 DB 데이터 가져오기
    function dataSearch() {                     
        db = SQLite.openDatabase(
            {
                name: 'TestDB.db',
                location: 'default',
                createFromLocation: 1,
            },
            () => {                
                    db.transaction(tx => {                                        
                        tx.executeSql(`select * from test`, [], (tx, results) => {   
                            setLoading(true);                                                              
                            const rows = results.rows;                  
                            
                            users = [];
                            
                            for (let i = 0; i < rows.length; i++) {
                                users.push({
                                    ...rows.item(i),
                                });
                            }                                                
                            setLoading(false);                          
                        });    

                    });                    
                },
            (error) => {
                console.log('에러발생: ', error);
        }); 
                 
    }

    if(loading) {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <ActivityIndicator size="large" />
                </View>
            </View>            
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>                
                <View>
                    { users.map((item, index) => (
                        <ListItem
                            key={index}                                    
                            containerStyle={{
                            marginHorizontal: 16,
                            marginVertical: 8,
                            borderRadius: 8,
                            }}
                        >                                                                                                    
                            <Avatar rounded source={{ uri: item.IMAGE_URL }} />
                            <ListItem.Content>
                            <ListItem.Title
                                style={{ color: 'black', fontWeight: 'bold' }}
                            >
                                {item.NAME}
                            </ListItem.Title>
                            <ListItem.Subtitle style={[{ color: 'black' }]}>
                                {item.EMAIL}
                            </ListItem.Subtitle>
                            </ListItem.Content>                            
                        </ListItem>                      
                    ))}
                </View>                                    
            </ScrollView>
            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add"
                    onPress={()=> NavigationService.navigate('SQLiteAddScreen', {
                        screen: 'SQLiteAddScreen',
                        info: 'information'
                    })}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default SQLiteScreen;  