import React from 'react';
import { Image, Text } from 'react-native';
import { Card, CardSection } from '../components/common';

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map Search',
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Map</Text>
        </CardSection>
        <CardSection>
          <Image style={{ height: 200, width: 300 }} source={{ uri: 'https://my420tours.com/wp-content/uploads/2014/05/blog29.jpg' }} />
        </CardSection>
      </Card>

    );
  }
}

export default MapScreen;
