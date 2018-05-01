import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ListSelect from '../components/ListSelect';
import { Card, CardSection, Button, ListItem, List, ListDescription, ListSection, ListImage } from '../components/common';


class QuantityScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
    title: 'Select Quantity'
  };
    /*constructor(props) {
        super(props);
        this.state = { total: 0.00 };
    }*/

  render() {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    const rating = params ? params.rating : null;
    const deliveryTime = params ? params.deliveryTime : null;
    const product = params ? params.product : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.titleBox} >
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.info}>
            <Image style={{ height: 15, width: 15 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOshcJkmYWYYilyAHPayOP8kZUwpjBpYkv2lHFjywYiYgXDK_j' }} />
            <Text>
              {rating}
            </Text>
            <Text>
              {deliveryTime}
            </Text>
          </View>
        </View>

        <Text style={styles.hours}>
          {product}
        </Text>
        <Image style={styles.imageStyle} source={{ uri: 'https://cdn.herb.co/wp-content/uploads/2017/02/20170815-HERB-PeaceandLove-0083.jpg' }} />
        <List>
          <ListSection headerText='Select Your Amount'>
            <ListSelect amount='1/8' price={50.00} onPress={() => this.props.navigation.navigate('Cart', { amount: '1/8', price: 50, product: product, dispensary: title, deliveryTime: deliveryTime, rating: rating })} />
            <ListSelect amount='1/4' price={80.00} onPress={() => this.props.navigation.navigate('Cart', { amount: '1/4', price: 80, product: product, dispensary: title, deliveryTime: deliveryTime, rating: rating })} />
            <ListSelect amount='1/2' price={120.00} onPress={() => this.props.navigation.navigate('Cart', { amount: '1/2', price: 120, product: product, dispensary: title, deliveryTime: deliveryTime, rating: rating })} />
            <ListSelect amount='OZ' price={220.00} onPress={() => this.props.navigation.navigate('Cart', { amount: 'OZ', price: 220, product: product, dispensary: title, deliveryTime: deliveryTime, rating: rating })} />
          </ListSection>
        </List>
    </View>

    );
  }
}


const styles = {
  totalStyle: {
    paddingTop: 30,
    paddingLeft: 200,
    fontSize: 14,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: 250,
    height: 166
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    margin: 10,
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  info: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  hours: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  bottomButton: {
    width: '100%',
    height: 100,
    backgroundColor: '#c2ceb5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }
};

export default QuantityScreen;
