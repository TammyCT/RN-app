import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, View, Text, StatusBar, SafeAreaView, RefreshControl} from 'react-native';
import createClass from '@babel/runtime/helpers/esm/createClass';
import App from './App';



export default class TestScrollView extends Component {
    _onScrollBeginDrag(){
        console.log('开始拖拽')
    };
    _onScrollEndDrag(){
        console.log('结束拖拽');
    };
    _onMomentumScrollBegin(){
        console.log('开始滑动');
    };
    _onMomentumScrollEnd() {
        console.log('结束拖拽');
    }
    _onRefresh(){
        console.log('refresh')
    }
    render(){
        return (
            <View style={styles.container} >
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={true}
                    onScrollBeginDrag={this._onScrollBeginDrag()}
                    onScrollEndDrag={this._onScrollEndDrag()}
                    onMomentumScrollBegin={this._onMomentumScrollBegin()}
                    onMomentumScrollEnd={this._onMomentumScrollEnd()}
                    refreshControl={
                        <RefreshControl refreshing={false}
                                        tintColor='pink'
                                        title='refreshing'
                                        onRefresh={this._onRefresh()}
                        />} >
                    <View style={styles.view_1}/>
                    <View style={styles.view_2}/>
                    <View style={styles.view_3}/>
                </ScrollView>
            </View>
        )
    }
}


var styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'red',
        marginBottom: 10
  },
  scrollView: {
        marginTop: 25,
        backgroundColor: '#CCCCCC',
  },
  view_1: {
      margin: 15,
      flex: 1,
      height: 300,
      backgroundColor: "green",
  },
    view_2: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: "blue",
    },
    view_3: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: "pink",
    }
});
