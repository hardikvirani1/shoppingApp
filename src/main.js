import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import login from './components/login';
import homeview from './components/homeview';
import product from './components/productview';

class Main extends Component {

    render(){
        return(
            <MainNav/>
        );
    }
}
const MainNav =
    StackNavigator({
            login: {screen: login},
            Drawer: {
                name: 'Drawer',
                screen: DrawerNavigator({
                    homeview: { screen: homeview },
                    product: { screen: product }
                    }),
            },
        },
        {
            headerMode: 'none'
        }
    );
export default MainNav;