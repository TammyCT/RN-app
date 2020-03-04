import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class PromotionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch(
      'https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/promotionList',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.promotionList,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  _keyExtractor = id => id;

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    // return(
    //     <View style={{flex: 1, paddingTop:20}}>
    //         <FlatList
    //             data={this.state.dataSource}
    //             keyExtractor={this._keyExtractor}
    //             renderItem={({item}) =>
    //                 <Image style={styles.poster}
    //                        source={{uri: item}}
    //
    //                 />
    //
    //             }
    //         />
    //     </View>
    // );

    //for iphone mock

    return (
      <ScrollView style={{flex: 1, paddingTop: 20}}>
        <Image
          style={styles.poster}
          source={require('../../assets/promotion/promotion4.jpg')}
        />
        <Image
          style={styles.poster}
          source={require('../../assets/promotion/promotion1.png')}
        />
        <Image
          style={styles.poster}
          source={require('../../assets/promotion/promotion2.jpg')}
        />
        <Image
          style={styles.poster}
          source={require('../../assets/promotion/promotion3.jpg')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  poster: {
    height: 680,
    margin: 10,
    //for mock
    // width: 350

    width: 395,
  },
});
