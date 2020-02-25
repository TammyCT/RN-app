import React from 'react';
import {FlatList, ActivityIndicator, Text, View, Image, StyleSheet} from 'react-native';

export default class PromotionScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/promotionList')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.promotionList,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    _keyExtractor = (id) => id;


    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) =>
                        <Image style={styles.poster} source={{uri: item}}

                        />

                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    poster:{
        height: 680,
        margin: 10
    }
});
