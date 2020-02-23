import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProfileListComponent extends Component {
    render(){
        return(
            <View style={styles.list}>
                <View style={styles.listContent}>
                    <MIcon name={this.props.iconName} size={30} color={this.props.color}/>
                    <Text style={styles.listText}>
                        {this.props.content}
                    </Text>
                </View>
                <MIcon name={'chevron-right'} size={30} color={'#DDDDDD'}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    list: {
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#DDDDDD',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listContent:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listText: {
        marginLeft: 10
    },
})
