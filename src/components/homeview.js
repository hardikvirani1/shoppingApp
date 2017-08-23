import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, ScrollView, Image} from 'react-native';
import { Icon, } from "react-native-elements";
const {width, height} = Dimensions.get('window');
import font from '../helper/fontsize';
import Header from '../helper/header';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Col, Row, Grid } from "react-native-easy-grid";

class Login extends Component{
    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Strap'} navigation={this.props.navigation.navigate} />

                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <View>
                            <Icon name="search" color="rgba(126,96,200,1)" size={25} />
                        </View>
                        <View>
                            <TextInput style={[styles.inputText, font.TEXTBOX_FONT]} placeholder="Find your deal" placeholderTextColor="rgba(126,96,200,1)"/>
                        </View>
                    </View>
                </View>

                <ScrollableTabView renderTabBar={()=><DefaultTabBar  />}>
                    <ScrollView tabLabel='Home'>
                        <Grid>
                            <Row>
                                <Image source={require('../../images/sales.png')} style={{width, height:height/3}}/>
                            </Row>
                            <Row>
                                <Image source={require('../../images/shirt.png')} style={{width, height:height/5}}/>
                            </Row>
                            <Row>
                                <Image source={require('../../images/material.png')} style={{width:width/2, height:width/2}}/>
                                <Image source={require('../../images/material1.png')} style={{width:width/2, height:width/2}}/>
                            </Row>
                            <Row>
                                <Image source={require('../../images/sales.png')} style={{width, height:height/3}}/>
                            </Row>
                            <Row>
                                <Image source={require('../../images/material1.png')} style={{width:width/2, height:width/2}}/>
                                <Image source={require('../../images/shirt.png')} style={{width:width/2, height:width/2}}/>
                            </Row>
                        </Grid>
                    </ScrollView>

                    <ScrollView tabLabel='Offers' style={{backgroundColor:'#fff'}}>
                        <View>
                            <Image source={require('../../images/no-offers.png')} style={{width, height:height/2}}/>
                            <Text style={[font.TITLE_FONT, {color:'rgba(126,96,200,1)', alignSelf:'center', margin:10}]}>No offers...</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>


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
        width:width-30,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    inputText: {
        marginLeft:5,
        height:30,
        width:width-100,
        color:'rgba(126,96,200,1)'
    }
});


export default Login;