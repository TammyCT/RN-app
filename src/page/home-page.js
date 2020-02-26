import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image, Avatar } from 'react-native-elements';

// export default class HomeComponent extends Component {

export default function HomeScreen({navigation}) {
        return (
            <ScrollView>
                <Image
                    source={{ uri: '/Users/huangchuting/Desktop/projects/RN project/MyApp/assets/home-food.jpeg' }}
                    style={styles.homeImage}
                />
                <Text style={styles.imgText}>XXXXX XXXXX XXXXX</Text>
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
