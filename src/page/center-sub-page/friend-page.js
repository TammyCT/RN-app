import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';



export default class FriendComponent extends Component {


    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/friends')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.friends,
                }, function(){
                        console.log(this.state.dataSource)
                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        return (
            <View>
                {
                    this.state.dataSource && this.state.dataSource.map((item)=>{
                        <Text>{item.name}</Text>

                    })
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({

})
