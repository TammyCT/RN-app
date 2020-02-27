import React, { Component } from 'react';
import {StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const REQUEST_URL = 'https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/user/login';
import {EasyLoading, Loading} from '../../ui-library/loading'

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            validUser: false
        };
    }

    render(){
        return(
            <View style={styles.inputOuter}>

                <Input
                    placeholder='Phone Number'
                    dataDetectorTypes='phoneNumber'
                    leftIcon={
                        <Icon
                            name='mobile-phone'
                            size={24}
                            color='black'
                            style={{marginRight: 15}}
                        />
                    }
                />
                <View    style={{marginTop: 10}}>
                    <Input

                        placeholder='Password'
                        secureTextEntry={true}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                                style={{marginRight: 10}}
                            />
                        }
                    />
                </View>

                <Button style={styles.btn}
                    title="Login"
                    buttonStyle={{backgroundColor: '#23B2BE'}}
                    onPress={()=>this.fetchData()}
                />
                <Loading/>
            </View>
        )
    }

    fetchData() {
        EasyLoading.show();
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    loaded: true,
                    validUser: true,
                }, function(){
                    EasyLoading.dismiss();
                    DeviceEventEmitter.emit('userInfo',responseData.userInfo)
                });
            });
    }


    test(){

    }
}

const styles = StyleSheet.create({
    inputOuter: {
        margin: 20
    },
    btn:{
        marginTop: 20
    }
});
