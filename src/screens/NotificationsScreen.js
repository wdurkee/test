import React from 'react';
import { View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notification Settings',
  };
  constructor(props) {
    super(props);
    this.state = { switchValue: false };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Text>Notifications</Text>
        <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
      </View>
    );
  }
}

const styles = {
  itemStyle: {
    width: '100%',
    height: '20%',
    borderBottomWidth: 1,
    borderColor: '#dcdee2',
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemIcon: {
    paddingLeft: 20,
    height: 20,
    width: 20
  },
  itemText: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#919191'
  }
};
export default NotificationsScreen;
