import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import { Button } from 'react-native-elements';
import List from '../ui-library/profile-list';

let nav;

function accessToLoginPage(navigation){
    console.log(navigation)
    navigation.navigate('Login / Sign Up')
}

function accessTo(pageName) {
    nav.navigate(pageName)
}


export default function ProfileCenterScreen({navigation}) {
    nav = navigation;
    return (
        <View style={styles.container}>

            <View style={styles.btnContainer}>
                <Button
                    buttonStyle={{backgroundColor: '#23B2BE'}}
                    title="Login / Sign Up"
                    onPress={() => accessToLoginPage(navigation)}
                />
            </View>
            <View style={styles.listContainer}>
                <List iconName='account-multiple' color='#ffcc00' content='My Friends' pageName='friend' accessTo= {accessTo.bind(this)}/>
                <List iconName='history' color='#3399ff' content='History' pageName='history' accessTo= {accessTo.bind(this)}/>
                <List iconName='ticket-confirmation' color='#cc3333' content='My Coupons' pageName='coupons' accessTo= {accessTo.bind(this)}/>
                <List iconName='inbox-multiple' color='#009900' content='Inbox' pageName='inbox' accessTo= {accessTo.bind(this)}/>
                <List iconName='phone-classic' color='#ff9933' content='Contact us' pageName='contact' accessTo= {accessTo.bind(this)}/>
                <List iconName='cogs' color='#660099' content='Settings' pageName='settings' accessTo= {accessTo.bind(this)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDDDDD',
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
    btnContainer: {
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        height: 150,
    },
    listContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    }
})
