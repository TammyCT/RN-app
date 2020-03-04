import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Component} from 'react';

const MyStack = createStackNavigator();

export default class ScreenListComponent extends Component {
  render() {
    return (
      <MyStack.Navigator>
        {this.props.screenList &&
          this.props.screenList.map((item, index) => (
            <MyStack.Screen
              options={{
                title: item.title,
                headerStyle: {
                  backgroundColor: '#23B2BE',
                },
                headerTintColor: '#fff',
              }}
              key="index"
              name={item.name}
              component={item.component}
            />
          ))}
      </MyStack.Navigator>
    );
  }
}
