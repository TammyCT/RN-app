import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Avatar } from 'react-native-elements';

export default class PromotionScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.promotionContainer}>
                <Image
                    source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/promotion/promotion1.png' }}
                    style={styles.homeImage}
                />
                <Image
                    source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/promotion/promotion1.png' }}
                    style={styles.homeImage}
                />
            </ScrollView>

        );
    }


}


const styles = StyleSheet.create({
    promotionContainer:{
        flexDirection: 'column',
        flex: 1
    },
    homeImage:{
        height: 250,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
        width: 200
    },



});
