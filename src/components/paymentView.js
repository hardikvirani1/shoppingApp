import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card, SocialIcon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
];

class PaymentView extends Component{
    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {
            return(
                <View key={item.id} style={{margin:5, padding:5, marginBottom:0}}>
                    <View style={{flexDirection:'row', marginBottom:3, justifyContent:'center'}}>
                        <View style={{justifyContent:'center', alignSelf:'center'}}>
                            <View style={{ flexDirection:'row', }}>
                                <Image source={require('../../images/login.png')} style={{width:width*.1, height:width*.1, borderRadius: width*.1/2}} />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:width/3.5, height:1}} />
                                <Image source={require('../../images/shipping.png')} style={{width:width*.1, height:width*.1, borderRadius: width*.1/2}} />
                                <View style={{alignSelf:'center', borderWidth:0.5, borderColor:'rgba(126,96,200,1)', width:width/3.5, height:1}} />
                                <Image source={require('../../images/dolar.png')} style={{width:width*.1, height:width*.1, borderRadius: width*.1/2}}  />
                            </View>

                            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:5 }}>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>Login</Text>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>Shipping</Text>
                                <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>Payment</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', marginTop:5}}>
                        <TouchableHighlight onPress={() => {alert('fg')} } style={{ height:width*0.1, alignItems:'center',
                            justifyContent:'center',  }} underlayColor='rgba(126,96,200,1)'>
                            <Text style={[font.SMALL_FONT, { marginLeft:10}]}>Net Banking</Text>
                        </TouchableHighlight>
                        <Icon name="arrow-drop-down" size={25}  />
                        <SocialIcon type='instagram' />
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
    }
});


export default PaymentView;