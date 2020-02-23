import React, { Component } from 'react';
import { Header, Avatar, Icon } from 'react-native-elements';

export default class HeaderComponent extends Component {

    avatar() {
        return (
            <Avatar
                rounded
                title="MD"
            />
        );
    }

    render() {
        // console.log(this.getAvatar())
        return (
            <Header
                containerStyle={{
                    backgroundColor: '#23B2BE',
                    justifyContent: 'space-around',
                }}
                leftComponent= { this.avatar()}
                centerComponent={{ text: 'MY FOOD MART', style: { color: '#fff' , fontWeight:'bold', fontSize: 20} }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }

    getAvatar(){
        return fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/avatar')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.avatar;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
