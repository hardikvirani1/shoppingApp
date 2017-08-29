import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import login from './components/login';
import homeview from './components/homeview';
import profiles from './components/profiles';
import productlist from './components/productList';
import productlistsort from './components/productListSort';
import cartview from './components/cartView';
import orderview from './components/orderView';
import shippingview  from './components/shippingView';
import paymentview from './components/paymentView';

class Main extends Component {

    render(){
        return(
            <MainNav/>
        );
    }
}

const MainNav = StackNavigator({
        login: {screen: login},
        orderview: {screen: orderview},
        shippingview: {screen: shippingview},
        paymentview: {screen: paymentview},
        Drawer: {
            screen: DrawerNavigator({
                homeview: { screen: homeview },
                profiles: { screen: profiles },
                productlist: {screen: productlist},
                productlistsort: {screen: productlistsort},
                cartview: {screen: cartview},
            },{
                    //contentComponent:props=> <Image source={require('../images/bulb.jpeg')} style={{height:100}} />
                }
                ),
        },
    },
    {
        headerMode: 'none'
    }
);

export default MainNav;