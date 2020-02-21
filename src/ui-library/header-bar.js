import React, { Component } from 'react';
import { Header, Avatar } from 'react-native-elements';
import {
    View, Text
} from 'react-native'

export default class HeaderComponent extends Component {

    avatar() {
        return (
            <Avatar rounded title="MD" />
        );
    }

    render() {
        return (
            <Header
                placement="left"
                containerStyle={{
                    backgroundColor: '#23B2BE',
                    justifyContent: 'space-around',
                }}
                leftComponent= { this.avatar()}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}
