import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUpComponent extends Component {
    constructor () {
        super()
        this.state = {
            step: 1
        }
        this.updateStep = this.updateStep.bind(this)
    }

    updateStep (step) {
        this.setState({step});
        console.log(step)
    }


    render(){
        return (
            this.state.step === 2 ? this.step2() : this.step1()
        )
    }

    step1(){
        return(
            <View style={styles.inputOuter}>
                <Input
                    placeholder='Phone Number'

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
                    <View style={styles.verificationInput}>
                        <Input

                            placeholder='Verification Code'
                            leftIcon={
                                <Icon
                                    name='pencil'
                                    size={24}
                                    color='black'
                                    style={{marginRight: 15}}
                                />
                            }
                        />
                    </View>
                    <Button
                            title="Send Code"
                            buttonStyle={{backgroundColor: '#23B2BE'}}
                    />
                </View>
                <Button style={styles.btn}
                        title="Next"
                        buttonStyle={{backgroundColor: '#23B2BE'}}
                        onPress={()=>this.updateStep(2)}
                />
            </View>
        )
    }

    step2() {
        return(
            <View style={styles.inputOuter}>
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
                <Input
                    placeholder='Confirm Password'
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
                        title="Sign Up"
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
    verificationBox:{
        flex:1,
        flexDirection: 'row',
        marginTop: 10
    },
    verificationInput:{
        flex: 1,
    },
    btn:{
        marginTop: 20
    }
});
