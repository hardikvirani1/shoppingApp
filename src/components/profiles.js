import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image} from 'react-native';
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

                <View>
                    <View style={{flexDirection:'row', }}>
                        <Icon name="arrow-back" size={25} color="black" onPress={() => this.props.navigation.navigate('homeview')} />
                        <Text style={[font.TITLE_FONT, {color:'black', marginLeft:10}]}>Account</Text>
                    </View>
                    <View>
                        <Image source={require('../../images/bulb.jpeg')} style={{width, height:height/3, }} />
                    </View>
                </View>

                <View style={{alignItems:'center', marginTop:-width/7}}>
                    <Image source={require('../../images/bulb.jpeg')}
                           style={{width:width/3.5, height:width/3.5, borderRadius:width/7 }} />
                </View>

                <View style={{alignItems:'center', margin:10, backgroundColor:'#fff'}}>
                    <Text style={[font.MEDIUM_FONT, {color:'black',}]}>John Doe</Text>
                    <Text style={[font.MEDIUM_FONT, {color:'black',}]}>doe@sahusoft.com</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    },
});


export default Profiles;