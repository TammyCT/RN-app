import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Login from '../information-page/login-page';
import SignUp from '../information-page/sign-up-page'
import PropTypes from 'prop-types';


export default class LoginSignUpComponent extends Component {
    constructor () {
        super()
        this.state = {
            selectedIndex: 0,
            userName: PropTypes.string,
            avatar: PropTypes.string,
            status: false
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    getUserInfo(val){
        this.setState({
            userName: val.userName,
            avatar: val.avatar
        });
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        console.log(this.state.selectedIndex)
    }

    render () {
        const buttons = ['Login','Sign Up']
        const { selectedIndex } = this.state
        return (
            <ScrollView>

                <Image
                    source={require('../../../assets/login/pic.jpg')}
                    style={styles.loginImage}
                />

                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}

                />
                {
                    this.state.selectedIndex === 0 ? <Login/> : <SignUp/>
                }

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    loginImage:{
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
    },
    inputOuter: {
        margin: 20
    },
});
