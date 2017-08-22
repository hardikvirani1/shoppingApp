import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight} from 'react-native';
import { Icon, } from "react-native-elements";
const {width, height} = Dimensions.get('window');
import font from '../helper/fontsize';

class Login extends Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View style={styles.mainView}>
                <View style={styles.iconView}>
                    <Icon name="add-shopping-cart" size={100} color="white" />
                    <Text>home</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        backgroundColor:'rgba(126,96,200,1)',
    },
    iconView: {
        height:height/3,
        justifyContent:'center'
    }
});


export default Login;