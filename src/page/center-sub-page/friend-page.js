import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import  {Avatar} from 'react-native-elements';
import {EasyLoading, Loading} from '../../ui-library/loading'

export default class FriendComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true};
        EasyLoading.show();
    }

        componentWillMount(){
        return fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/friends')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.friends,
                }, function(){
                        EasyLoading.dismiss()
                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    _keyExtractor = (item, index) => index;


    render(){
        return(
            <View style={styles.friendContainer}>
                <FlatList style={styles.flatListContainer}
                    data={this.state.dataSource}
                          keyExtractor={this._keyExtractor}
                          renderItem={({item}) =>
                                <View style={styles.dataList}>
                                    <Avatar
                                        rounded
                                        source={{uri:item.avatar,}}
                                    />
                                    <Text style={styles.friendText}>{item.name}</Text>
                                </View>}
                />
                <Loading/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    friendContainer:{
        flex: 1,

    },

    flatListContainer : {
        // margin: 20,
        // backgroundColor: 'red'
    },
    dataList:{
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#DDDDDD',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    friendText:{
        marginLeft:10
    }
});
