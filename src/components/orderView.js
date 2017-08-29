import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
    {id:2, name:'PartyWear Shoes', price:'INR 895', uri: require('../../images/shoes.jpeg'), off: '45% off', },
    {id:3, name:'Material Wool Blend Coat', price:'INR 2569', uri: require('../../images/cashmere-coat.jpeg'), off: '86% off', },
    {id:4, name:'Long Cashmere Trench', price:'INR 956', uri: require('../../images/coat-women.jpg'),  off: '54% off', },
    {id:5, name:'PartyWear Glasses', price:'INR 1862', uri: require('../../images/coat-women.jpg'),  off: '33% off', },
    {id:6, name:'PartyWear Hombug', price:'INR 939', uri: require('../../images/cashmere-coat.jpeg'), off: '25% off', },
    {id:7, name:'Wool Blend Material Coat ', price:'INR 3955', uri: require('../../images/shoes.jpeg'), off: '35% off', },
];

class OrderView extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {
            return(
                <View key={item.id} style={{margin:5, padding:5, marginBottom:0, height:height/2.5}}>
                    <View style={{flexDirection:'row', marginBottom:3, justifyContent:'space-between'}}>
                        <View>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold'}]}>OrderID: 9809608703</Text>
                            <Text style={[font.SMALL_FONT, {color:'black'}]}>Placed On: 22 June 2018</Text>
                        </View>
                        <View>
                            <TouchableHighlight style={{borderRadius:4, backgroundColor:'lightgray', padding:7,}}>
                                <Text style={[font.SMALL_FONT]}>DETAILS</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row',}}>
                            <View>
                                <Image source={item.uri} resizeMode="contain" style={{height:height/5, width:height/5, }} />
                            </View>
                            <View style={{margin:6}}>
                                <View>
                                    <Text style={[font.SMALL_FONT, {fontWeight:'bold',}]}>{item.name}</Text>
                                    <Text style={[font.SMALL_FONT, {fontWeight:'bold',}]}>Wool Blend Coat</Text>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                                    <View>
                                        <Text style={[font.SMALL_FONT, {color:'gray'}]}>Status:</Text>
                                        <Text style={[font.SMALL_FONT, {color:'green'}]}>Delivered Successfully</Text>
                                        <Text style={[font.SMALL_FONT, {color:'gray'}]}>Last Updated: 22 Jun 2016</Text>
                                        <Text style={[font.SMALL_FONT, {color:'gray'}]}>Delivered On: 27 Jun 2016</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignSelf:'center'}}>
                                <Icon name="refresh" size={20} />
                            </View>
                        </View>

                        <View style={{justifyContent:'center', alignSelf:'center'}}>
                            <View style={{ flexDirection:'row', }}>
                                <Icon name="check-circle" size={15} color="rgba(126,96,200,1)" />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:width/3.5, height:1}} />
                                <Icon name="check-circle" size={15} color="rgba(126,96,200,1)" />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:width/3.5, height:1}} />
                                <Icon name="check-circle" size={15} color="rgba(126,96,200,1)" />
                            </View>

                            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:5 }}>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>PLACED</Text>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>DISPATCHED</Text>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>DELIVERED</Text>
                            </View>
                        </View>

                        <View style={{alignSelf:'flex-end', width:width/4}}>
                            <TouchableHighlight onPress={() =>{this.props.navigation.navigate('paymentview')}} style={{ backgroundColor:'rgba(126,96,200,1)', padding:6,
                               margin:10, borderRadius:5}} underlayColor='rgba(126,96,200,1)'>
                                <Text style={[font.SMALL_FONT, {color:'#fff', alignSelf:'center'}]}>TRACK</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
            );
        })
    }


    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'My Order'} navigation={this.props.navigation.navigate} />

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
    }
});


export default OrderView;