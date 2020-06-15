/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'darkslateblue',
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 1,
    }
})
export default App;
