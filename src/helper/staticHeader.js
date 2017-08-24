import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import font from './fontsize';
import { Icon, Button } from "react-native-elements";

const StaticHeader = (props) => {
    return (
        <View style={{ height:55, flexDirection:'row', backgroundColor:'rgba(126,96,200,1)',}}>
            <Icon onPress={() => props.navigation('DrawerOpen')} name="arrow-back" color="white"
                  size={25} style={{margin:15}} underlayColor='transparent' />
            <Text style={[font.TITLE_FONT,{color:'white', fontWeight:'bold', alignSelf: 'center', margin:5}]}>
                {props.headerText}</Text>
        </View>
    );
};

export default StaticHeader;