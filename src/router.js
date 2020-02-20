import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ThemeProvider } from 'react-native-elements';

import HomePage from './page/home-page';
import MyProfilePage from './page/my-profile-page';
import PromotionPage from './page/promotion-page';
import GamePage from './page/game-page';

import HeaderBar from './ui-library/header-bar'

const Tab = createBottomTabNavigator();

import React, { Component } from 'react';

export default class RouterComponent extends Component {
    render() {
        return (
            <ThemeProvider>
                <HeaderBar/>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomePage} />
                        <Tab.Screen name="Promotion" component={PromotionPage} />
                        <Tab.Screen name="Game" component={GamePage} />
                        <Tab.Screen name="My Profile" component={MyProfilePage} />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        );
    }
}

