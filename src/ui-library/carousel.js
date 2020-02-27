
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class CarouselComponent extends Component {
    render(){
        return (
            <Swiper style={styles.wrapper} autoplay={true} >
                {
                    this.props.carouseData.map((item,index)=>{
                        return(
                            <Image style={styles.slide} key={index} source={{uri: item}}/>
                        )
                    })
                }
            </Swiper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        height: 250
    },
    slide: {
        height: 250
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
