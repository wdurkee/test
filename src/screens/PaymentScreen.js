import React from 'react';
import { View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class PaymentScreen extends React.Component {
  static navigationOptions = {
    title: 'Payment Settings',
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Text>Payment Settings</Text>
      </View>
    );
  }
}

const styles = {

};
export default PaymentScreen;
