import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import font from './fontsize';
import { Icon, Button } from "react-native-elements";

const Header = (props) => {
    return (
        <View style={{ height:50, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', margin:5}}>
                <Icon onPress={() => props.navigation('DrawerOpen')} name="menu" color="white" size={25} style={{margin:10}} underlayColor='transparent' />
                <Text style={[font.TITLE_FONT,{color:'white', fontWeight:'bold', alignSelf: 'center', margin:5}]}>{props.headerText}</Text>
                <Text style={[font.TITLE_FONT,{color:'rgba(72,50,130,1)', margin:5, fontWeight:'bold', alignSelf:'center'}]}>Sale</Text>
            </View>

            <View style={{flexDirection:'row', margin:5,}}>
                <Icon name="favorite" color="white" size={25} style={{margin:10}} underlayColor='transparent' />
                <Icon name="shopping-cart" color="white" size={25} style={{margin:10}} underlayColor='transparent' />
                <Icon name="more-vert" color="white" size={25} style={{margin:10}} underlayColor='transparent' />
            </View>
        </View>
    );
};

export default Header;