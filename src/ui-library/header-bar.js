import React, { Component } from 'react';
import { Header } from 'react-native-elements'

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header
                containerStyle={{
                    backgroundColor: '#23B2BE',
                    justifyContent: 'space-around',
                }}
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}
