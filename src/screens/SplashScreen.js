import React from 'react';
import { Text, View, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Card, CardSection, Button } from '../components/common';


class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <GestureRecognizer style={styles.viewStyle} onSwipeLeft={() => this.props.navigation.navigate('Login')} >
          <Text style={styles.textStyle}>
          Budlr at Your Service.
          </Text>
          <Image style={styles.manImageStyle} source={{ uri: 'https://www.clker.com/cliparts/3/u/P/P/q/W/walking-icon-hi.png' }} />
          <Image style={styles.arrowImageStyle} source={{ uri: 'https://image.flaticon.com/icons/svg/28/28370.svg' }} />
      </GestureRecognizer>
    );
  }
}


const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'relative',
  },
  textStyle: {
    fontStyle: 'italic',
    paddingTop: 100,
    paddingLeft: 20,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  manImageStyle: {
    resizeMode: 'center',
    flex: 1,
    height: 50,
    width: 30,
    paddingLeft: 500,
    paddingTop: 525
  },
  arrowImageStyle: {
    resizeMode: 'center',
    flex: 1,
    height: 100,
    width: 100,
    paddingLeft: 500,
    paddingTop: 650

  }
};

export default SplashScreen;

/* static navigationOptions = {
  header: { visible: false }
}; */

// <Button onPress={() => this.props.navigation.navigate('Login')} > Continue </Button>
