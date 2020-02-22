import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import LoginPage from './login-signUp-page'

const Stack = createStackNavigator();

export default class MyProfileComponent extends Component {

    accessToLoginPage(){
        console.log('press')
        // Stack.navigate(LoginPage)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button
                        buttonStyle={{backgroundColor: '#23B2BE'}}
                        title="Login / Sign Up"
                        onPress={() => this.accessToLoginPage()}
                    />
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.list}>
                        <MIcon name={'account-multiple'} size={30} color={'#ffcc00'}/>
                        <Text style={styles.listText}>
                            My Friend
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <MIcon name={'history'} size={30} color={'#3399ff'}/>
                        <Text style={styles.listText}>
                            History
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <MIcon name={'ticket-confirmation'} size={30} color={'#cc3333'}/>
                        <Text style={styles.listText}>
                            My coupons
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <MIcon name={'inbox-multiple'} size={30} color={'#009900'}/>
                        <Text style={styles.listText}>
                            Inbox
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <MIcon name={'phone-classic'} size={30} color={'#ff9933'}/>
                        <Text style={styles.listText}>
                            Contact us
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <MIcon name={'cogs'} size={30} color={'#660099'}/>
                        <Text style={styles.listText}>
                            Setting
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDDDDD',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1,
    },
    btnContainer: {
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        // alignSelf: 'flex-start'
    },
    listContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    },
    list: {
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#DDDDDD',
        // justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listText: {
        marginLeft: 10
    }
})
