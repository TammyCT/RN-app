import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import List from '../ui-library/profile-list'

export default class MyProfileComponent extends Component {

    accessToLoginPage(){
        console.log('press')
        // Stack.navigate(LoginPage)
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.btnContainer}>
                    <Button
                        buttonStyle={{backgroundColor: '#23B2BE'}}
                        title="Login / Sign Up"
                        onPress={() => this.accessToLoginPage()}
                    />
                </View>
                <View style={styles.listContainer}>
                    <List iconName='account-multiple' color='#ffcc00' content='My Friends'/>
                    <List iconName='history' color='#3399ff' content='History'/>
                    <List iconName='ticket-confirmation' color='#cc3333' content='My Coupons'/>
                    <List iconName='inbox-multiple' color='#009900' content='Inbox'/>
                    <List iconName='phone-classic' color='#ff9933' content='Contact us'/>
                    <List iconName='cogs' color='#660099' content='Settings'/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDDDDD',
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: 1,
    },
    btnContainer: {
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        height: 150,
    },
    listContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    }
})


// // In App.js in a new project
//
// import React, { Component } from 'react';
// import {StyleSheet, View} from 'react-native';
// import { Button } from 'react-native-elements';
// import List from '../ui-library/profile-list'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// const Stack = createStackNavigator();
//
// function accessToLoginPage(navigation){
//     console.log(navigation)
//     navigation.navigate('Test Login')
// }
//
//
//
// function MyProfileComponent({navigation}) {
//     return (
//         <View style={styles.container}>
//
//             <View style={styles.btnContainer}>
//                 <Button
//                     buttonStyle={{backgroundColor: '#23B2BE'}}
//                     title="Login / Sign Up"
//                     onPress={() => accessToLoginPage(navigation)}
//                 />
//             </View>
//             <View style={styles.listContainer}>
//                 <List iconName='account-multiple' color='#ffcc00' content='My Friends'/>
//                 <List iconName='history' color='#3399ff' content='History'/>
//                 <List iconName='ticket-confirmation' color='#cc3333' content='My Coupons'/>
//                 <List iconName='inbox-multiple' color='#009900' content='Inbox'/>
//                 <List iconName='phone-classic' color='#ff9933' content='Contact us'/>
//                 <List iconName='cogs' color='#660099' content='Settings'/>
//             </View>
//         </View>
//     );
// }
//
// export default MyProfileComponent;
//
//
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#DDDDDD',
//         flexDirection: 'column',
//         alignItems: 'stretch',
//         flex: 1,
//     },
//     btnContainer: {
//         backgroundColor: '#ffffff',
//         justifyContent: "center",
//         alignItems: "center",
//         height: 150,
//     },
//     listContainer: {
//         backgroundColor: '#ffffff',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         marginTop: 20
//     }
// })
