import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './page/home-page';
import MyProfilePage from './page/my-profile-page';
import PromotionPage from './page/promotion-page';
import GamePage from './page/game-page';
import LoginPage from './page/center-sub-page/login-signUp-page';
import FriendPage from './page/center-sub-page/friend-page';
import HistoryPage from './page/center-sub-page/history-page';
import CouponsPage from './page/center-sub-page/coupons-page';
import ContactPage from './page/center-sub-page/message-page';
import InboxPage from './page/center-sub-page/inbox-page';
import SettingPage from './page/center-sub-page/settings-page';
import GroupPage from './page/home-sub-page/group-page';
import NewsPage from './page/home-sub-page/news-page';
import ProductPage from './page/home-sub-page/product-page';
import StoreListPage from './page/home-sub-page/store-list-page';

import StackScreen from './ui-library/stack-screen'

const PAGE_INFO = {
    homeInfo: [
        {
            title: 'FOOD MART',
            name: 'home',
            component: HomePage
        },
        {
            title: 'My Group',
            name: 'group',
            component: GroupPage
        },
        {
            title: 'News',
            name: 'news',
            component: NewsPage
        },
        {
            title: 'Product',
            name: 'product',
            component: ProductPage
        },
        {
            title: 'Store List',
            name: 'store',
            component: StoreListPage
        }
    ],
    promotionInfo: [
        {
            title: 'Promotion',
            name: 'Promotion',
            component: PromotionPage
        }
    ],
    gameInfo: [
        {
            title: 'Game',
            name: 'Game',
            component: GamePage
        }
    ],
    centerInfo: [
        {
            title: 'My Center',
            name: 'center',
            component: MyProfilePage
        },
        {
            title: 'Login / Sign Up',
            name: 'Login / Sign Up',
            component: LoginPage
        },
        {
            title: 'My Friend',
            name: 'friend',
            component: FriendPage
        },
        {
            title: 'History',
            name: 'history',
            component: HistoryPage
        },
        {
            title: 'Contact Us',
            name: 'contact',
            component: ContactPage
        },
        {
            title: 'Coupons',
            name: 'coupons',
            component: CouponsPage
        },
        {
            title: 'Inbox',
            name: 'inbox',
            component: InboxPage
        },
        {
            title: 'Settings',
            name: 'settings',
            component: SettingPage
        },
    ]
}

function HomeStackScreen() {
    return (
    <StackScreen screenList={PAGE_INFO.homeInfo}/>
    );
}
function PromotionStackScreen() {
    return (
        <StackScreen screenList={PAGE_INFO.promotionInfo}/>
    );
}
function GameStackScreen() {
    return (
        <StackScreen screenList={PAGE_INFO.gameInfo}/>
    );
}

function MyProfileStackScreen() {
    return (
        <StackScreen screenList={PAGE_INFO.centerInfo}/>
    );
}

const Tab = createBottomTabNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Promotion" component={PromotionStackScreen} />
                <Tab.Screen name="Game" component={GameStackScreen} />
                <Tab.Screen name="My Center" component={MyProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

