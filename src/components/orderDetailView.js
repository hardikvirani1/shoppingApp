import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
];

class OrderDetailView extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {
            return(
                <View key={item.id} style={{margin:5, padding:5, marginBottom:0, backgroundColor:'#fff'}}>
                    <View style={{marginBottom:3, }}>
                        <View style={{ flexDirection:'row'}}>
                            <View style={{  }}>
                                <View style={{width:14, height:14, borderRadius: 7, backgroundColor:'rgba(126,96,200,1)'}} />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:1, height:width/3.5}} />
                                <View style={{width:14, height:14, borderRadius: 7, backgroundColor:'rgba(126,96,200,1)'}} />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:1, height:width/3.5}} />
                                <View style={{width:14, height:14, borderRadius: 7, backgroundColor:'rgba(126,96,200,1)'}} />
                            </View>

                            <View style={{ justifyContent:'space-between', marginLeft:5}}>
                                <View>
                                    <Text style={[font.MEDIUM_FONT, ]}>DELIVERED</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                </View>
                                <View>
                                    <Text style={[font.MEDIUM_FONT, ]}>DISPATCHED</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                    <Text style={[font.SMALL_FONT, ]}>Industry: My pass is amazing too with.</Text>
                                    <Text style={[font.SMALL_FONT, {color:'gray'} ]}>27th June 2017</Text>
                                </View>
                                <View>
                                    <Text style={[font.MEDIUM_FONT, ]}>PLACED</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            );
        })
    }

    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Order_number: 9809608703'} navigation={this.props.navigation.navigate} />

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


export default OrderDetailView;