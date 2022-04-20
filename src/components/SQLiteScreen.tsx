import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

let db: SQLite.SQLiteDatabase;

const SQLiteScreen = () => {
    useEffect(() => {
        db = SQLite.openDatabase(
        {
            name: 'TestDB',
            location: 'default',
            createFromLocation: 1,
        },
        () => {
            console.log('불러오기 성공');

            db.transaction(tx => {                
                tx.executeSql(`select * from test`, [], (tx, results) => {                                  
                  const rows = results.rows;
                  let users = [];
          
                  for (let i = 0; i < rows.length; i++) {
                    users.push({
                      ...rows.item(i),
                    });
                  }    
                  console.log(users);
                });
              });
        },
        (error) => {
            console.log('에러발생: ', error);
        });
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
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