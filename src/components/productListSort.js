import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import font from '../helper/fontsize';
import Header from '../helper/staticHeader';
import {Button, Icon, Card} from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';

const {width, height} = Dimensions.get('window');
const options = [ 'Cancel', 'Men', 'Women', ];
const title = 'Select Category';
const data = [
    {id:1, name:'PartyWear Glasses', price:'INR 1596', uri: require('../../images/coat.jpeg'),  off: '60% off', },
    {id:2, name:'PartyWear Shoes', price:'INR 895', uri: require('../../images/shoes.jpeg'), off: '45% off', },
    {id:3, name:'Wool Blend Coat', price:'INR 2569', uri: require('../../images/cashmere-coat.jpeg'), off: '86% off', },
    {id:4, name:'Long Cashmere Trench', price:'INR 956', uri: require('../../images/coat-women.jpg'),  off: '54% off', },
    {id:5, name:'PartyWear Glasses', price:'INR 1862', uri: require('../../images/coat-women.jpg'),  off: '33% off', },
    {id:6, name:'PartyWear Hombug', price:'INR 939', uri: require('../../images/cashmere-coat.jpeg'), off: '25% off', },
    {id:7, name:'Wool Blend Coat', price:'INR 3955', uri: require('../../images/shoes.jpeg'), off: '35% off', },
];

let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 0;

class ProductListSort extends Component{

    state = {
        selectedIndex:0, clicked: 'none',  selected: '1',
    };

    static navigationOptions = {
        header: null,
    };

    renderCard(){
        return data.map(item => {

            return(
                <Card key={item.id} flexDirection="row" containerStyle={{marginRight:8, marginLeft:8, marginTop:0, marginBottom:8}}>
                    <View style={{height:height/3, width:width/2}}>
                        <View>
                            <Image source={item.uri} resizeMode="contain" style={{height:height/3-30, width:width/2-50, alignSelf:'center'}} />
                        </View>
                        <View style={styles.DetailWrappers}>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray'}]}>{item.name}</Text>
                            <Text style={[font.SMALL_FONT, {color:'rgba(126,96,200,1)'}]}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', }}>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray', marginRight:7, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{item.price}</Text>
                            <Text style={[font.SMALL_FONT, {fontWeight:'bold', color:'gray'}]}>{item.off}</Text>
                        </View>
                    </View>
                </Card>
            );
        })
    }

    showActionSheets = () => {
        this.ActionSheet.show()
    };

    handlePress = (i) => {
        if(i === 0){}
        else {
            this.setState({selected: i})
        }
    };

    render(){
        return(
            <View style={styles.mainView}>
                <Header headerText={'Products Sort'} navigation={this.props.navigation.navigate} />

                <View style={styles.sortView}>
                    <View style={{flexDirection:'row',}}>
                        <Icon name="list" color="black" iconStyle={{backgroundColor:'#fff', padding:2, marginRight:5}} size={25} underlayColor='transparent' />
                        <Icon name="insert-chart" iconStyle={{backgroundColor:'#fff', padding:2}} color="black" size={25} underlayColor='transparent' />
                    </View>
                    <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                        <Button onPress={this.showActionSheets} icon={{name: 'keyboard-arrow-down', color:'black', }}
                                iconRight={true} title={options[this.state.selected]} backgroundColor="#fff"
                                color="black" buttonstyle={{height:20}}  />
                        <ActionSheet
                            ref={o => this.ActionSheet = o}
                            title={title}
                            options={options}
                            cancelButtonIndex={CANCEL_INDEX}
                            destructiveButtonIndex={DESTRUCTIVE_INDEX}
                            onPress={this.handlePress}
                        />
                    </View>
                </View>

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
    sortView: {
        margin:8,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});


export default ProductListSort;