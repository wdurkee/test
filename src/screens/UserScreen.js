import React from 'react';
import { Image, Text } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <List>
        <ListSection>
          <Text>Recent Orders</Text>
          <Text>Payment</Text>
          <Text>Notifications</Text>
          <Text>Contact Info</Text>
        </ListSection>
      </List>

    );
  }
}

export default UserScreen;
