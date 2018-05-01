import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Order',
  };
  render() {
    const { params } = this.props.navigation.state;
    const dispensary = params ? params.dispensary : null;
    const price = params ? params.price : null;
    const amount = params ? params.amount : null;
    const product = params ? params.product : null;

    return (

      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>

        <Text style={styles.titleText}>{dispensary}</Text>

        <Text style={{ paddingLeft: 10 }}>Delivered</Text>
        <Image style={styles.imageStyle} source={{ uri: 'https://cdn.herb.co/wp-content/uploads/2017/02/20170815-HERB-PeaceandLove-0083.jpg' }} />

        <Text style={styles.hours}>
          {product}
        </Text>


        <View style={styles.itemStyle}>
          <Text>User Address</Text>
          <Text>First Last</Text>
          <Text>+1 888-123-4567</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Visa 0987</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Your Order</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>{product} {amount}</Text>
          <Text>${price}</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Subtotal</Text>
          <Text>Small Cart Fee</Text>
          <Text>Tax</Text>
          <Text>Delivery</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Total</Text>
        </View>
        <TouchableOpacity style={styles.bottomButton} onPress={() => this.props.navigation.navigate('Home')} >
          <Text style={styles.bottomButtonText}>
            Home
          </Text>
        </TouchableOpacity>
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
    width: '90%',
    height: '20%',
    alignSelf: 'center'
  },
  itemStyle: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: '#dcdee2',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 10
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '10%',
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
    paddingLeft: 10,
    paddingTop: 20
  },
  hours: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10
  },
  bottomButton: {
    width: '100%',
    height: 80,
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
export default OrderScreen;
