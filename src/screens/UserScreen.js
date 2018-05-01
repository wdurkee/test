import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, Input, List, ListSection } from '../components/common';

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} >
        <View style={{ flexDirection: 'column' }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RecentOrders')} style={styles.itemStyle}>
              <Text style={styles.itemText}>
                Recent Orders
              </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Payment')}style={styles.itemStyle}>
              <Text style={styles.itemText}>
                Payment
              </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')} style={styles.itemStyle}>
              <Text style={styles.itemText}>
                Notifications
              </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')} style={styles.itemStyle}>
              <Text style={styles.itemText}>
                Contact Info
              </Text>

            </TouchableOpacity>
          </View>
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
export default UserScreen;
