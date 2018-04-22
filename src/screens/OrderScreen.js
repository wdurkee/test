import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../components/common';

class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Your Order Was Received!!!</Text>
        </CardSection>
      </Card>

    );
  }
}

export default OrderScreen;
