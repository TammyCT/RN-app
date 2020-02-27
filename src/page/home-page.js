import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Avatar } from 'react-native-elements';
import Carousel from '../ui-library/carousel'

// export default class HomeComponent extends Component {

let carouseData = [];

async function getCarouselData() {
    await fetch('https://www.fastmock.site/mock/1adff00ec21770e22911e12780c3f45a/foodMart/home/getCarousel')
        .then((response) => response.json())
        .then((responseJson) => {
            carouseData = responseJson.data;
        })
        .catch((error) => {
            console.error(error);
        });
}

function setHomeScreen(navigation,carouseData){
    console.log(carouseData)
    return (
        <ScrollView>
            <Image
                source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/carousel/c1.jpeg' }}
                style={styles.homeImage}
            />
            {/*<View style={styles.homeImage}>*/}
            {/*    /!*<Carousel carouseData={carouseData} />*!/*/}
            {/*</View>*/}
            {/*<Text style={styles.imgText}>XXXXX XXXXX XXXXX</Text>*/}
            <View style={styles.optionBox}>
                <View style={styles.child}>
                    <Avatar
                        size= "large"
                        source={{uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/location.png'}}
                        rounded
                        onPress={() => navigation.navigate('store')}
                        activeOpacity={0.7}
                    />
                    <Text style={styles.childItem}>Store List</Text>
                </View>
                <View style={styles.child}>
                    <Avatar
                        size= "large"
                        source={{uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/food.png'}}
                        rounded
                        onPress={() => navigation.navigate('product')}
                        activeOpacity={0.7}
                    />
                    <Text style={styles.childItem}>Product</Text>
                </View>
                <View style={styles.child}>
                    <Avatar
                        size= "large"
                        source={{uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/news.jpg'}}
                        rounded
                        onPress={() => navigation.navigate('news')}
                        activeOpacity={0.7}
                    />
                    <Text style={styles.childItem}>News</Text>
                </View>
                <View style={styles.child}>
                    <Avatar
                        size= "large"
                        source={{uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/group.jpeg'}}
                        rounded
                        onPress={() => navigation.navigate('group')}
                        activeOpacity={0.7}
                    />
                    <Text style={styles.childItem}>Group</Text>
                </View>
            </View>
            <Image
                source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/food1.jpeg' }}
                style={styles.homeImage}
            />
            <Image
                source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-page/food2.jpeg' }}
                style={styles.homeImage}
            />
        </ScrollView>

    );
}

export default function HomeScreen({navigation}) {
    // return  getCarouselData().then((data)=>{
            // console.log(data)
        // console.log(carouseData)
           return  setHomeScreen(navigation,carouseData);

        // }

    // )



    }

function  accessTo(ev){
        console.log(ev);
    }


// }


const styles = StyleSheet.create({
    homeImage:{
        height: 250
    },
    imgText:{
        textAlign: 'center',
        fontSize: 30
    },
    optionBox: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        height: 100

    },
    child:{
        width: 76,
        height: 100,
        // backgroundColor: '#440099'
    },
    childItem: {
        textAlign: 'center'
    }


});
