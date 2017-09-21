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

class ProductList extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {
            return(
                <View key={item.id} style={{margin:8, padding:6, marginBottom:0, height:height/2.6, backgroundColor:'#fff'}}>
                    <View style={{height:height/3}}>
                        <View>
                            <Image source={item.uri} resizeMode="contain" style={{height:height/3-30, width:width-100, alignSelf:'center'}} />
                        </View>
                        <View style={styles.DetailWrappers}>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray'}]}>{item.name}</Text>
                            <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', }}>
                            <Text style={[font.SMALL_FONT, { color:'gray', marginRight:7, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{item.price}</Text>
                            <Text style={[font.SMALL_FONT, {color:'gray'}]}>{item.off}</Text>
                        </View>
                    </View>
                </View>
            );
        })
    }


    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Products'} navigation={this.props.navigation.navigate} />

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


export default ProductList;