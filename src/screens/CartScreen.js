import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping Cart',
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Your Cart</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Order')}>Order</Button>
        </CardSection>
      </Card>

    );
  }
}

export default CartScreen;
