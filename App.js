import React, { Component } from 'react';
import Router from './src/router';

export default class MyApp extends Component {
    render() {
        return (
            <Router/>
        );
    }
}


// In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }
//
// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }
//
// const Stack = createStackNavigator();
//
// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Details" component={DetailsScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
//
// export default App;
