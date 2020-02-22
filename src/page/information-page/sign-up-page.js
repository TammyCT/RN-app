import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SignUpComponent extends Component {
    render(){
        return  this.step1();

    }

    step1(){
        return(
            <View style={styles.inputOuter}>
                <Input
                    placeholder='Input Phone Number'
                    leftIcon={
                        <Icon
                            name='mobile-phone'
                            size={24}
                            color='black'
                            style={{marginRight: 15}}
                        />
                    }
                />
                <View style={styles.verificationBox}>
                    <Input
                        style={styles.verificationInput}
                        placeholder='Input Verification Code'
                        leftIcon={
                            <Icon
                                name='mobile-phone'
                                size={24}
                                color='black'
                                style={{marginRight: 15}}
                            />
                        }
                    />
                    <Button style={styles.btn}
                            title="Send Verification Code"
                            buttonStyle={{backgroundColor: '#23B2BE'}}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputOuter: {
        margin: 20
    },
    verificationBox:{
        // flex:1,
        // flexDirection: 'row'
    },
    verificationInput:{
        // flex: 4,
        // width: 10
    },
    btn:{
        // marginTop: 20,
        // flex: 2
    }
});
