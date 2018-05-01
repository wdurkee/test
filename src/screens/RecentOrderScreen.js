import React from 'react';
import { View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class RecentOrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent Orders',
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Text>Recent Orders</Text>
      </View>
    );
  }
}

const styles = {

};
export default RecentOrderScreen;
