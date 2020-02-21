import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class MyProfileComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button
                        buttonStyle={{backgroundColor: '#23B2BE'}}
                        title="Login / Sign Up"
                    />
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.list}>
                        <Text>
                            My Friend
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text>
                            History
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text>
                            My coupons
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text>
                            Inbox
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text>
                            Contact us
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text>
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
        justifyContent: 'center',
        padding: 5
    }
})
