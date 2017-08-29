import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
    {id:2, name:'PartyWear Shoes', price:'INR 895', uri: require('../../images/shoes.jpeg'), off: '45% off', },
    {id:3, name:'Wool Blend Coat', price:'INR 2569', uri: require('../../images/cashmere-coat.jpeg'), off: '86% off', },
    {id:4, name:'Long Cashmere Trench', price:'INR 956', uri: require('../../images/coat-women.jpg'),  off: '54% off', },
    {id:5, name:'PartyWear Glasses', price:'INR 1862', uri: require('../../images/coat-women.jpg'),  off: '33% off', },
    {id:6, name:'PartyWear Hombug', price:'INR 939', uri: require('../../images/cashmere-coat.jpeg'), off: '25% off', },
    {id:7, name:'Wool Blend Coat', price:'INR 3955', uri: require('../../images/shoes.jpeg'), off: '35% off', },
];

class CartView extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {

            return(
                <View key={item.id} style={{height:height/4.1, backgroundColor:'#fff', margin:10, marginTop:10, marginBottom:0, padding:5}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Image source={item.uri} resizeMode="contain" style={{height:width/3, width:width/3, }} />
                        </View>
                        <View style={styles.DetailWrappers}>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold',}]}>{item.name}</Text>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold',}]}>Wool Blend Coat</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                                <Icon name="close" size={18} containerStyle={{marginRight:-30}} />
                                <Text style={[font.SMALL_FONT, {fontWeight:'bold', marginRight:5}]}>{item.price}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{ flexDirection:'row', marginLeft:5 }}>
                            <Icon name="add-circle-outline" size={15} />
                            <Text style={[font.MEDIUM_FONT, ]}>1</Text>
                            <Icon name="remove-circle-outline" size={15} />
                        </View>
                        <View style={{marginRight:5}}>
                            <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>Show Details</Text>
                        </View>
                    </View>
                </View>
            );
        })
    }

    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Shopping Cart'} navigation={this.props.navigation.navigate} />

                <ScrollView>
                    {this.renderCard()}
                </ScrollView>

                <TouchableHighlight onPress={() => {alert('press')}} style={{ height:width*0.1, backgroundColor:'rgba(126,96,200,1)',
                    justifyContent:'center', margin:10, borderRadius:5}} underlayColor='rgba(126,96,200,1)'>
                    <Text style={[font.MEDIUM_FONT, {color:'#fff', alignSelf:'center'}]}>Order Details</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    },
    DetailWrappers: {
        marginTop:5
    }
});


export default CartView;