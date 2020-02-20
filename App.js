import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './src/page/home-page';
import MyProfilePage from './src/page/my-profile-page';
import PromotionPage from './src/page/promotion-page';
import GamePage from './src/page/game-page'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Promotion" component={PromotionPage} />
                <Tab.Screen name="Game" component={GamePage} />
                <Tab.Screen name="My Profile" component={MyProfilePage} />


            </Tab.Navigator>
        </NavigationContainer>
    );
}
