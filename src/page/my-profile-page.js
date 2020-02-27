import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight, Text, DeviceEventEmitter} from 'react-native';
import { Button } from 'react-native-elements';
import List from '../ui-library/profile-list';
import UserInfo from './information-page/profile-user-info'

let nav;
let userInfo;


function accessTo(pageName) {
    nav.navigate(pageName)
}

function getUserInfo() {
    DeviceEventEmitter.addListener('userInfo',(e)=>{
        if(e){
            userInfo = e;
            nav.navigate('center')
        }
    });
};


export default function ProfileCenterScreen({navigation}) {
    nav = navigation;
    getUserInfo();

    return (
        <View style={styles.container}>

            <View>

                <UserInfo navigation={navigation}/>
            </View>
            <View style={styles.listContainer}>
                <List key="1" iconName='account-multiple' color='#ffcc00' content='My Friends' pageName='friend' accessTo= {accessTo.bind(this)}/>
                <List key="2" iconName='history' color='#3399ff' content='History' pageName='history' accessTo= {accessTo.bind(this)}/>
                <List key="3" iconName='ticket-confirmation' color='#cc3333' content='My Coupons' pageName='coupons' accessTo= {accessTo.bind(this)}/>
                <List key="4" iconName='inbox-multiple' color='#009900' content='Inbox' pageName='inbox' accessTo= {accessTo.bind(this)}/>
                <List key="5" iconName='phone-classic' color='#ff9933' content='Contact us' pageName='contact' accessTo= {accessTo.bind(this)}/>
                <List key="6" iconName='cogs' color='#660099' content='Settings' pageName='settings' accessTo= {accessTo.bind(this)}/>
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

    listContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    }
});
