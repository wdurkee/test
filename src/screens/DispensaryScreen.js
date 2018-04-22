import React from 'react';
import { Image } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dispensary',
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Image style={{ height: 200, width: 300 }} source={{ uri: 'https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Cart')}>Add To Cart</Button>
        </CardSection>
      </Card>

    );
  }
}

export default HomeScreen;
