import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default class LazyLoadingBar extends Component {

    render() {
        if(this.props.reachBottom){
           return(
               <View/>
           ) ;
        }
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color='#23B2BE'/>
                    <Text style={styles.bar}>Loading...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        color: '#23B2BE'
    },
});

