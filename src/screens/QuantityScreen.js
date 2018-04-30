import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card, CardSection, Button, ListItem, List, ListDescription, ListSection, ListImage } from '../components/common';

class QuantityScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
  };
  render() {
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    const rating = params ? params.rating : null;
    const deliveryTime = params ? params.deliveryTime : null;
    const product = params ? params.product : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.titleBox} >
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.info}>
            <Image style={{ height: 15, width: 15 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOshcJkmYWYYilyAHPayOP8kZUwpjBpYkv2lHFjywYiYgXDK_j' }} />
            <Text>
              {rating}
            </Text>
            <Text>
              {deliveryTime}
            </Text>
          </View>
        </View>

        <Text style={styles.hours}>
          {product}
        </Text>
        <List>
          <ListSection headerText='Choice of Size'>
            <ListItem onPress={() => this.props.navigation.navigate('Cart')} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
            <ListItem onPress={() => this.props.navigation.navigate('Cart')} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
            <ListItem onPress={() => this.props.navigation.navigate('Cart')} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
          </ListSection>
        </List>
    </View>

    );
  }
}


const styles = {
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    margin: 10,
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  info: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  hours: {
    titleText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black'
    },
  }
}

export default QuantityScreen;
