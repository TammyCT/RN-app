import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>promotion</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEFDB',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }

})
