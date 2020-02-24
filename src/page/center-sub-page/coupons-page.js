import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

export default function CouponScreen({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.coupons} source={{uri:'/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/coupon/coupon1.png'}}/>
            <Image style={styles.coupons} source={{uri:'/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/coupon/coupon1.png'}}/>

            <Image style={styles.coupons} source={{uri:'/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/coupon/coupon1.png'}}/>

            <Image style={styles.coupons} source={{uri:'/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/coupon/coupon1.png'}}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    coupons:{
        height: 130,
    }
})
