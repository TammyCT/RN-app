import React, { Component } from 'react';
import {Text, View, DeviceEventEmitter, ActivityIndicator, StyleSheet} from 'react-native';
import {Button, Avatar, Image} from 'react-native-elements';


export default class ProfileUserInfoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: null
        }
        this.getUserData = this.getUserData.bind(this)

    }

    componentDidMount(){
        this.subscription = DeviceEventEmitter.addListener('userInfo',(e)=>{
           this.getUserData(e)
        })
    };

    render() {
        if(!this.state.userInfo){
            return this.buttonView()
        }else{
            return this.infoView()
        }
    }

    buttonView(){
      return(
          <View style={styles.btnContainer}>
              <Button
                  buttonStyle={{backgroundColor: '#23B2BE'}}
                  title="Login / Sign Up"
                  onPress={() => this.accessToLoginPage(this.props.navigation)}
              />
          </View>
      )
    }

    infoView(){
        return(
            <View style={styles.infoContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            // source={{ uri: this.state.userInfo.avatar }}
                            source={require('../../../assets/avatar.jpeg')}
                            style={{ width: 100, height: 100 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>



                    <Text>{this.state.userInfo.userName}</Text>


            </View>
        )
    }

    getUserData(info){
        this.setState({
            userInfo: info
        })
    }

    accessToLoginPage(navigation){
        console.log(navigation)
        navigation.navigate('Login / Sign Up')
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        height: 150,
    },
    infoContainer:{
        // flex: 1,
        flexDirection: 'row',
        // justifyContent:'flex-start',
        // alignItems: "center",
        // backgroundColor: 'blue',
        // // backgroundColor: '#ffffff',
        // height: 150,
        backgroundColor: '#ffffff',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 150,

    },
    imageContainer:{
        backgroundColor: 'red',
        // flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 50
        // justifyContent:'flex-start',
    },
    textContainer:{
        // flex:4,
        flexDirection: 'column',
        alignItems: 'center'
    }
})

