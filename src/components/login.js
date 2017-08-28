import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight} from 'react-native';
import { Icon, } from "react-native-elements";
import font from '../helper/fontsize';
const {width, height} = Dimensions.get('window');

class Login extends Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View style={styles.mainView}>
                <View style={styles.iconView}>
                    <Icon name="add-shopping-cart" size={height/5} color="white" />
                </View>

                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <View>
                            <Icon name="account-circle" color="white" size={25} />
                        </View>
                        <View>
                            <TextInput style={[styles.inputText, font.TEXTBOX_FONT]} placeholder="Email" placeholderTextColor="white"/>
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <View>
                            <Icon name="lock-open" color="white" size={25} />
                        </View>
                        <View>
                            <TextInput style={[styles.inputText, font.TEXTBOX_FONT]} secureTextEntry={true} placeholder="Password" placeholderTextColor="white"/>
                        </View>
                    </View>

                </View>

                <View style={{flexDirection:'row',justifyContent:'flex-end', marginRight:35}}>
                    <View >
                        <Text style={[font.MEDIUM_FONT,{color:'white'}]}>Forgot Login details?</Text>
                    </View>
                </View>

                <View style={{alignSelf:'center',  width:width/3, margin:10}}>
                    <View>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('productlistsort')}} underlayColor='transparent'
                                             style={{borderRadius:6,alignItems:'center',
                            padding:10, backgroundColor:'rgba(72,50,130,1)'}}>
                            <Text style={[font.MEDIUM_FONT, {color:'white'}]}>Login</Text>
                        </TouchableHighlight>
                    </View>
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
    },
    formView: {
        justifyContent:'center',
        alignItems:'center'
    },
    inputView: {
        flexDirection:'row',
        margin:10,
        width:width-50,
        borderBottomColor:'white',
        borderBottomWidth:1,
    },
    inputText: {
        marginLeft:5,
        height:30,
        color:'white',
        width:width-100
    }
});


export default Login;