import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProfileListComponent extends Component {
    render(){
        return(
            <View style={styles.list}>
                <TouchableOpacity style={styles.listContainer} onPress={()=>this.props.accessTo(this.props.pageName)}>
                    <View style={styles.listContent}>
                        <MIcon name={this.props.iconName} size={30} color={this.props.color}/>
                        <Text style={styles.listText}>
                            {this.props.content}
                        </Text>
                    </View>
                    <MIcon name={'chevron-right'} size={30} color={'#DDDDDD'}/>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    list: {
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#DDDDDD',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listContainer:{
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
