import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Component} from 'react';
import {Text} from 'react-native'

const MyStack = createStackNavigator();

export default class ProfileListComponent extends Component {

    render(){
        return (
            <MyStack.Navigator>
                {  this.props.screenList && this.props.screenList.map((item,index) => (
                    <MyStack.Screen
                        options={{
                            title: item.title,
                            headerStyle: {
                                backgroundColor: '#23B2BE',
                            },
                            headerTintColor: '#fff',
                        }}
                        name={item.name} component={item.component} />

                ))}
            </MyStack.Navigator>
        );
    }


}
