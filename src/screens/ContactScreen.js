import React from 'react';
import { View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact Settings',
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Text>Contact Settings</Text>
      </View>
    );
  }
}

const styles = {

};

export default ContactScreen;
