import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import { Icon, } from "react-native-elements";
import font from '../helper/fontsize';
import Header from '../helper/header';
const {width, height} = Dimensions.get('window');

class Profiles extends Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View style={styles.mainView}>

                <View style={{height:height/3}}>
                    <View>
                        <Image source={require('../../images/bulb.jpeg')} style={{width, height:height/3, }} />
                    </View>
                    <View style={{flexDirection:'row', marginTop:-height/3+17, backgroundColor:'transparent',}}>
                        <Icon name="arrow-back" size={25} style={{marginLeft:10}} color="white" onPress={() => this.props.navigation.navigate('homeview')} />
                        <Text style={[font.TITLE_FONT, {color:'white', marginLeft:10}]}>Account</Text>
                    </View>
                </View>

                <View style={{backgroundColor:'#fff'}}>
                    <View style={{alignItems:'center', marginTop:-width/7, }}>
                        <Image source={require('../../images/avatar.jpeg')}
                               style={{width:width/3.5, height:width/3.5, borderRadius:width/7 }} />
                    </View>
                </View>

                <View style={{alignItems:'center',padding:15, backgroundColor:'#fff', }}>
                    <Text style={[font.MEDIUM_FONT, {color:'black',}]}>John Doe</Text>
                    <Text style={[font.MEDIUM_FONT, {color:'black',}]}>doe@sahusoft.com</Text>
                </View>

                <ScrollView>
                    <View style={styles.dataView}>
                        <Text style={[font.MEDIUM_FONT, {color:'black',}]}>My Orders</Text>
                    </View>

                    <View style={[styles.dataView, {margin:0, marginRight:7, marginLeft:7}]}>
                        <Text style={[font.MEDIUM_FONT, {color:'black',}]}>My Returns</Text>
                    </View>

                    <View style={styles.dataView}>
                        <Text style={[font.MEDIUM_FONT, {color:'black',}]}>My Wallet</Text>
                    </View>

                    <View style={styles.dataView}>
                        <Text style={[font.MEDIUM_FONT, {color:'black',}]}>Saved Address</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    },
    dataView: {
        padding:20,
        margin:7,
        backgroundColor:'#fff'
    }
});


export default Profiles;