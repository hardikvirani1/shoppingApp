import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
];

class AddressView extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {
            return(
                <View key={item.id} style={{margin:5, marginBottom:0, backgroundColor:'#fff'}}>
                    <View>
                        <Text style={[font.MEDIUM_FONT, {alignSelf:'center'}]}>Axis Bank</Text>
                        <View style={{borderWidth:0.5, borderColor:'gray', height:1, margin:5}} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[font.MEDIUM_FONT, {marginBottom:5}]}>Card Number *</Text>
                        <TextInput style={[styles.inputText, font.TEXTBOX_FONT]}
                                   placeholder="0000-0000-0000-0000" placeholderTextColor="gray"/>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[font.MEDIUM_FONT, {marginBottom:5}]}>Card Name *</Text>
                        <TextInput style={[styles.inputText, font.TEXTBOX_FONT]}
                                   placeholder="Name written on card" placeholderTextColor="gray"/>
                    </View>

                    <View style={{flexDirection:'row', margin:10,}}>
                        <View>
                            <Text style={[font.MEDIUM_FONT, {marginBottom:5}]}>MM</Text>
                            <TextInput style={[ font.TEXTBOX_FONT, {height:30, width:width/6, borderWidth:1,
                                borderColor:'gray', padding:3}]} />
                        </View>
                        <View style={{marginLeft:5}}>
                            <Text style={[font.MEDIUM_FONT, {marginBottom:5}]}>YY</Text>
                            <TextInput style={[ font.TEXTBOX_FONT, {height:30, width:width/6, borderWidth:1,
                                borderColor:'gray', padding:3}]} />
                        </View>
                        <View style={{flex:1, justifyContent:'flex-end', marginLeft:5}}>
                            <Text style={[font.MEDIUM_FONT, {marginBottom:5}]}>CVV</Text>
                            <TextInput style={[ font.TEXTBOX_FONT, {height:30, width:width/6, borderWidth:1,
                                borderColor:'gray', padding:3}]} />
                        </View>
                    </View>
                </View>
            );
        })
    }

    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Payment'} navigation={this.props.navigation.navigate} />

                <ScrollView>
                    {this.renderCard()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    },
    DetailWrappers: {
        alignItems:'center',
        marginTop:5,
    },
    inputText: {
        height:30,
        width:width-30,
        borderWidth:1,
        borderColor:'gray',
        padding:3
    },
    inputView: {
        margin:10,
    },
});


export default AddressView;