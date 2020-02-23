import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Login from './information-page/login-page';
import SignUp from './information-page/sign-up-page'

export default class LoginSignUpComponent extends Component {
    constructor () {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
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
                    source={require('../../assets/login/pic.jpg')}
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
