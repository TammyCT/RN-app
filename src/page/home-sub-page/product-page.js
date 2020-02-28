import React, { Component } from 'react';
import {Text, View, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LazyLoadingBar from '../../ui-library/lazy-loading-bar';

var pic1 = require('../../../assets/product/ArgentinePrawn.jpeg')


export default class ProductComponent extends Component {
    constructor () {
        super()
        this.state = {
            refreshing: false,
            isLoading: true,
            currentPage: 0,
            reachBottom: false,
            list: []
        }

        this._contentViewScroll = this._contentViewScroll.bind(this)
    }

    componentDidMount(){
        this.getData().then(()=>{
            this.setNewData();
            // console.log(this.state.currentPage)
        })
    }

    setNewData(){
        // console.log('now:'+this.state.currentPage)
        if(this.state.reachBottom){
            return;
        }
        let itemList = this.state.list ? this.state.list : [];

        itemList.push(
            this.showImage(this.state.currentPage)
        )

        this.setState({
                isLoading: false,
                list: itemList
            }
        )
    }

    async getData() {
        await fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/productList')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.data,
                    reachBottom: this.state.currentPage === responseJson.data.length - 1
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            < ScrollView
                style={{flex:1}}
                onRefresh = {this._onRefreshData}
                onMomentumScrollEnd = {this._contentViewScroll}
                refreshing={this.state.refreshing}
                automaticallyAdjustContentInsets={false}
                showsVerticalScrollIndicator={false}
                scrollsToTop={true}>
                {
                     this.state.list.map((item,index)=>{
                        return item;
                    })
                }
                <LazyLoadingBar reachBottom={this.state.reachBottom}/>
            </ScrollView >
        );
    }

    showImage(loadPageNumber){
        return(
            this.state.dataSource[loadPageNumber].map((item,index)=>{
                return(
                    <TouchableOpacity style={styles.itemContainer} key={index}>
                        <Image
                            source={{ uri: item.pic }}
                            style={{ width: 200, height: 200 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <View style={styles.itemDetail}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <View style={styles.itemDetailBtn}>
                                <Text style={styles.itemDetailText}>More Details</Text>
                                <MIcon name={'chevron-right'} size={30} color={'#23B2BE'}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                )
            })
        )
    }



    _onRefreshData(){
        // console.log('refresh')
    }

    _contentViewScroll(e: Object){
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        let contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        let originScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        let _currentPage = this.state.currentPage;
        if (offsetY + originScrollHeight >= contentSizeHeight){
            // console.log('上传滑动到底部事件');
            if(this.state.currentPage < this.state.dataSource.length-1){
                this.setState({
                    currentPage : _currentPage+1
                })
                setTimeout(()=>{
                    this.setNewData()
                },0)
            }else{
                this.setState({
                    reachBottom : true
                })
            }
        }
    }

}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        margin: 5
    },
    itemDetail:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    },
    itemText: {
        fontSize: 22
    },
    itemDetailText:{
        marginBottom: 10,
        color: '#23B2BE'
    },
    itemDetailBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});




