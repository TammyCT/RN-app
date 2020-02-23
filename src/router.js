import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './page/home-page';
import MyProfilePage from './page/my-profile-page';
import PromotionPage from './page/promotion-page';
import GamePage from './page/game-page';
import LoginPage from './page/login-signUp-page'


const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                options={{
                    title: 'FOOD MART',
                    headerStyle: {
                        backgroundColor: '#23B2BE',
                    },
                    headerTintColor: '#fff',
                }}
             name="Food Mart" component={HomePage} />
        </HomeStack.Navigator>
    );
}

const PromotionStack = createStackNavigator();
function PromotionStackScreen() {
    return (
        <PromotionStack.Navigator>
            <PromotionStack.Screen
                options={{
                    title: 'Promotion',
                    headerStyle: {
                        backgroundColor: '#23B2BE',
                    },
                    headerTintColor: '#fff',
                }}
                name="Promotion" component={PromotionPage} />
        </PromotionStack.Navigator>
    );
}

const GameStack = createStackNavigator();
function GameStackScreen() {
    return (
        <GameStack.Navigator>
            <GameStack.Screen
                options={{
                    title: 'Game',
                    headerStyle: {
                        backgroundColor: '#23B2BE',
                    },
                    headerTintColor: '#fff',
                }}
                name="Game" component={GamePage} />
        </GameStack.Navigator>
    );
}

const MyProfileStack = createStackNavigator();
function MyProfileStackScreen() {
    return (
        <MyProfileStack.Navigator>
            <MyProfileStack.Screen
                options={{
                    title: 'My Center',
                    headerStyle: {
                        backgroundColor: '#23B2BE',
                    },
                    headerTintColor: '#fff',
                }}
                name="My Center" component={MyProfilePage} />
            <MyProfileStack.Screen
                options={{
                    title: 'Login / Sign Up',
                    headerStyle: {
                        backgroundColor: '#23B2BE',
                    },
                    headerTintColor: '#fff',
                }}
                name="Login / Sign Up" component={LoginPage} />
        </MyProfileStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen}  />
                <Tab.Screen name="Promotion" component={PromotionStackScreen} />
                <Tab.Screen name="Game" component={GameStackScreen} />
                <Tab.Screen name="My Center" component={MyProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

