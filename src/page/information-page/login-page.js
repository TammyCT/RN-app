import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginComponent extends Component {
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
                <Button style={styles.btn}
                    title="Login"
                    buttonStyle={{backgroundColor: '#23B2BE'}}
                />
            </View>
        )
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
