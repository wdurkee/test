import React from 'react';
import { AlertIOS, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button, UserButton } from '../components/common';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: (
      <UserButton />
    ),
  };

  componentDidMount() {
    AlertIOS.alert(
      'Age Verification',
      'Budlr operates in compliance with state laws regarding access to cannabis. Are you at least 21 years old or a valid medical marijuana patient?',
    [
      {
        text: 'No',
        onPress: this.locationAlert,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: this.locationAlert,
      },
    ]
    );
  }

  locationAlert() {
    AlertIOS.alert(
      'Location Services',
      'If you enable Location Services we can show you nearby dispensaries and deals for delivery services while this app is in use.',
    [
      {
        text: 'Not Now',
        onPress: () => console.log('No Pressed'),
        style: 'cancel',
      },
      {
        text: 'Enable',
        onPress: () => console.log('Yes Pressed'),
      },
    ]
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card>
        <CardSection>
          <Text>Home Screen</Text>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Dispensary')}>
            Menu Item
          </Button>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}>
            <Image style={{ height: 200, width: 300 }} source={{ uri: 'https://my420tours.com/wp-content/uploads/2014/05/blog29.jpg' }} />
          </TouchableOpacity>
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Dispensary')}>
            Dispensary Page
          </Button>
        </CardSection>
      </Card>

    </ScrollView>

    );
  }
}

export default HomeScreen;
