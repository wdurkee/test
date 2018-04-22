import React from 'react';
import { Image } from 'react-native';
import { Card, CardSection, Button, Input } from '../components/common';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="search"
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection>
          <Button>Search</Button>
        </CardSection>
      </Card>

    );
  }
}

export default SearchScreen;
