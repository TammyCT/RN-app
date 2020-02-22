import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button, Icon, Image } from 'react-native-elements';

export default class PromotionComponent extends Component {

    render() {
        // let promotionList = this.getPromotionList();
        // console.log(promotionList)
            return (
            <View style={styles.container}>
                {/*{*/}
                {/*    promotionList.map((item,idx)=>{*/}
                {/*        return(*/}
                {/*            <View key={idx} >*/}
                {/*                <Image resizeMode='stretch' source={item} />*/}
                {/*            </View>*/}

                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </View>
        );
    }

    getPromotionList(){
        return fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/promotionList')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.promotionList;
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEFDB',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }

})
