import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
];

class ShippingView extends Component{
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

                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row', margin:5, justifyContent:'space-between'}}>
                            <View>
                                <Text style={[font.SMALL_FONT, {fontWeight:'bold',}]}>Your shipping address</Text>
                            </View>
                            <View>
                                <Icon name="remove-circle-outline" size={15}  />
                            </View>
                        </View>

                        <View style={{ margin:5, justifyContent:'space-between'}}>
                            <Text style={[font.SMALL_FONT, {color:'lightgray'}]}>Primary Address</Text>
                            <Text style={[font.MEDIUM_FONT, {}]}>Molu Thakur</Text>
                            <Text style={[font.SMALL_FONT, {}]}>#48, BBMP office road near</Text>
                            <Text style={[font.SMALL_FONT, {}]}>St. Joseph school, virat nagar, </Text>
                            <Text style={[font.SMALL_FONT, {}]}>Bomanahalli</Text>
                            <Text style={[font.SMALL_FONT, {}]}>Bangalore - 68</Text>
                            <Text style={[font.SMALL_FONT, {}]}>Karnataka, India</Text>
                            <View style={{borderWidth:0.5, borderColor:'gray', height:1}} />
                        </View>

                        <TouchableHighlight onPress={() => {} } style={{ height:width*0.1, width:width/2, alignSelf:'center', backgroundColor:'lightgray',
                            justifyContent:'center', margin:10, borderRadius:3}} underlayColor='lightgray'>
                            <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)', alignSelf:'center'}]}>+2 more Addresses</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={{backgroundColor:'#fff', marginTop:10, padding:8, flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={[font.SMALL_FONT, {alignSelf:'center'}]}>Add new addresses</Text>
                        <Icon name="add-circle-outline" size={15}  />
                    </View>

                    <TouchableHighlight onPress={() => {alert('fg')} } style={{marginTop:10, borderRadius:3, height:width*0.1, alignItems:'center',
                            justifyContent:'center', backgroundColor:'rgba(126,96,200,1)' }} underlayColor='rgba(126,96,200,1)'>
                        <Text style={[font.SMALL_FONT, {color:'#fff', alignSelf:'center'}]}>Proceed Payment</Text>
                    </TouchableHighlight>

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


export default ShippingView;