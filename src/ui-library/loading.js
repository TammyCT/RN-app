// import React from 'react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';

let lo;
const defaultTimeOut = -1;//设置显示时间标识
// let PropTypes = require('prop-types'); // ES5 with npm

export class EasyLoading {

    /**
     * 显示Loading
     * @param text  Loading显示文本，默认为'加载中'
     * @param timeout Loading显示时间，为-1时会一只显示，需要手动关闭
     */
    static show(text = 'Loading...', timeout = defaultTimeOut) {
        console.log(timeout);
        lo.setState({"isShow": true, "text": text, "timeout": timeout});
    }

    /**
     * 关闭Loading
     */
    static dismiss() {
        lo.setState({"isShow": false});
    }
}

export class Loading extends Component {

    static propTypes = {
        color: PropTypes.string,
        textStyle: PropTypes.any,
        loadingStyle: PropTypes.any,
    };

    constructor(props) {
        super(props);
        this.handle = 0;
        this.state = {
            isShow: false,
            timeout: defaultTimeOut,
            text: "Loading..."
        };
        lo = this;
    }

    componentWillUnmount() {
        clearTimeout(this.handle);
    }

    render() {
        clearTimeout(this.handle);

        (this.state.timeout !== defaultTimeOut) && (this.handle = setTimeout(() => {
            EasyLoading.dismiss();
        }, this.state.timeout));

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.isShow}
                onRequestClose={() => {
                    alert("Modal has been closed.")
                }}>
                <View style={styles.container}>
                    <View style={[styles.load_box, this.props.loadingStyle]}>
                        <ActivityIndicator animating={true} color={this.props.color || '#23B2BE'} size={'large'}
                                           style={styles.load_progress}/>
                        <Text style={[styles.load_text, this.props.textStyle]}>{this.state.text}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    load_box: {
        width: 100,
        height: 100,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    load_progress: {
        width: 50,
        height: 50
    },
    //默认字体颜色
    load_text: {
        color: '#23B2BE',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(178,178,178,0.8)',
    },
});
