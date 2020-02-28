import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

export default function CouponScreen({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.coupons} source={require('../../../assets/coupon/coupon1.png')}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    coupons:{
        height: 130,
        width: 400
    }
})
