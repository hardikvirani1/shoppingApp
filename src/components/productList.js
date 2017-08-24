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
                <Card key={item.id}>
                    <View style={{height:height/3}}>
                        <View>
                            <Image source={item.uri} style={{height:height/3-50, width:width-100}} />
                        </View>
                        <View style={styles.DetailWrappers}>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray'}]}>{item.name}</Text>
                            <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>{item.price}</Text>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray'}]}>{item.price} {item.off}</Text>
                        </View>
                    </View>
                </Card>
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
        margin:5,
    }
});


export default ProductList;