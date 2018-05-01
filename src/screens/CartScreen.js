import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Cart',
  };
  render() {
    const { params } = this.props.navigation.state;
    const dispensary = params ? params.dispensary : null;
    const price = params ? params.price : null;
    const amount = params ? params.amount : null;
    const product = params ? params.product : null;
    const rating = params ? params.rating : null;
    const deliveryTime = params ? params.deliveryTime : null;

    return (

      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.titleBox} >
          <Text style={styles.titleText}>{dispensary}</Text>
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

        <Image style={{ height: 80, width: 100 }} source={{ uri: 'https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg' }} />

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
        <TouchableOpacity style={styles.bottomButton} onPress={() => this.props.navigation.navigate('Order', { amount: '1/8', price: 50, product: product, dispensary: dispensary, deliveryTime: deliveryTime, rating: rating })}>
          <Text style={styles.bottomButtonText}>
            Place Order
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
    width: 250,
    height: 166
  },
  itemStyle: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: '#dcdee2',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
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
export default CartScreen;
