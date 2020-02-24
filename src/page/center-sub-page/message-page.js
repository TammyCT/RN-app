import React, { Component } from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import Textarea from 'react-native-textarea';
import PropTypes from 'prop-types'
import {EasyLoading, Loading} from '../../ui-library/loading';

export default class MessageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: PropTypes.string,
            loaded: false
        };
    }
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.inputArea}>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={text =>
                            this.setState({
                                message: text
                            })}
                        // defaultValue={this.state.text}
                        maxLength={120}
                        placeholder={'Please input your message.'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>

                <Button
                    title="Report"
                    buttonStyle={{backgroundColor: '#23B2BE'}}
                    onPress={()=>this.send()}
                />
                <Loading/>
            </ScrollView>
        );
    }

    send() {
        EasyLoading.show();

        // console.log(this.state.message)
        fetch("https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/sendMessage")
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                console.log(responseData);
                this.setState({
                    loaded: true
                }, function(){
                    EasyLoading.dismiss();
                });
            });
    }

}




const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputArea:{
        marginBottom: 20
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',

    },
});
